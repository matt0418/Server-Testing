require('dotenv').config()
const request = require('supertest')
const server = require('./server')

describe('server', () => {
    it('should set testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

    describe('GET /wizards', () => {
        it('should return status 200', async () => {
            const res = await request(server).get('/wizards')
            expect(res.status).toBe(200)
        })
        it('should return JSON', async () => {
            const res = await request(server).get('/wizards')
            expect(res.type).toBe('application/json')
        })
    })
    describe('POST /wizards', () => {
        it('should send back a message with text', async () => {
            const res = await request(server).post('/wizards')
            expect(res).toHaveProperty('text')
        })
    })

})