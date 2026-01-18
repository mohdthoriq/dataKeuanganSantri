// prisma/seed.ts
import { PrismaClient, user_role, $Enums } from '../generated';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import PrismaInstance from '../database';

const prisma = PrismaInstance

async function main() {
  console.log('🌱 Mulai seeding database...');

  // Hapus data lama (berurutan sesuai foreign key)
  await prisma.transaction.deleteMany();
  await prisma.auth_account.deleteMany();
  await prisma.santri.deleteMany();
  await prisma.category.deleteMany();
  await prisma.email_verification.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.institution.deleteMany();
  await prisma.user.deleteMany();

  console.log('🗑️  Data lama dihapus');

  // 1. Buat Admin Users (10 admin untuk berbagai institusi)
  console.log('👤 Membuat admin users...');
  const admins = [];
  const hashedPassword = await bcrypt.hash('password123', 10);

  for (let i = 0; i < 10; i++) {
    const admin = await prisma.user.create({
      data: {
        username: faker.person.fullName(),
        email: `admin${i + 1}@pesantren.com`,
        password: hashedPassword,
        role: $Enums.user_role.ADMIN,
        isEmailVerified: true,
        isActive: true,
        createdAt: faker.date.past({ years: 2 }),
      },
    });
    admins.push(admin);
  }
  console.log(`✅ ${admins.length} admin users dibuat`);

  // 2. Buat Institutions (10 pesantren)
  console.log('🏫 Membuat institutions...');
  const institutions = [];
  const pesantrenNames = [
    'Pesantren Al-Ikhlas',
    'Pondok Modern Darussalam',
    'Ma\'had Al-Zaytun',
    'Pesantren Daar El-Qolam',
    'Pondok Pesantren Gontor',
    'Pesantren Al-Falah',
    'Pondok Pesantren Tebuireng',
    'Pesantren Lirboyo',
    'Ma\'had Al-Hikam',
    'Pesantren Sidogiri',
  ];

  for (let i = 0; i < pesantrenNames.length; i++) {
    const admin = admins[i];
    const name = pesantrenNames[i];

    if (!admin || !name) continue;

    const institution = await prisma.institution.create({
      data: {
        name,
        createdBy: admin.id,
        isActive: true,
        createdAt: faker.date.past({ years: 2 }),
      },
    });
    institutions.push(institution);

    // Update admin dengan institutionId
    await prisma.user.update({
      where: { id: admin.id },
      data: { institutionId: institution.id },
    });
  }
  console.log(`✅ ${institutions.length} institutions dibuat`);

  // 3. Buat Wali Santri (150 wali)
  console.log('👨‍👩‍👧 Membuat wali santri...');
  const waliSantri = [];

  for (let i = 0; i < 150; i++) {
    const institution = faker.helpers.arrayElement(institutions);
    const wali = await prisma.user.create({
      data: {
        username: faker.person.fullName(),
        email: faker.internet.email().toLowerCase(),
        password: hashedPassword,
        role: $Enums.user_role.WALI_SANTRI,
        institutionId: institution.id,
        isEmailVerified: faker.datatype.boolean(0.8),
        isActive: faker.datatype.boolean(0.95),
        createdAt: faker.date.past({ years: 1 }),
      },
    });
    waliSantri.push(wali);
  }
  console.log(`✅ ${waliSantri.length} wali santri dibuat`);

  // 4. Buat Categories untuk setiap institution
  console.log('📁 Membuat categories...');
  const categories = [];
  const categoryTemplates = {
    PEMASUKAN: [
      'SPP Bulanan',
      'Uang Makan',
      'Uang Asrama',
      'Biaya Pendaftaran',
      'Biaya Kegiatan',
      'Donasi',
      'Infaq',
    ],
    PENGELUARAN: [
      'Listrik & Air',
      'Gaji Ustadz',
      'Bahan Makanan',
      'Perlengkapan Sekolah',
      'Perawatan Gedung',
      'Transport',
      'Kegiatan Santri',
    ],
  };

  for (const institution of institutions) {
    // Buat kategori pemasukan
    for (const catName of categoryTemplates.PEMASUKAN) {
      const category = await prisma.category.create({
        data: {
          name: catName,
          type: $Enums.category_type.PEMASUKAN,
          institutionId: institution.id,
          isActive: true,
          createdAt: faker.date.past({ years: 1 }),
        },
      });
      categories.push(category);
    }

    // Buat kategori pengeluaran
    for (const catName of categoryTemplates.PENGELUARAN) {
      const category = await prisma.category.create({
        data: {
          name: catName,
          type: $Enums.category_type.PENGELUARAN,
          institutionId: institution.id,
          isActive: true,
          createdAt: faker.date.past({ years: 1 }),
        },
      });
      categories.push(category);
    }
  }
  console.log(`✅ ${categories.length} categories dibuat`);

  // 5. Buat Santri (300 santri)
  console.log('👦 Membuat santri...');
  const santriList = [];
  const kelasOptions = ['1A', '1B', '2A', '2B', '3A', '3B', '4A', '4B', '5A', '5B', '6A', '6B'];

  for (let i = 0; i < 300; i++) {
    const institution = faker.helpers.arrayElement(institutions);
    const wali = faker.helpers.arrayElement(
      waliSantri.filter(w => w.institutionId === institution.id)
    );

    if (wali) {
      const nis = `${institution.id}${String(i).padStart(4, '0')}`;

      const santri = await prisma.santri.create({
        data: {
          nis,
          fullname: faker.person.fullName(),
          kelas: faker.helpers.arrayElement(kelasOptions),
          gender: faker.person.gender(),

          wali: {
            connect: { id: wali.id },
          },

          institution: {
            connect: { id: institution.id },
          },
          isActive: faker.datatype.boolean(0.95),
          createdAt: faker.date.past({ years: 1 }),
          waliName: wali.username,
          institutionName: institution.name,
        },
      });
      santriList.push(santri);
    }
  }
  console.log(`✅ ${santriList.length} santri dibuat`);

  // 6. Buat AuthAccounts untuk santri
  console.log('🔐 Membuat auth accounts...');
  const authAccounts = [];

  for (const santri of santriList) {
    const wali = waliSantri.find(w => w.id === santri.waliId);
    if (wali) {
      const authAccount = await prisma.auth_account.create({
        data: {
          username: `santri_${santri.nis}`,
          password: hashedPassword,
          userId: wali.id,
          santriId: santri.id,
          isActive: santri.isActive,
          createdAt: santri.createdAt,
        },
      });
      authAccounts.push(authAccount);
    }
  }
  console.log(`✅ ${authAccounts.length} auth accounts dibuat`);

  // 7. Buat Transactions (500 transaksi)
  console.log('💰 Membuat transactions...');
  const transactions = [];

  for (let i = 0; i < 500; i++) {
    const santri = faker.helpers.arrayElement(santriList);
    const institutionCategories = categories.filter(
      c => c.institutionId === santri.institutionId
    );
    const category = faker.helpers.arrayElement(institutionCategories);
    const admin = admins.find(a => a.institutionId === santri.institutionId);

    if (admin) {
      const amount = category.type === $Enums.category_type.PEMASUKAN
        ? faker.number.int({ min: 100000, max: 2000000 })
        : faker.number.int({ min: 50000, max: 5000000 });

      const transaction = await prisma.transaction.create({
        data: {
          santriId: santri.id,
          categoryId: category.id,
          type: category.type,
          amount,
          description: faker.datatype.boolean(0.7)
            ? faker.lorem.sentence()
            : null,
          transactionDate: faker.date.past({ years: 1 }),
          createdBy: admin.id,
          isDeleted: faker.datatype.boolean(0.05),
          createdAt: faker.date.past({ years: 1 }),
        },
      });
      transactions.push(transaction);
    }
  }
  console.log(`✅ ${transactions.length} transactions dibuat`);

  // 8. Buat Email Verifications
  console.log('📧 Membuat email verifications...');
  const emailVerifications = [];

  for (const user of [...admins, ...waliSantri].slice(0, 50)) {
    const verification = await prisma.email_verification.create({
      data: {
        userId: user.id,
        otpCode: String(faker.number.int({ min: 100000, max: 999999 })),
        expiredAt: faker.date.future(),
        isUsed: user.isEmailVerified,
        createdAt: faker.date.past({
          years: 1,
          refDate: new Date(),
        }),
      },
    });
    emailVerifications.push(verification);
  }
  console.log(`✅ ${emailVerifications.length} email verifications dibuat`);

  // 9. Buat Notifications
  console.log('🔔 Membuat notifications...');
  const notifications = [];
  const notificationTemplates = [
    { title: 'Pembayaran SPP', message: 'SPP bulan ini sudah jatuh tempo' },
    { title: 'Jadwal Ujian', message: 'Ujian semester akan dilaksanakan minggu depan' },
    { title: 'Kegiatan Pesantren', message: 'Ada kegiatan haul akbar di pesantren' },
    { title: 'Informasi Penting', message: 'Mohon segera melengkapi data santri' },
    { title: 'Konfirmasi Pembayaran', message: 'Pembayaran Anda sudah diterima' },
  ];

  for (let i = 0; i < 200; i++) {
    const user = faker.helpers.arrayElement([...admins, ...waliSantri]);
    const template = faker.helpers.arrayElement(notificationTemplates);

    const notification = await prisma.notification.create({
      data: {
        userId: user.id,
        title: template.title,
        message: template.message,
        isRead: faker.datatype.boolean(0.6),
        createdAt: faker.date.past({
          years: 1,
          refDate: new Date(),
        }),
      },
    });
    notifications.push(notification);
  }
  console.log(`✅ ${notifications.length} notifications dibuat`);

  // Tampilkan summary
  console.log('\n📊 Summary:');
  console.log(`   👤 Admins: ${admins.length}`);
  console.log(`   👨‍👩‍👧 Wali Santri: ${waliSantri.length}`);
  console.log(`   🏫 Institutions: ${institutions.length}`);
  console.log(`   📁 Categories: ${categories.length}`);
  console.log(`   👦 Santri: ${santriList.length}`);
  console.log(`   🔐 Auth Accounts: ${authAccounts.length}`);
  console.log(`   💰 Transactions: ${transactions.length}`);
  console.log(`   📧 Email Verifications: ${emailVerifications.length}`);
  console.log(`   🔔 Notifications: ${notifications.length}`);

  // Detail per institution
  console.log('\n🏫 Data per Institution:');
  for (const institution of institutions.slice(0, 3)) {
    const santriCount = await prisma.santri.count({
      where: { institutionId: institution.id },
    });
    const transactionCount = await prisma.transaction.count({
      where: { santri: { institutionId: institution.id } },
    });
    console.log(`   ${institution.name}:`);
    console.log(`      - Santri: ${santriCount}`);
    console.log(`      - Transactions: ${transactionCount}`);
  }

  // Statistik transaksi
  const totalPemasukan = await prisma.transaction.aggregate({
    where: { type: $Enums.category_type.PEMASUKAN, isDeleted: false },
    _sum: { amount: true },
  });
  const totalPengeluaran = await prisma.transaction.aggregate({
    where: { type: $Enums.category_type.PENGELUARAN, isDeleted: false },
    _sum: { amount: true },
  });

  console.log('\n💰 Statistik Keuangan:');
  console.log(`   Total Pemasukan: Rp ${Number(totalPemasukan._sum.amount || 0).toLocaleString('id-ID')}`);
  console.log(`   Total Pengeluaran: Rp ${Number(totalPengeluaran._sum.amount || 0).toLocaleString('id-ID')}`);
  console.log(`   Saldo: Rp ${(Number(totalPemasukan._sum.amount || 0) - Number(totalPengeluaran._sum.amount || 0)).toLocaleString('id-ID')}`);

  console.log('\n✨ Seeding selesai!');
  console.log('\n🔑 Login Credentials:');
  console.log('   Admin: admin1@pesantren.com / password123');
  console.log('   Santri: santri_[NIS] / password123');
}

main()
  .catch((e) => {
    console.error('❌ Error saat seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });