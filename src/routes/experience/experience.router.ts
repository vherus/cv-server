import { Router } from 'express'
import controller from './experience.controller'
import Validate from '../../middleware/validate'
import { ValidateExperiencePOST, ValidateExperiencePUT } from './experience.validators'

const router = Router()

router.get('/', controller.getAll.bind(controller))
router.post('/', Validate(ValidateExperiencePOST), controller.post.bind(controller))
router.get('/:id', controller.get.bind(controller))
router.delete('/:id', controller.delete.bind(controller))
router.put('/:id', Validate(ValidateExperiencePUT), controller.put.bind(controller))

export default router