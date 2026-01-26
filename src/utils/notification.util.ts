import PrismaInstance from "../database";
import { sendEmail } from "./apiKey";
import type { PrismaClient } from "../database";

const prisma = PrismaInstance;

export class NotificationUtil {
    private static prisma: PrismaClient = prisma;

    /**
     * Mengirim notifikasi email ke Admin saat ada Wali baru dibuat
     */
    static async notifyAdminWaliCreated(waliEmail: string, username: string, institutionId: string) {
        const admin = await this.getAdminByInstitution(institutionId);
        if (!admin) return;

        await sendEmail({
            to: admin.email,
            subject: "Notifikasi: Pendaftaran Wali Baru",
            html: `
        <h3>Pendaftaran Wali Murid Baru</h3>
        <p>Halo Admin,</p>
        <p>Wali murid baru telah terdaftar di sistem:</p>
        <ul>
          <li><strong>Username:</strong> ${username}</li>
          <li><strong>Email:</strong> ${waliEmail}</li>
        </ul>
        <p>Silakan cek dashboard untuk informasi lebih lanjut.</p>
      `,
        });
    }

    /**
     * Mengirim notifikasi email ke Admin saat ada Santri baru
     */
    static async notifyAdminSantriCreated(santriName: string, nis: string, institutionId: string) {
        const admin = await this.getAdminByInstitution(institutionId);
        if (!admin) return;

        await sendEmail({
            to: admin.email,
            subject: "Notifikasi: Santri Baru Terdaftar",
            html: `
        <h3>Santri Baru Terdaftar</h3>
        <p>Halo Admin,</p>
        <p>Santri baru telah berhasil didaftarkan:</p>
        <ul>
          <li><strong>Nama:</strong> ${santriName}</li>
          <li><strong>NIS:</strong> ${nis}</li>
        </ul>
      `,
        });
    }

    /**
     * Mengirim notifikasi email ke Admin & Wali saat data Santri diupdate
     */
    static async notifySantriUpdated(santriId: string, institutionId: string) {
        const santri = await this.prisma.santri.findUnique({
            where: { id: santriId },
            include: { wali: true }
        });

        if (!santri) return;

        const admin = await this.getAdminByInstitution(institutionId);

        const emailContent = `
      <h3>Pembaruan Data Santri</h3>
      <p>Halo,</p>
      <p>Data santri berikut telah diperbarui dalam sistem:</p>
      <ul>
        <li><strong>Nama:</strong> ${santri.fullname}</li>
        <li><strong>NIS:</strong> ${santri.nis}</li>
        <li><strong>Kelas:</strong> ${santri.kelas}</li>
      </ul>
    `;

        // Notify Wali
        if (santri.wali?.email) {
            await sendEmail({
                to: santri.wali.email,
                subject: "Notifikasi: Pembaruan Data Santri",
                html: emailContent,
            });
        }

        // Notify Admin
        if (admin) {
            await sendEmail({
                to: admin.email,
                subject: "Notifikasi: Pembaruan Data Santri",
                html: emailContent,
            });
        }
    }

    /**
     * Mengirim notifikasi email ke Admin & Wali saat ada Transaksi (Pemasukan/Pengeluaran)
     */
    static async notifyTransactionCreated(transactionId: string) {
        const transaction = await this.prisma.transaction.findUnique({
            where: { id: transactionId },
            include: {
                santri: {
                    include: { wali: true }
                },
                category: true
            }
        });

        if (!transaction) return;

        const admin = await this.getAdminByInstitution(transaction.santri.institutionId);

        const nominal = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(Number(transaction.amount));

        const emailContent = `
      <h3>Notifikasi Transaksi Baru</h3>
      <p>Halo,</p>
      <p>Terdapat transaksi baru untuk santri <strong>${transaction.santri.fullname}</strong>:</p>
      <ul>
        <li><strong>Jenis:</strong> ${transaction.type === 'PEMASUKAN' ? 'Pemasukan' : 'Pengeluaran'}</li>
        <li><strong>Kategori:</strong> ${transaction.category.name}</li>
        <li><strong>Nominal:</strong> ${nominal}</li>
        <li><strong>Keterangan:</strong> ${transaction.description || '-'}</li>
        <li><strong>Tanggal:</strong> ${transaction.transactionDate.toLocaleDateString('id-ID')}</li>
      </ul>
    `;

        // Notify Wali
        if (transaction.santri.wali?.email) {
            await sendEmail({
                to: transaction.santri.wali.email,
                subject: `Notifikasi: Transaksi ${transaction.type === 'PEMASUKAN' ? 'Masuk' : 'Keluar'}`,
                html: emailContent,
            });
        }

        // Notify Admin
        if (admin) {
            await sendEmail({
                to: admin.email,
                subject: `Notifikasi: Transaksi ${transaction.type === 'PEMASUKAN' ? 'Masuk' : 'Keluar'}`,
                html: emailContent,
            });
        }
    }

    private static async getAdminByInstitution(institutionId: string) {
        // Mencari user dengan role ADMIN di institusi tersebut
        return await this.prisma.users.findFirst({
            where: {
                institutionId,
                role: 'ADMIN',
                isActive: true
            }
        });
    }
}
