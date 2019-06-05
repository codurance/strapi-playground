const request = require('supertest')
const nock = require('nock')
const server = require('../src/server')

describe('app', () => {
  it('shows banners from CMS', async () => {
    nock('http://content-admin:1337')
      .get('/banners')
      .reply(200, [
        {
          "colour": "black",
          "title": "Get ready for black friday!"
        },
        {
          "colour": "red",
          "title": "The color of passion?"
        }
      ])

    const response = await request(server).get('/')

    expect(response.status).toBe(200)
    expect(response.type).toBe('text/html')
    expect(response.text).toContain('Get ready for black friday!')
    expect(response.text).toContain('The color of passion?')
    expect(nock.isDone()).toBe(true)
  })
})
