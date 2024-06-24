import { Router } from 'express'
import controller from './experience.controller'
import Validate, { ValidateID } from '../../middleware/validate'
import { ValidateExperiencePOST, ValidateExperiencePUT } from './experience.validators'

const router = Router()

router.get('/', controller.getAll.bind(controller))
router.post('/', Validate(ValidateExperiencePOST), controller.post.bind(controller))
router.get('/:id', Validate(ValidateID), controller.get.bind(controller))
router.delete('/:id', Validate(ValidateID), controller.delete.bind(controller))
router.put('/:id', Validate(ValidateID), Validate(ValidateExperiencePUT), controller.put.bind(controller))

export default router