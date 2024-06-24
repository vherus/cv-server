import { Router } from 'express'
import controller from './experience.controller'

const router = Router()

router.get('/', controller.getAll.bind(controller))
router.post('/', controller.post.bind(controller))
router.get('/:id', controller.get.bind(controller))
router.delete('/:id', controller.delete.bind(controller))
router.put('/:id', controller.put.bind(controller))

export default router