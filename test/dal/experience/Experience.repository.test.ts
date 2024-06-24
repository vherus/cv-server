import ExperienceDto from '../../../src/dal/experience/ExperienceDto'
import ExperienceRepository from '../../../src/dal/experience/Experience.repository'
import NotFoundError from '../../../src/error/NotFoundError'

describe('ExperienceRepository', () => {
  const dto: ExperienceDto = {
    title: 'Dev',
    company: 'Dev Business',
    dateFrom: 'Jan 2020',
    dateTo: 'Feb 2020',
    description: 'A mint business',
    tech: ['typescript', 'express']
  }

  let repo: ExperienceRepository

  beforeEach(() => {
    repo = new ExperienceRepository([])
  })

  describe('create', () => {
    it('should increment ids', () => {
      const result1 = repo.create(dto)
      const result2 = repo.create(dto)
  
      expect(result1.id).toBe(1)
      expect(result2.id).toBe(2)
    })
  })

  describe('getById', () => {
    it('should get a record by id if it exists', () => {
      repo.create(dto)
      repo.create({
        ...dto,
        title: 'Code Monkey',
        company: 'Zaius Inc.'
      })

      const result1 = repo.getById(1)
      const result2 = repo.getById(2)

      expect(result1.id).toBe(1)
      expect(result1.title).toBe('Dev')
      expect(result1.company).toBe('Dev Business')

      expect(result2.id).toBe(2)
      expect(result2.title).toBe('Code Monkey')
      expect(result2.company).toBe('Zaius Inc.')
    })

    it('should throw NotFoundError if it does not exist', () => {
      expect(() => repo.getById(1)).toThrow(NotFoundError)
    })
  })

  describe('getAll', () => {
    it('should return all records', () => {
      repo.create(dto)
      repo.create({
        ...dto,
        title: 'Code Monkey',
        company: 'Zaius Inc.'
      })

      const result = repo.getAll()

      expect(result.length).toBe(2)
      expect(result[0].id).toBe(1)
      expect(result[0].title).toBe('Dev')
      expect(result[1].id).toBe(2)
      expect(result[1].title).toBe('Code Monkey')
    })
  })

  describe('update', () => {
    it('should throw NotFoundError when record does not exist', () => {
      expect(() => repo.update(1, dto)).toThrow(NotFoundError)
    })

    it('should update existing records', () => {
      repo.create(dto)
      repo.update(1, {
        ...dto,
        title: 'Code Monkey',
        company: 'Zaius Inc.'
      })

      const updated = repo.getById(1)

      expect(updated.title).toBe('Code Monkey')
      expect(updated.company).toBe('Zaius Inc.')
    })
  })

  describe('delete', () => {
    it('should throw NotFoundError when record does not exist', () => {
      expect(() => repo.delete(1)).toThrow(NotFoundError)
    })

    it('should remove records when they exist', () => {
      repo.create(dto)
      repo.create(dto)
      expect(repo.getAll().length).toBe(2)
      repo.delete(2)
      expect(repo.getAll().length).toBe(1)
    })
  })
})