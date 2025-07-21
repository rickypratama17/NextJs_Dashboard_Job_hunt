import { JOBTYPES } from "@/constans"
import { z } from "zod"

export const JobFormSchema = z.object({
    roles: z
        .string({required_error: 'Job Title is required'})
        .min(3, {message: 'Job Title must be at least 4 characters'}),
    JobType: z.enum(JOBTYPES, {required_error: 'You need to select a job type'}),
    salaryFrom: z.string({required_error: 'Salary is required'}),
    salaryTo: z.string({required_error: 'Salary is required'}),
    categoryId: z.string({required_error: 'You need select a category'}),
    requiredSklils: z.string().array().nonempty({message: 'Required Skill must be at least 1 skill'}),
    jobDescription: z.string({required_error: 'Job Description is required'}).min(10, {message: 'Job Description must be at least 10 characters'}),
    responsibility: z.string({required_error: 'Job Description is required'}).min(10, {message: 'Job Description must be at least 10 characters'}),
    whoYouAre: z.string({required_error: 'Job Description is required'}).min(10, {message: 'Job Description must be at least 10 characters'}),
    niceToHave: z.string({required_error: 'Job Description is required'}).min(10, {message: 'Job Description must be at least 10 characters'}),
    benefit: z.object({ 
        benefit: z.string(), 
        description: z.string()
    }).array().nonempty({message: 'Benefit must be at least 1 benefit'})
})