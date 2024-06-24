import { z } from 'zod'

const ValidateExperiencePOST = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
      invalid_type_error: 'title must be a string'
    }),
    company: z.string({
      required_error: 'company is required',
      invalid_type_error: 'company must be a string'
    }),
    dateFrom: z.string({
      required_error: 'dateFrom is required',
      invalid_type_error: 'dateFrom must be a string'
    }),
    dateTo: z.string({
      required_error: 'dateTo is required',
      invalid_type_error: 'dateTo must be a string'
    }),
    description: z.string({
      required_error: 'description is required',
      invalid_type_error: 'description must be a string'
    }),
    tech: z.array(z.string({ invalid_type_error: 'tech items must be strings' }), {
      required_error: 'tech is required',
      invalid_type_error: 'tech must be an array'
    })
  })
})

const ValidateExperiencePUT = z.object({
  body: z.object({
    title: z.string({
      invalid_type_error: 'title must be a string'
    }).optional(),
    company: z.string({
      invalid_type_error: 'company must be a string'
    }).optional(),
    dateFrom: z.string({
      invalid_type_error: 'dateFrom must be a string'
    }).optional(),
    dateTo: z.string({
      invalid_type_error: 'dateTo must be a string'
    }).optional(),
    description: z.string({
      invalid_type_error: 'description must be a string'
    }).optional(),
    tech: z.array(z.string({ invalid_type_error: 'tech items must be strings' }), {
      invalid_type_error: 'tech must be an array'
    }).optional()
  })
})

export {
  ValidateExperiencePOST,
  ValidateExperiencePUT
}