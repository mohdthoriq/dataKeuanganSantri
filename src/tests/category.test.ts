// import request from "supertest";
// import app from "../app";
// import jwt from "jsonwebtoken";

// describe("POST /api/category", () => {
//   const adminToken = jwt.sign(
//     { id: 1, role: "ADMIN" },
//     process.env.JWT_SECRET || "secret_kunci_rahasia"
//   );

//   it("should return 401 if no token provided", async () => {
//     const res = await request(app)
//       .post("/api/category")
//       .send({
//         name: "Operasional",
//         type: "EXPENSE",
//         institutionId: 1,
//       });

//     expect(res.statusCode).toBe(401);
//     expect(res.body.success).toBe(false);
//   });

//   it("should return 400 if required fields are missing", async () => {
//     const res = await request(app)
//       .post("/api/category")
//       .set("Authorization", `Bearer ${adminToken}`)
//       .send({
//         name: "Operasional",
//       });

//     expect(res.statusCode).toBe(400);
//     expect(res.body.success).toBe(false);
//     expect(res.body.message).toBe(
//       "name, type, and institutionId are required"
//     );
//   });

//   it("should create category successfully", async () => {
//     const res = await request(app)
//       .post("/api/category")
//       .set("Authorization", `Bearer ${adminToken}`)
//       .send({
//         name: "Operasional",
//         type: "PENGELUARAN",
//         institutionId: 1,
//       });

//     console.log(res.body);
//     expect(res.statusCode).toBe(200);

//     // === successResponse ===
//     expect(res.body.success).toBe(true);
//     expect(res.body.message).toBe("Category created successfully");

//     expect(res.body.data).toHaveProperty("id");
//     expect(res.body.data.name).toBe("Operasional");

//     // pagination selalu ada tapi null
//     expect(res.body.pagination).toBeNull();
//   });

//   it("should fail if category already exists", async () => {
//     // create pertama
//     await request(app)
//       .post("/api/category")
//       .set("Authorization", `Bearer ${adminToken}`)
//       .send({
//         name: "Operasional",
//         type: "PENGELUARAN",
//         institutionId: 1,
//       });

//     // create kedua (duplikat)
//     const res = await request(app)
//       .post("/api/category")
//       .set("Authorization", `Bearer ${adminToken}`)
//       .send({
//         name: "Operasional",
//         type: "PENGELUARAN",
//         institutionId: 1,
//       });

//     expect(res.statusCode).toBe(400);
//     expect(res.body.success).toBe(false);
//     expect(res.body.message).toContain("Category already exists");
//   });
// });

// describe("GET /api/category", () => {
//   // Token dummy untuk testing
//   const adminToken = jwt.sign(
//     { id: 1, role: "ADMIN" },
//     process.env.JWT_SECRET || "secret_kunci_rahasia"
//   );

//   // Jika mau coba role USER
//   const userToken = jwt.sign(
//     { id: 2, role: "USER" },
//     process.env.JWT_SECRET || "secret_kunci_rahasia"
//   );

//   it("should return 401 if no token provided", async () => {
//     const res = await request(app).get("/api/category");

//     expect(res.statusCode).toBe(401);
//     expect(res.body.success).toBe(false);
//   });

//   it("should return 200 and list of categories for admin", async () => {
//     const res = await request(app)
//       .get("/api/category")
//       .query({ institutionId: 1 })
//       .set("Authorization", `Bearer ${adminToken}`);

//     expect(res.statusCode).toBe(200);
//     expect(res.body.success).toBe(true);
//     expect(Array.isArray(res.body.data)).toBe(true);
//     // Pagination null sesuai successResponse
//     expect(res.body.pagination).toBeNull();
//     expect(res.body.message).toBe("Get categories success");
//   });

//   it("should filter categories by type and search", async () => {
//     const res = await request(app)
//       .get("/api/category")
//       .query({ institutionId: 1, type: "PENGELUARAN", search: "Operasional" })
//       .set("Authorization", `Bearer ${adminToken}`);

//     expect(res.statusCode).toBe(200);
//     expect(res.body.success).toBe(true);
//     expect(Array.isArray(res.body.data)).toBe(true);

//     // cek semua items type = EXPENSE
//     res.body.data.forEach((cat: any) => {
//       expect(cat.type).toBe("PENGELUARAN");
//       expect(cat.name.toLowerCase()).toContain("operasional");
//     });
//   });

//   it("should filter categories by isActive", async () => {
//     const res = await request(app)
//       .get("/api/category")
//       .query({ institutionId: 1, isActive: "true" })
//       .set("Authorization", `Bearer ${adminToken}`);

//     expect(res.statusCode).toBe(200);
//     expect(res.body.success).toBe(true);
//     expect(Array.isArray(res.body.data)).toBe(true);

//     // cek semua items isActive = true
//     res.body.data.forEach((cat: any) => {
//       expect(cat.isActive).toBe(true);
//     });
//   });
// });