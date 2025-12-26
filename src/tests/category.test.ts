import request from 'supertest'
import app from '../app'

describe('GET /api/categories', () => {
  it('should return list of categories with pagination info', async () => {
    const res = await request(app)
      .get('/api/categories')
      .query({
        page: 1,
        limit: 10,
      })

    expect(res.statusCode).toBe(200)
    expect(res.body.success).toBe(true)

    expect(Array.isArray(res.body.data.categories)).toBe(true)
    expect(typeof res.body.data.total).toBe('number')
    expect(typeof res.body.data.totalPages).toBe('number')
    expect(res.body.data.currentPage).toBe(1)
  })
})

describe('GET /api/categories/:id', () => {
  it('should return category by id', async () => {
    const res = await request(app)
      .get('/api/categories/1')

    expect(res.statusCode).toBe(200)
    expect(res.body.success).toBe(true)

    expect(res.body.data).toHaveProperty('id')
    expect(res.body.data.id).toBe(1)
    expect(res.body.data).toHaveProperty('name')
  })
})
