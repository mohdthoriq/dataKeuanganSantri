// // src/tests/auth.test.ts
// import request from 'supertest';
// import app from '../app';
// import bcrypt from 'bcrypt';
// import PrismaInstance from '../database';

// const prisma = PrismaInstance;

// describe('POST /api/auth/register-admin', () => {
//   const getUniqueEmail = () => `admintest+${Date.now()}+${Math.random()}@example.com`;
//   const basePayload = {
//     username: 'adminTest',
//     password: '12345678',
//     institution: 'TPQ Test',
//   };

//   afterAll(async () => {
//     await prisma.$disconnect();
//   });

//   async function cleanupUser(email: string) {
//     try {
//       const user = await prisma.user.findUnique({ where: { email } });
//       if (!user) return;

//       // Hapus child records dulu
//       await prisma.passwordReset.deleteMany({ where: { userId: user.id } });
//       await prisma.emailVerification.deleteMany({ where: { userId: user.id } });
//       await prisma.institution.deleteMany({ where: { createdBy: user.id } });

//       // Baru hapus user
//       await prisma.user.delete({ where: { id: user.id } });
//     } catch (err) {
//       console.log('Cleanup error (biasanya sudah dihapus):', err);
//     }
//   }

//   it('should register admin successfully', async () => {
//     const payload = { ...basePayload, email: getUniqueEmail() };
//     const res = await request(app).post('/api/auth/register-admin').send(payload);

//     expect(res.statusCode).toEqual(200);
//     expect(res.body.success).toBe(true);
//     expect(res.body.data).toBeDefined();
//     expect(res.body.data?.email).toBe(payload.email);

//     await cleanupUser(payload.email);
//   });

//   it('should fail if email already exists', async () => {
//     const email = getUniqueEmail();
//     const payload = { ...basePayload, email };

//     await request(app).post('/api/auth/register-admin').send(payload);

//     const resDuplicate = await request(app).post('/api/auth/register-admin').send(payload);

//     expect(resDuplicate.statusCode).toEqual(400);
//     expect(resDuplicate.body.success).toBe(false);
//     expect(resDuplicate.body.message).toMatch(/Data sudah ada|User already exists|unique constraint/i);

//     await cleanupUser(email);
//   });

//   it('should fail if missing required fields', async () => {
//     const res = await request(app)
//       .post('/api/auth/register-admin')
//       .send({ username: '', email: '', password: '', institution: '' });

//     expect(res.statusCode).toEqual(400);
//     expect(res.body.success).toBe(false);
//   });
// });

// describe('POST /api/auth/login', () => {
//   const password = '12345678';
//   const basePayload = {
//     username: 'loginAdmin',
//     password,
//     institution: 'TPQ Login Test',
//   };
//   const getUniqueEmail = () => `login+${Date.now()}+${Math.random()}@example.com`;

//   afterAll(async () => {
//     await prisma.$disconnect();
//   });

//   async function cleanupUser(email: string) {
//     try {
//       const user = await prisma.user.findUnique({ where: { email } });
//       if (!user) return;

//       await prisma.passwordReset.deleteMany({ where: { userId: user.id } });
//       await prisma.emailVerification.deleteMany({ where: { userId: user.id } });
//       await prisma.institution.deleteMany({ where: { createdBy: user.id } });
//       await prisma.user.delete({ where: { id: user.id } });
//     } catch (err) {
//       console.log('Cleanup error:', err);
//     }
//   }

//   it('should login successfully', async () => {
//     const email = getUniqueEmail();
//     await request(app).post('/api/auth/register-admin').send({ ...basePayload, email });

//     await prisma.user.update({ where: { email }, data: { isEmailVerified: true } });

//     const res = await request(app).post('/api/auth/login').send({ email, password });

//     expect(res.statusCode).toEqual(200);
//     expect(res.body.success).toBe(true);
//     expect(res.body.data).toHaveProperty('token');
//     expect(res.body.data.user).toHaveProperty('email', email);
//     expect(res.body.data.user).toHaveProperty('role', 'ADMIN');

