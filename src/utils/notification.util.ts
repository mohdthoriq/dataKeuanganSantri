import PrismaInstance from "../database";
import { sendEmail } from "./apiKey";
import type { PrismaClient } from "../database";

const prisma = PrismaInstance;

export class NotificationUtil {
    private static prisma: PrismaClient = prisma;

    private static baseTemplate(title: string, content: string, color: string = "#3b82f6") {
        return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; }
          .header { background-color: ${color}; color: white; padding: 20px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { padding: 30px; background-color: #ffffff; }
          .footer { background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; }
          .button { display: inline-block; padding: 12px 24px; background-color: ${color}; color: white; text-decoration: none; border-radius: 5px; margin-top: 20px; font-weight: bold; }
          .info-box { background-color: #f3f4f6; border-left: 4px solid ${color}; padding: 15px; margin: 20px 0; }
          ul { padding-left: 20px; }
          li { margin-bottom: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>${title}</h1>
          </div>
          <div class="content">
            ${content}
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Aplikasi Keuangan Santri. All rights reserved.</p>
            <p>Email ini dikirimkan secara otomatis, mohon tidak membalas email ini.</p>
          </div>
        </div>
      </body>
      </html>
    `;
    }

    /**
     * Mengirim notifikasi email ke Admin saat ada Wali baru dibuat
     */
    static async notifyAdminWaliCreated(waliEmail: string, username: string, institutionId: string) {
        const admin = await this.getAdminByInstitution(institutionId);
        if (!admin) return;

        const content = `
      <p>Halo Admin,</p>
      <p>Wali murid baru telah berhasil terdaftar ke dalam sistem Anda.</p>
      <div class="info-box">
        <strong>Detail Akun Wali:</strong>
        <ul>
          <li><strong>Username:</strong> ${username}</li>
          <li><strong>Email:</strong> ${waliEmail}</li>
        </ul>
      </div>
      <p>Silakan login ke dashboard untuk mengelola data akun ini lebih lanjut.</p>
    `;

        await sendEmail({
            to: admin.email,
            subject: "Notifikasi: Pendaftaran Wali Baru",
            html: this.baseTemplate("Pendaftaran Wali Baru", content, "#3b82f6"),
        });
    }

    /**
     * Mengirim notifikasi email ke Admin saat ada Santri baru
     */
    static async notifyAdminSantriCreated(santriName: string, nis: string, institutionId: string) {
        const admin = await this.getAdminByInstitution(institutionId);
        if (!admin) return;

        const content = `
      <p>Halo Admin,</p>
      <p>Data santri baru telah ditambahkan ke database institusi Anda.</p>
      <div class="info-box">
        <strong>Identitas Santri:</strong>
        <ul>
          <li><strong>Nama Lengkap:</strong> ${santriName}</li>
          <li><strong>NIS:</strong> ${nis}</li>
        </ul>
      </div>
    `;

        await sendEmail({
            to: admin.email,
            subject: "Notifikasi: Santri Baru Terdaftar",
            html: this.baseTemplate("Santri Baru Terdaftar", content, "#3b82f6"),
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

        const content = `
      <p>Halo,</p>
      <p>Kami ingin menginformasikan bahwa data profil santri telah diperbarui:</p>
      <div class="info-box">
        <strong>Data Santri Terbaru:</strong>
        <ul>
          <li><strong>Nama:</strong> ${santri.fullname}</li>
          <li><strong>NIS:</strong> ${santri.nis}</li>
          <li><strong>Kelas:</strong> ${santri.kelas}</li>
        </ul>
      </div>
      <p>Jika perubahan ini bukan dilakukan oleh Anda, silakan hubungi tim dukungan.</p>
    `;

        const html = this.baseTemplate("Pembaruan Data Santri", content, "#f59e0b");

        // Notify Wali
        if (santri.wali?.email) {
            await sendEmail({
                to: santri.wali.email,
                subject: "Notifikasi: Pembaruan Data Santri",
                html,
            });
        }

        // Notify Admin
        if (admin) {
            await sendEmail({
                to: admin.email,
                subject: "Notifikasi: Pembaruan Data Santri",
                html,
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
        const isPemasukan = transaction.type === 'PEMASUKAN';
        const color = isPemasukan ? "#10b981" : "#ef4444";

        const content = `
      <p>Halo,</p>
      <p>Terdapat catatan transaksi baru untuk santri <strong>${transaction.santri.fullname}</strong>:</p>
      <div class="info-box">
        <strong>Detail Transaksi:</strong>
        <ul>
          <li><strong>Jenis:</strong> ${isPemasukan ? 'Pemasukan (Uang Masuk)' : 'Pengeluaran (Uang Keluar)'}</li>
          <li><strong>Kategori:</strong> ${transaction.category.name}</li>
          <li><strong>Nominal:</strong> <span style="color: ${color}; font-weight: bold;">${nominal}</span></li>
          <li><strong>Keterangan:</strong> ${transaction.description || '-'}</li>
          <li><strong>Tanggal:</strong> ${transaction.transactionDate.toLocaleDateString('id-ID')}</li>
        </ul>
      </div>
    `;

        const html = this.baseTemplate(`Laporan Transaksi ${isPemasukan ? 'Masuk' : 'Keluar'}`, content, color);

        // Notify Wali
        if (transaction.santri.wali?.email) {
            await sendEmail({
                to: transaction.santri.wali.email,
                subject: `Notifikasi: Transaksi ${isPemasukan ? 'Masuk' : 'Keluar'} - ${transaction.santri.fullname}`,
                html,
            });
        }

        // Notify Admin
        if (admin) {
            await sendEmail({
                to: admin.email,
                subject: `Notifikasi: Transaksi ${isPemasukan ? 'Masuk' : 'Keluar'} - ${transaction.santri.fullname}`,
                html,
            });
        }
    }

    /**
     * Mengirim notifikasi email saat pembayaran berhasil (Midtrans)
     */
    static async notifyPaymentSuccess(userId: string, amount: number, invoiceId: string) {
        const user = await this.prisma.users.findUnique({
            where: { id: userId },
            include: { institution: true }
        });

        if (!user || !user.email) return;

        const nominal = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);

        const content = `
      <p>Halo <strong>${user.username}</strong>,</p>
      <p>Pembayaran untuk tagihan Anda telah berhasil kami terima.</p>
      <div class="info-box">
        <strong>Detail Pembayaran:</strong>
        <ul>
          <li><strong>ID Invoice:</strong> ${invoiceId}</li>
          <li><strong>Nominal:</strong> <span style="color: #10b981; font-weight: bold;">${nominal}</span></li>
          <li><strong>Status:</strong> <span style="color: #10b981;">Berhasil (Selesai)</span></li>
          <li><strong>Tanggal:</strong> ${new Date().toLocaleDateString('id-ID')}</li>
        </ul>
      </div>
      <p>Layanan Anda telah diaktifkan secara otomatis. Terima kasih telah menggunakan layanan kami!</p>
    `;

        await sendEmail({
            to: user.email,
            subject: "Notifikasi Konfirmasi Pembayaran : Berhasil",
            html: this.baseTemplate("Pembayaran Berhasil", content, "#10b981"),
        });
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
