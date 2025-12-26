import request from "supertest";
import app from "../app";
import jwt from "jsonwebtoken";
import config from "../utils/env";
describe('GET /api/product', () => {
    const token = jwt.sign({ id: 1, role: 'ADMIN' }, config.JWT_SECRET);
    it('should return 401 if no token is provided of products', async () => {
        const res = await request(app).get('/api/product');
        expect(res.statusCode).toEqual(200);
        expect(res.body.success).toBe(false);
    });
    it('should return 200 if token is provided of products', async () => {
        const res = await request(app).get('/api/product').set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.success).toBe(true);
        expect(Array.isArray(res.body.data)).toBe(true);
    });
});
//# sourceMappingURL=product.test.js.map