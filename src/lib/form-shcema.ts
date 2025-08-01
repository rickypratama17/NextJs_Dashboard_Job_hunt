import { JOBTYPES } from "@/constans"
import { z } from "zod"

export const JobFormSchema = z.object({
    roles: z
        .string({error: 'Job Title is required'})
        .min(3, {message: 'Job Title must be at least 4 characters'}),
    jobType: z.enum(JOBTYPES, {error: 'You need to select a job type'}),
    salaryFrom: z.string({error: 'Salary is required'}),
    salaryTo: z.string({error: 'Salary is required'}),
    categoryId: z.string({error: 'You need select a category'}),
    requiredSkills: z.string().array().nonempty({message: 'Required Skill must be at least 1 skill'}),
    jobDescription: z.string({error: 'Job Description is required'}).min(10, {message: 'Job Description must be at least 10 characters'}),
    responsibility: z.string({error: 'Responsibility is required'}).min(10, {message: 'Responsibility must be at least 10 characters'}),
    whoYouAre: z.string({error: 'Who You Are is required'}).min(10, {message: 'Who You Are must be at least 10 characters'}),
    niceToHave: z.string({error: 'Nice-To-Have is required'}).min(10, {message: 'Nice-To-Have must be at least 10 characters'}),
    benefit: z.object({ 
        benefit: z.string(), 
        description: z.string()
    }).array().nonempty({message: 'Benefit must be at least 1 benefit'})
})