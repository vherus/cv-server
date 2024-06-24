import ExperienceRepository from "@/dal/experience/Experience.repository";
import Controller from "@/service/Controller";

const repo = new ExperienceRepository
const controller = new Controller(repo)

export default controller