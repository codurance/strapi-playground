const request = require('supertest')
const server = require('../src/server')


describe('app', () => {
  it('responds', async () => {
    const response = await request(server).get('/')

    expect(response.status).toBe(200)
    expect(response.type).toBe('text/html')
    expect(response.text).toContain('Hello World!')
  })
})
