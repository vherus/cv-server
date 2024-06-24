import Entity from '@/dal/Entity'
import Repository from '@/dal/Repository'
import { Request, Response } from 'express'

export default class Controller<T extends Entity, Dto> {
  protected repo

  constructor(repo: Repository<T, Dto>) {
    this.repo = repo
  }

  get(req: Request, res: Response) {
    const id = Number(req.params.id)
    const data = this.repo.getById(id)

    res.status(200).json({
      data
    })
  }

  getAll(_req: Request, res: Response) {
    const data = this.repo.getAll()

    res.status(200).json({
      data
    })
  }

  post(req: Request, res: Response) {
    const { body }: { body: Dto } = req.body
    const data = this.repo.create(body)

    res.status(201).json({
      data
    })
  }

  put(req: Request, res: Response) {
    const id = Number(req.params.id)
    const { body }: { body: Dto } = req.body
    const data = this.repo.update(id, body)

    res.status(200).json({
      data
    })
  }

  delete(req: Request, res: Response) {
    const id = Number(req.params.id)
    const data = this.repo.delete(id)

    res.status(200).json({
      data
    })
  }
}