//     await cleanupUser(email);
//   });

//   it('should fail if password is wrong', async () => {
//     const email = getUniqueEmail();
//     await request(app).post('/api/auth/register-admin').send({ ...basePayload, email });
//     await prisma.user.update({ where: { email }, data: { isEmailVerified: true } });

//     const res = await request(app).post('/api/auth/login').send({ email, password: 'wrongpassword' });

//     expect(res.statusCode).toEqual(400);
//     expect(res.body.success).toBe(false);
//     expect(res.body.message).toMatch(/Invalid password/i);

//     await cleanupUser(email);
//   });

//   it('should fail if email not verified', async () => {
//     const email = getUniqueEmail();
//     await request(app).post('/api/auth/register-admin').send({ ...basePayload, email });

//     const res = await request(app).post('/api/auth/login').send({ email, password });

//     expect(res.statusCode).toEqual(400);
//     expect(res.body.success).toBe(false);
//     expect(res.body.message).toMatch(/Email not verified/i);

//     await cleanupUser(email);
//   });

//   it('should fail if user not found', async () => {
//     const res = await request(app).post('/api/auth/login').send({ email: 'notfound@example.com', password });
//     expect(res.statusCode).toEqual(400);
//     expect(res.body.success).toBe(false);
//     expect(res.body.message).toMatch(/User not found/i);
//   });
// });

// describe('POST /api/auth/request-reset', () => {
//   const baseUser = {
//     username: 'resetUser',
//     password: '12345678',
//     institution: 'TPQ Reset Test',
//   };
//   const getUniqueEmail = () => `resettest+${Date.now()}+${Math.random()}@example.com`;

//   afterAll(async () => {
//     await prisma.$disconnect();
//   });

//   async function cleanupUser(email: string) {
//     try {
//       const user = await prisma.user.findUnique({ where: { email } });
//       if (!user) return;

//       await prisma.passwordReset.deleteMany({ where: { userId: user.id } });
//       await prisma.emailVerification.deleteMany({ where: { userId: user.id } });
//       await prisma.institution.deleteMany({ where: { createdBy: user.id } });
//       await prisma.user.delete({ where: { id: user.id } });
//     } catch (err) {
//       console.log('Cleanup error:', err);
//     }
//   }

//   it('should request reset successfully', async () => {
//     const email = getUniqueEmail();
//     await request(app).post('/api/auth/register-admin').send({ ...baseUser, email });

//     const res = await request(app).post('/api/auth/request-reset').send({ email });

//     expect(res.statusCode).toEqual(200);
//     expect(res.body.success).toBe(true);
//     expect(res.body.message).toMatch(/Request reset( password)? successfully/i);

//     const user = await prisma.user.findUnique({ where: { email } });
//     const otp = await prisma.passwordReset.findFirst({ where: { userId: user!.id, isUsed: false } });
//     expect(otp).not.toBeNull();

//     await cleanupUser(email);
//   });

//   it('should fail if email not found', async () => {
//     const res = await request(app).post('/api/auth/request-reset').send({ email: 'notfound@example.com' });

//     expect(res.statusCode).toEqual(400);
//     expect(res.body.success).toBe(false);
//     expect(res.body.message).toMatch(/User not found/i);
//   });

//   it('should fail if email is empty', async () => {
//     const res = await request(app).post('/api/auth/request-reset').send({ email: '' });

//     expect(res.statusCode).toEqual(400);
//     expect(res.body.success).toBe(false);
//     expect(res.body.message).toMatch(/Email wajib diisi/i);
//   });
// });

// describe('POST /api/auth/reset-password', () => {
//   const baseUser = {
//     username: 'resetPassUser',
//     password: '12345678',
//     institution: 'TPQ ResetPass Test',
//   };
//   const getUniqueEmail = () => `resetpass+${Date.now()}+${Math.random()}@example.com`;

