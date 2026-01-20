import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import PrismaInstance from 'database';

const prisma = PrismaInstance;

async function main() {
  console.log('🌱 Starting database seeding...');

  // Clear existing data (in correct order due to relations)
  console.log('🗑️ Clearing existing data...');
  await prisma.transaction.deleteMany();
  await prisma.authAccount.deleteMany();
  await prisma.santri.deleteMany();
  await prisma.category.deleteMany();
  await prisma.institutionProfile.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.emailVerification.deleteMany();
  await prisma.passwordReset.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.institution.deleteMany();
  await prisma.users.deleteMany();

  // 1. Seed Admin Users (10 admins)
  console.log('👨‍💼 Seeding Admin Users...');
  const admins = [];
  const hashedPassword = await bcrypt.hash('password123', 10);

  for (let i = 0; i < 10; i++) {
    const admin = await prisma.users.create({
      data: {
        username: faker.internet.username(),
        email: faker.internet.email().toLowerCase(),
        password: hashedPassword,
        role: "ADMIN",
        isEmailVerified: true,
        isActive: true,
      }
    });
    admins.push(admin);
  }
  console.log(`✅ Created ${admins.length} admin users`);

  // 2. Seed Wali Santri (120 wali)
  console.log('👨‍👩‍👧 Seeding Wali Santri...');
  const waliSantri = [];

  for (let i = 0; i < 120; i++) {
    const wali = await prisma.users.create({
      data: {
        username: faker.internet.username(),
        email: faker.internet.email().toLowerCase(),
        password: hashedPassword,
        role: "WALI_SANTRI",
        isEmailVerified: faker.datatype.boolean({ probability: 0.8 }),
        isActive: true,
      }
    });
    waliSantri.push(wali);
  }
  console.log(`✅ Created ${waliSantri.length} wali santri`);

  // 3. Seed Profiles for all users
  console.log('👤 Seeding User Profiles...');
  const allUsers = [...admins, ...waliSantri];

  function generatePhone() {
    const randomNumber = Math.floor(Math.random() * 1_000_000_000); // 9 digit random
    return `08${String(randomNumber).padStart(9, '0')}`;
  }


  for (const user of allUsers) {
    await prisma.profile.create({
      data: {
        userId: user.id,
        name: faker.person.fullName(),
        gender: faker.helpers.arrayElement(['Laki-laki', 'Perempuan']),
        address: faker.location.streetAddress({ useFullAddress: true }),
        phone: generatePhone(),
        occupation: user.role === 'ADMIN' ? 'Administrator' : faker.person.jobTitle(),
        profile_picture_url: faker.image.avatar(),
      }
    });
  }

  console.log(`✅ Created ${allUsers.length} user profiles`);

  // 4. Seed Institutions (15 institutions)
  console.log('🏫 Seeding Institutions...');
  const institutions = [];
  const institutionNames = [
    'Pondok Pesantren Al-Hidayah',
    'Pesantren Modern Darul Ulum',
    'Pondok Pesantren Nurul Huda',
    'Pesantren Al-Ikhlas',
    'Pondok Pesantren Daarut Tauhid',
    'Pesantren Raudhatul Jannah',
    'Pondok Pesantren Al-Falah',
    'Pesantren Darul Hikam',
    'Pondok Pesantren An-Nur',
    'Pesantren Al-Amin',
    'Pondok Pesantren Baitul Hikmah',
    'Pesantren Darul Qur\'an',
    'Pondok Pesantren Al-Ikhlash',
    'Pesantren Riyadhul Jannah',
    'Pondok Pesantren Al-Mubarok'
  ];

  for (let i = 0; i < institutionNames.length; i++) {
    const admin = admins[i % admins.length];
    if (!admin) {
      throw new Error(`Admin at index ${i % admins.length} not found`);
    }
    const institution = await prisma.institution.create({
      data: {
        name: institutionNames[i] as string,
        createdBy: admin.id,
        isActive: true,
      }
    });
    institutions.push(institution);

    // Update admin's institutionId
    await prisma.users.update({
      where: { id: admin.id },
      data: { institutionId: institution.id }
    });
  }
  console.log(`✅ Created ${institutions.length} institutions`);

  // 5. Seed Institution Profiles
  console.log('🏢 Seeding Institution Profiles...');
  for (const institution of institutions) {
    await prisma.institutionProfile.create({
      data: {
        institutionId: institution.id,
        name: institution.name,
        address: faker.location.streetAddress({ useFullAddress: true }),
        phone: generatePhone(),
        email: faker.internet.email({ provider: 'pesantren.ac.id' }).toLowerCase(),
        website: `www.${institution.name.toLowerCase().replace(/\s+/g, '')}.ac.id`,
        description: faker.lorem.paragraph(),
        logoUrl: faker.image.url(),
      }
    });
  }
  console.log(`✅ Created ${institutions.length} institution profiles`);

  // 6. Seed Categories (10 categories per institution)
  console.log('📂 Seeding Categories...');
  const categories = [];
  const categoryNames = {
    PEMASUKAN: ['SPP', 'Uang Pangkal', 'Donasi', 'Infaq', 'Wakaf'],
    PENGELUARAN: ['Gaji Guru', 'Listrik', 'Air', 'Konsumsi', 'ATK', 'Pemeliharaan']
  };

  for (const institution of institutions) {
    // Pemasukan categories
    for (const name of categoryNames.PEMASUKAN) {
      const category = await prisma.category.create({
        data: {
          name,
          type: "PEMASUKAN",
          institutionId: institution.id,
          isActive: true,
        }
      });
      categories.push(category);
    }

    // Pengeluaran categories
    for (const name of categoryNames.PENGELUARAN) {
      const category = await prisma.category.create({
        data: {
          name,
          type: "PENGELUARAN",
          institutionId: institution.id,
          isActive: true,
        }
      });
      categories.push(category);
    }
  }
  console.log(`✅ Created ${categories.length} categories`);

  // 7. Seed Santri (150 santri)
  console.log('👨‍🎓 Seeding Santri...');
  const santriList = [];
  const kelasList = ['1A', '1B', '2A', '2B', '3A', '3B', '4A', '4B', '5A', '5B', '6A', '6B'];

  for (let i = 0; i < 150; i++) {
    const wali = waliSantri[i % waliSantri.length];
    if (!wali) {
      throw new Error(`Wali at index ${i % waliSantri.length} not found`);
    }
    const institution = institutions[i % institutions.length];
    if (!institution) {
      throw new Error(`Institution at index ${i % institutions.length} not found`);
    }
    const gender = faker.helpers.arrayElement(['Laki-laki', 'Perempuan']);

    const santri = await prisma.santri.create({
      data: {
        nis: `NIS${String(i + 1).padStart(6, '0')}`,
        fullname: faker.person.fullName({ sex: gender === 'Laki-laki' ? 'male' : 'female' }),
        kelas: faker.helpers.arrayElement(kelasList),
        gender,
        waliId: wali.id,
        institutionId: institution.id,
        waliName: faker.person.fullName(),
        institutionName: institution.name,
        isActive: true,
      }
    });
    santriList.push(santri);

    // Update wali's institutionId
    await prisma.users.update({
      where: { id: wali.id },
      data: { institutionId: institution.id }
    });
  }
  console.log(`✅ Created ${santriList.length} santri`);

  // 8. Seed Auth Accounts for Santri
  console.log('🔐 Seeding Auth Accounts...');
  for (const santri of santriList) {
    await prisma.authAccount.create({
      data: {
        username: santri.nis.toLowerCase(),
        email: `${santri.nis.toLowerCase()}@student.pesantren.ac.id`,
        password: hashedPassword,
        userId: santri.waliId,
        santriId: santri.id,
        isActive: true,
      }
    });
  }
  console.log(`✅ Created ${santriList.length} auth accounts`);

  // 9. Seed Transactions (500 transactions)
  console.log('💰 Seeding Transactions...');
  let transactionCount = 0;

  for (let i = 0; i < 500; i++) {
    const santri = santriList[Math.floor(Math.random() * santriList.length)];
    if (!santri) {
      throw new Error(`Santri at index ${Math.floor(Math.random() * santriList.length)} not found`);
    }
    const institutionCategories = categories.filter(c => c.institutionId === santri.institutionId);
    const category = institutionCategories[Math.floor(Math.random() * institutionCategories.length)];
    if (!category) {
      throw new Error(`Category at index ${Math.floor(Math.random() * institutionCategories.length)} not found`);
    }
    const institutionAdmins = admins.filter(a => a.institutionId === santri.institutionId);
    const admin = institutionAdmins[Math.floor(Math.random() * institutionAdmins.length)];
    if (!admin) {
      throw new Error(`Admin at index ${Math.floor(Math.random() * institutionAdmins.length)} not found`);
    }

    const amount = category.type === "PEMASUKAN"
      ? faker.number.int({ min: 100000, max: 5000000 })
      : faker.number.int({ min: 50000, max: 3000000 });

    await prisma.transaction.create({
      data: {
        santriId: santri.id,
        categoryId: category.id,
        type: category.type,
        amount,
        description: faker.lorem.sentence(),
        transactionDate: faker.date.between({
          from: '2024-01-01',
          to: new Date()
        }),
        createdBy: admin.id,
        isDeleted: false,
      }
    });
    transactionCount++;
  }
  console.log(`✅ Created ${transactionCount} transactions`);

  // 10. Seed Email Verifications (50 records)
  console.log('📧 Seeding Email Verifications...');
  for (let i = 0; i < 50; i++) {
    const user = allUsers[Math.floor(Math.random() * allUsers.length)];
    if (!user) {
      throw new Error(`User at index ${Math.floor(Math.random() * allUsers.length)} not found`);
    }
    await prisma.emailVerification.create({
      data: {
        userId: user.id,
        otpCode: String(faker.number.int({ min: 100000, max: 999999 })),
        expiredAt: faker.date.future(),
        isUsed: faker.datatype.boolean({ probability: 0.6 }),
      }
    });
  }
  console.log('✅ Created 50 email verifications');

  // 11. Seed Password Resets (30 records)
  console.log('🔑 Seeding Password Resets...');
  for (let i = 0; i < 30; i++) {
    const user = allUsers[Math.floor(Math.random() * allUsers.length)];
    if (!user) {
      throw new Error(`User at index ${Math.floor(Math.random() * allUsers.length)} not found`);
    }
    await prisma.passwordReset.create({
      data: {
        userId: user.id,
        otpCode: String(faker.number.int({ min: 100000, max: 999999 })),
        expiredAt: faker.date.future(),
        isUsed: faker.datatype.boolean({ probability: 0.7 }),
      }
    });
  }
  console.log('✅ Created 30 password resets');

  // 12. Seed Notifications (200 notifications)
  console.log('🔔 Seeding Notifications...');
  const notificationTemplates = [
    { title: 'Pembayaran SPP', message: 'Pembayaran SPP bulan ini telah berhasil diproses' },
    { title: 'Pengumuman', message: 'Ada pengumuman penting dari pesantren' },
    { title: 'Tagihan', message: 'Anda memiliki tagihan yang belum dibayar' },
    { title: 'Informasi', message: 'Jadwal kegiatan pesantren telah diperbarui' },
  ];

  for (let i = 0; i < 200; i++) {
    const user = allUsers[Math.floor(Math.random() * allUsers.length)];
    if (!user) {
      throw new Error(`User at index ${Math.floor(Math.random() * allUsers.length)} not found`);
    }
    const template = notificationTemplates[Math.floor(Math.random() * notificationTemplates.length)];
    if (!template) {
      throw new Error(`Template at index ${Math.floor(Math.random() * notificationTemplates.length)} not found`);
    }
    await prisma.notification.create({
      data: {
        userId: user.id,
        title: template.title,
        message: template.message,
        isRead: faker.datatype.boolean({ probability: 0.5 }),
      }
    });
  }
  console.log('✅ Created 200 notifications');

  // Summary
  console.log('\n✨ Seeding completed successfully!');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`👨‍💼 Admin Users: ${admins.length}`);
  console.log(`👨‍👩‍👧 Wali Santri: ${waliSantri.length}`);
  console.log(`👤 User Profiles: ${allUsers.length}`);
  console.log(`🏫 Institutions: ${institutions.length}`);
  console.log(`🏢 Institution Profiles: ${institutions.length}`);
  console.log(`📂 Categories: ${categories.length}`);
  console.log(`👨‍🎓 Santri: ${santriList.length}`);
  console.log(`🔐 Auth Accounts: ${santriList.length}`);
  console.log(`💰 Transactions: ${transactionCount}`);
  console.log(`📧 Email Verifications: 50`);
  console.log(`🔑 Password Resets: 30`);
  console.log(`🔔 Notifications: 200`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📊 Total Records: ${admins.length + waliSantri.length + allUsers.length + institutions.length * 2 + categories.length + santriList.length * 2 + transactionCount + 280}`);
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });