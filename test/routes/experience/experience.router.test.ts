import supertest from 'supertest'
import server from '../../../src/server'
import ExperienceDto from '../../../src/dal/experience/ExperienceDto'

describe('/experience', () => {
  const exp: ExperienceDto = {
    title: 'Dev',
    company: 'Dev Business',
    dateFrom: 'Jan 2020',
    dateTo: 'Feb 2020',
    description: 'A mint business',
    tech: ['typescript', 'express']
  }

  describe('POST /', () => {
    it('should create an experience', async () => {
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

  describe('PUT /:id', () => {
    it('should send a 404 when not found', async () => {
      const response = await supertest(server).put('/experience/50').send(exp)

      expect(response.status).toBe(404)
      expect(response.body.error).toBe('experience not found')
    })

    it('should send a 400 on invalid data', async () => {
      const req = {
        title: 42,
        company: true,
        dateFrom: 400.10,
        dateTo: { name: 'Nathan' },
        description: [42],
        tech: false
      }

      const response = await supertest(server).put('/experience/50').send(req)

      expect(response.status).toBe(400)
      expect(response.body.error).toEqual([
        'body: title must be a string',
        'body: company must be a string',
        'body: dateFrom must be a string',
        'body: dateTo must be a string',
        'body: description must be a string',
        'body: tech must be an array'
      ])

      const response2 = await supertest(server).put('/experience/50').send({
        tech: [42]
      })

      expect(response2.body.error).toEqual(['body: tech items must be strings'])
    })

    it('should 400 for invalid ids', async () => {
      const response = await supertest(server).put('/experience/hello').send()

      expect(response.status).toBe(400)
      expect(response.body.error).toEqual(['params: id must be a number'])
    })
  })

  describe('GET /', () => {
    it('should get all records', async () => {
      const response = await supertest(server).get('/experience').send()
      
      expect(response.status).toBe(200)
      expect(response.body.data).toHaveLength(7)
    })
  })

  describe('GET /:id', () => {
    it('should get a single record', async () => {
      const response = await supertest(server).get('/experience/1').send()

      expect(response.status).toBe(200)
      expect(response.body.data.id).toBe(1)
      expect(Object.keys(response.body.data).length).toBeGreaterThan(2)
    })

    it('should 404 for not found ids', async () => {
      const response = await supertest(server).get('/experience/999').send()

      expect(response.status).toBe(404)
      expect(response.body.error).toBe('experience not found')
    })

    it('should 400 for invalid ids', async () => {
      const response = await supertest(server).get('/experience/hello').send()

      expect(response.status).toBe(400)
      expect(response.body.error).toEqual(['params: id must be a number'])
    })
  })

  describe('DELETE /:id', () => {
    it('should delete a record', async () => {
      const response = await supertest(server).get('/experience/1').send()
      expect(response.status).toBe(200)

      const delResponse = await supertest(server).delete('/experience/1').send()
      expect(delResponse.status).toBe(200)

      const response2 = await supertest(server).get('/experience/1').send()
      expect(response2.status).toBe(404)
    })

    it('should 404 for not found ids', async () => {
      const response = await supertest(server).delete('/experience/999').send()

      expect(response.status).toBe(404)
      expect(response.body.error).toBe('experience not found')
    })

    it('should 400 for invalid ids', async () => {
      const response = await supertest(server).delete('/experience/hello').send()

      expect(response.status).toBe(400)
      expect(response.body.error).toEqual(['params: id must be a number'])
    })
  })
})