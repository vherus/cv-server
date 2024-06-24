import supertest from 'supertest'
import server from '../../../src/server'
import ExperienceDto from '../../../src/dal/experience/ExperienceDto'

describe('/experience', () => {
  describe('POST', () => {
    it('should create an experience', async () => {
      const exp: ExperienceDto = {
        title: 'Dev',
        company: 'Dev Business',
        dateFrom: 'Jan 2020',
        dateTo: 'Feb 2020',
        description: 'A mint business',
        tech: ['typescript', 'express']
      }

      const response = await supertest(server).post('/experience').send(exp)

      expect(response.status).toBe(201)
      expect(response.body.data).toBeDefined()
      expect(response.body.data.id).toBe(7)
      expect(response.body.data.title).toBe('Dev')
      expect(response.body.data.company).toBe('Dev Business')
      expect(response.body.data.dateFrom).toBe('Jan 2020')
      expect(response.body.data.dateTo).toBe('Feb 2020')
      expect(response.body.data.description).toBe('A mint business')
      expect(response.body.data.tech).toEqual(['typescript', 'express'])
    })

    it('should send a 400 on missing request body', async () => {
      const response = await supertest(server).post('/experience').send({})

      expect(response.status).toBe(400)
      expect(response.body.error).toBeDefined()
      expect(response.body.error[0]).toBe('body: title is required')
      expect(response.body.error[1]).toBe('body: company is required')
      expect(response.body.error[2]).toBe('body: dateFrom is required')
      expect(response.body.error[3]).toBe('body: dateTo is required')
      expect(response.body.error[4]).toBe('body: description is required')
      expect(response.body.error[5]).toBe('body: tech is required')
    })

    it('should send a 400 on invalid body data', async () => {
      const req = {
        title: 42,
        company: true,
        dateFrom: 400.10,
        dateTo: { name: 'Nathan' },
        description: [42],
        tech: false
      }

      const response = await supertest(server).post('/experience').send(req)

      expect(response.status).toBe(400)
      expect(response.body.error).toBeDefined()
      expect(response.body.error[0]).toBe('body: title must be a string')
      expect(response.body.error[1]).toBe('body: company must be a string')
      expect(response.body.error[2]).toBe('body: dateFrom must be a string')
      expect(response.body.error[3]).toBe('body: dateTo must be a string')
      expect(response.body.error[4]).toBe('body: description must be a string')
      expect(response.body.error[5]).toBe('body: tech must be an array')

      const response2 = await supertest(server).post('/experience').send({
        ...req,
        tech: [42]
      })

      expect(response2.body.error[5]).toBe('body: tech items must be strings')
    })
  })
})