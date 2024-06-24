import Entity from "../Entity";

export default class Experience implements Entity {
  id
  title
  company
  dateFrom
  dateTo
  description
  tech
  
  constructor(id: number, position: string, company: string, dateFrom: string, dateTo: string, description: string, tech: string[]) {
    this.id = id
    this.title = position
    this.company = company
    this.dateFrom = dateFrom
    this.dateTo = dateTo
    this.description = description
    this.tech = tech
  }
}