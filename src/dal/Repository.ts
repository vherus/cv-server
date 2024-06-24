import Entity from './Entity'

export default abstract class Repository<T extends Entity, Dto> {
  /**
   * @throws '@/error/EntityConflictError'
   * @throws '@/error/InvalidDtoError'
   */
  abstract create(dto: Dto): T;

  abstract getAll(): T[]

  /** @throws '@/error/NotFoundError' */
  abstract getById(id: number): T

  /**
   * @throws '@/error/EntityConflictError'
   * @throws '@/error/InvalidDtoError'
   * @throws '@/error/NotFoundError'
   */
  abstract update(id: number, dto: Dto): T

  /** @throws '@/error/NotFoundError' */
  abstract delete(id: number): T
}