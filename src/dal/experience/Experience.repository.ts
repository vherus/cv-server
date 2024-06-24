import NotFoundError from "../../error/NotFoundError";
import Repository from "../Repository";
import Experience from "./Experience";
import ExperienceDto from "./ExperienceDto";
import experienceData from "../../data/experience";

export default class ExperienceRepository extends Repository<Experience, ExperienceDto> {
  private idCounter: number
  private data: Map<number, Experience> = new Map()

  constructor(records = experienceData) {
    super()

    this.idCounter = records.length ? records[records.length-1].id : 0

    records.reduce((map: Map<number, Experience>, exp: Experience) => {
      map.set(exp.id, exp)
      return map
    }, this.data)
  }

  private existsOrThrow(id: number) {
    if (!this.data.has(id)) {
      throw new NotFoundError('experience not found')
    }
  }

  create(dto: ExperienceDto): Experience {
    const id = ++this.idCounter
    const created = {
      id,
      ...dto,
    }

    this.data.set(id, created)

    return created
  }

  getAll(): Experience[] {
    return [...this.data.values()]
  }

  getById(id: number): Experience {
    this.existsOrThrow(id)

    return this.data.get(id)!
  }

  update(id: number, dto: ExperienceDto): Experience {
    this.existsOrThrow(id)

    const updated = {
      id,
      ...dto
    }

    this.data.set(id, updated)
    return updated
  }

  delete(id: number): Experience {
    this.existsOrThrow(id)
    const exp = this.data.get(id)!
    this.data.delete(id)
    return exp
  }
}