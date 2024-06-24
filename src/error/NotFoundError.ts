import APIError from "./APIError";

export default class NotFoundError extends APIError {
  constructor(message: string) {
    super(404, message)
  }
}