//   afterAll(async () => {
//     await prisma.$disconnect();
//   });

//   async function cleanupUser(email: string) {
//     try {
//       const user = await prisma.user.findUnique({ where: { email } });
//       if (!user) return;

//       await prisma.passwordReset.deleteMany({ where: { userId: user.id } });
//       await prisma.emailVerification.deleteMany({ where: { userId: user.id } });
//       await prisma.institution.deleteMany({ where: { createdBy: user.id } });
//       await prisma.user.delete({ where: { id: user.id } });
//     } catch (err) {
//       console.log('Cleanup error:', err);
//     }
//   }

//   it('should reset password successfully', async () => {
//     const email = getUniqueEmail();
//     await request(app).post('/api/auth/register-admin').send({ ...baseUser, email });

//     const user = await prisma.user.findUnique({ where: { email } });

//     // Buat OTP di database
//     const otpCode = '123456';
//     await prisma.passwordReset.create({
//       data: {
//         userId: user!.id,
//         otpCode,
//         expiredAt: new Date(Date.now() + 1000 * 60 * 10), // 10 menit ke depan
//         isUsed: false,
//       },
//     });

//     const newPassword = 'newStrongPass123';

//     const res = await request(app).post('/api/auth/reset-password').send({
//       email,
//       otp: otpCode,
//       password: newPassword,
//     });

//     expect(res.statusCode).toEqual(200);
//     expect(res.body.success).toBe(true);
//     expect(res.body.message).toMatch(/Password reset successfully/i);

//     // Pastikan password tersimpan baru di DB
//     const updatedUser = await prisma.user.findUnique({ where: { email } });
//     const match = await bcrypt.compare(newPassword, updatedUser!.password);
//     expect(match).toBe(true);

//     await cleanupUser(email);
//   });

//   it('should fail if OTP is wrong', async () => {
//     const email = getUniqueEmail();
//     await request(app).post('/api/auth/register-admin').send({ ...baseUser, email });

//     const user = await prisma.user.findUnique({ where: { email } });

//     await prisma.passwordReset.create({
//       data: {
//         userId: user!.id,
//         otpCode: '654321',
//         expiredAt: new Date(Date.now() + 1000 * 60 * 10),
//         isUsed: false,
//       },
//     });

//     const res = await request(app).post('/api/auth/reset-password').send({
//       email,
//       otp: 'wrongotp',
//       password: 'newPass123',
//     });

//     expect(res.statusCode).toEqual(400);
//     expect(res.body.success).toBe(false);
//     expect(res.body.message).toMatch(/Invalid OTP/i);

//     await cleanupUser(email);
//   });

//   it('should fail if password is empty', async () => {
//     const email = getUniqueEmail();
//     await request(app).post('/api/auth/register-admin').send({ ...baseUser, email });

//     const user = await prisma.user.findUnique({ where: { email } });

//     const otpCode = '123456';
//     await prisma.passwordReset.create({
//       data: {
//         userId: user!.id,
//         otpCode,
//         expiredAt: new Date(Date.now() + 1000 * 60 * 10),
//         isUsed: false,
//       },
//     });

//     const res = await request(app).post('/api/auth/reset-password').send({
//       email,
//       otp: otpCode,
//       password: '',
//     });

//     expect(res.statusCode).toEqual(400);
//     expect(res.body.success).toBe(false);
//     expect(res.body.message).toMatch(/Password baru wajib diisi/i);

//     await cleanupUser(email);
//   });

//   it('should fail if user not found', async () => {
//     const res = await request(app).post('/api/auth/reset-password').send({
//       email: 'notfound@example.com',
//       otp: '123456',
//       password: 'somePass123',
//     });

//     expect(res.statusCode).toEqual(400);
//     expect(res.body.success).toBe(false);
//     expect(res.body.message).toMatch(/User not found/i);
//   });
// });