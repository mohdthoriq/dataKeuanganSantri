// prisma/seed.ts
import PrismaInstance, { user_role, category_type } from '../database';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

const prisma = PrismaInstance

async function main() {
  console.log('🌱 Mulai seeding database...');

  // Hapus data lama (berurutan sesuai foreign key)
  await prisma.transaction.deleteMany();
  await prisma.authAccount.deleteMany();
  await prisma.santri.deleteMany();
  await prisma.category.deleteMany();
  await prisma.emailVerification.deleteMany();
  await prisma.passwordReset.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.institution.deleteMany();
  await prisma.users.deleteMany();

  console.log('🗑️  Data lama dihapus');

  // 1. Buat Admin Users (10 admin untuk berbagai institusi)
  console.log('👤 Membuat admin users...');
  const admins = [];
  const hashedPassword = await bcrypt.hash('password123', 10);

  for (let i = 0; i < 10; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    
    const admin = await prisma.users.create({
      data: {
        username: `admin${i + 1}`,
        email: `admin${i + 1}@pesantren.com`,
        password: hashedPassword,
        role: user_role.ADMIN,
        isEmailVerified: true,
        isActive: true,
        createdAt: faker.date.past({ years: 2 }),
        profile: {
          create: {
            name: `${firstName} ${lastName}`,
            gender: faker.helpers.arrayElement(['LAKI-LAKI', 'PEREMPUAN']),
            address: faker.location.streetAddress({ useFullAddress: true }),
            phone: faker.phone.number(),
            occupation: 'Administrator Pesantren',
          },
        },
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
    await prisma.users.update({
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
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const fullName = `${firstName} ${lastName}`;

    const wali = await prisma.users.create({
      data: {
        username: `wali${i + 1}`,
        email: faker.internet.email({ firstName, lastName }).toLowerCase(),
        password: hashedPassword,
        role: user_role.WALI_SANTRI,
        institutionId: institution.id,
        isEmailVerified: faker.datatype.boolean(0.8),
        isActive: faker.datatype.boolean(0.95),
        createdAt: faker.date.past({ years: 1 }),
        profile: {
          create: {
            name: fullName,
            gender: faker.helpers.arrayElement(['LAKI-LAKI', 'PEREMPUAN']),
            address: faker.location.streetAddress({ useFullAddress: true }),
            phone: faker.phone.number(),
            occupation: faker.person.jobTitle(),
          },
        },
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
          type: category_type.PEMASUKAN,
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
          type: category_type.PENGELUARAN,
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
  const genderOptions = ['LAKI-LAKI', 'PEREMPUAN'];

  for (let i = 0; i < 300; i++) {
    const institution = faker.helpers.arrayElement(institutions);
    const wali = faker.helpers.arrayElement(
      waliSantri.filter(w => w.institutionId === institution.id)
    );

    if (wali) {
      const nis = `NIS${String(Date.now() + i).slice(-8)}`;
      const fullname = faker.person.fullName();
      
      const santri = await prisma.santri.create({
        data: {
          nis,
          fullname,
          kelas: faker.helpers.arrayElement(kelasOptions),
          gender: faker.helpers.arrayElement(genderOptions),
          waliId: wali.id,
          institutionId: institution.id,
          waliName: wali.username,
          institutionName: institution.name,
          isActive: faker.datatype.boolean(0.95),
          createdAt: faker.date.past({ years: 1 }),
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
      const username = `santri_${santri.nis}`;
      const authAccount = await prisma.authAccount.create({
        data: {
          username,
          email: `${username}@pesantren.com`,
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

    if (admin && category) {
      const amount = category.type === category_type.PEMASUKAN
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
    const verification = await prisma.emailVerification.create({
      data: {
        userId: user.id,
        otpCode: String(faker.number.int({ min: 100000, max: 999999 })),
        expiredAt: faker.date.future(),
        isUsed: user.isEmailVerified,
        createdAt: faker.date.past({ years: 1 })
      },
    });
    emailVerifications.push(verification);
  }
  console.log(`✅ ${emailVerifications.length} email verifications dibuat`);

  // 9. Buat Password Resets
  console.log('🔑 Membuat password resets...');
  const passwordResets = [];

  for (let i = 0; i < 30; i++) {
    const user = faker.helpers.arrayElement([...admins, ...waliSantri]);
    const reset = await prisma.passwordReset.create({
      data: {
        userId: user.id,
        otpCode: String(faker.number.int({ min: 100000, max: 999999 })),
        expiredAt: faker.date.future({ years: 0.01 }),
        isUsed: faker.datatype.boolean(0.6),
        createdAt: faker.date.past({ years: 1 }),
      },
    });
    passwordResets.push(reset);
  }
  console.log(`✅ ${passwordResets.length} password resets dibuat`);

  // 10. Buat Notifications
  console.log('🔔 Membuat notifications...');
  const notifications = [];
  const notificationTemplates = [
    { title: 'Pembayaran SPP', message: 'SPP bulan ini sudah jatuh tempo' },
    { title: 'Jadwal Ujian', message: 'Ujian semester akan dilaksanakan minggu depan' },
    { title: 'Kegiatan Pesantren', message: 'Ada kegiatan haul akbar di pesantren' },
    { title: 'Informasi Penting', message: 'Mohon segera melengkapi data santri' },
    { title: 'Konfirmasi Pembayaran', message: 'Pembayaran Anda sudah diterima' },
    { title: 'Pengumuman', message: 'Libur semester akan dimulai minggu depan' },
    { title: 'Undangan Rapat', message: 'Rapat wali santri akan diadakan Sabtu besok' },
  ];

  for (let i = 0; i < 250; i++) {
    const user = faker.helpers.arrayElement([...admins, ...waliSantri]);
    const template = faker.helpers.arrayElement(notificationTemplates);

    const notification = await prisma.notification.create({
      data: {
        userId: user.id,
        title: template.title,
        message: template.message,
        isRead: faker.datatype.boolean(0.6),
        createdAt: faker.date.past({ years: 1 }),
      },
    });
    notifications.push(notification);
  }
  console.log(`✅ ${notifications.length} notifications dibuat`);

  // Tampilkan summary
  console.log('\n📊 Summary:');
  console.log(`   👤 Users (Total): ${admins.length + waliSantri.length}`);
  console.log(`      - Admins: ${admins.length}`);
  console.log(`      - Wali Santri: ${waliSantri.length}`);
  console.log(`   🏫 Institutions: ${institutions.length}`);
  console.log(`   📁 Categories: ${categories.length}`);
  console.log(`   👦 Santri: ${santriList.length}`);
  console.log(`   🔐 Auth Accounts: ${authAccounts.length}`);
  console.log(`   💰 Transactions: ${transactions.length}`);
  console.log(`   📧 Email Verifications: ${emailVerifications.length}`);
  console.log(`   🔑 Password Resets: ${passwordResets.length}`);
  console.log(`   🔔 Notifications: ${notifications.length}`);
  console.log(`   👥 Profiles: ${admins.length + waliSantri.length}`);

  // Detail per institution
  console.log('\n🏫 Data per Institution (Top 3):');
  for (const institution of institutions.slice(0, 3)) {
    const santriCount = await prisma.santri.count({
      where: { institutionId: institution.id },
    });
    const waliCount = await prisma.users.count({
      where: { institutionId: institution.id, role: user_role.WALI_SANTRI },
    });
    const transactionCount = await prisma.transaction.count({
      where: { santri: { institutionId: institution.id } },
    });
    console.log(`\n   ${institution.name}:`);
    console.log(`      - Santri: ${santriCount}`);
    console.log(`      - Wali: ${waliCount}`);
    console.log(`      - Transactions: ${transactionCount}`);
  }

  // Statistik transaksi
  const totalPemasukan = await prisma.transaction.aggregate({
    where: { type: category_type.PEMASUKAN, isDeleted: false },
    _sum: { amount: true },
  });
  const totalPengeluaran = await prisma.transaction.aggregate({
    where: { type: category_type.PENGELUARAN, isDeleted: false },
    _sum: { amount: true },
  });

  console.log('\n💰 Statistik Keuangan:');
  console.log(`   Total Pemasukan: Rp ${Number(totalPemasukan._sum.amount || 0).toLocaleString('id-ID')}`);
  console.log(`   Total Pengeluaran: Rp ${Number(totalPengeluaran._sum.amount || 0).toLocaleString('id-ID')}`);
  console.log(`   Saldo: Rp ${(Number(totalPemasukan._sum.amount || 0) - Number(totalPengeluaran._sum.amount || 0)).toLocaleString('id-ID')}`);

  console.log('\n✨ Seeding selesai!');
  console.log('\n🔑 Login Credentials:');
  console.log('   Admin: admin1@pesantren.com / password123');
  console.log('   Wali: (check database for email) / password123');
  console.log('   Santri: santri_[NIS]@pesantren.com / password123');
}

main()
  .catch((e) => {
    console.error('❌ Error saat seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });