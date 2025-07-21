"use client";
import { JobFormSchema } from "@/lib/form-shcema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, {FC} from "react";
import { useForm } from "react-hook-form";
import { Form, FormDescription, FormLabel } from "@/components/ui/form";
import { ArrowLeftIcon } from "lucide-react";

import z from "zod";
import { Separator } from "@/components/ui/separator";
import FieldInput from "@/components/organism/FieldInput";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { JOBTYPES } from "@/constans";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface PostJobPageProps{

}
const PostJobPage: FC<PostJobPageProps>= ({}) => {

    const form = useForm<z.infer<typeof JobFormSchema>>({
        resolver: zodResolver(JobFormSchema),
        defaultValues: {
            requiredSklils: []
        }
    })

    const onSubmit = (val: z.infer<typeof JobFormSchema>) => {
        console.log(val)
    }

    return(
        <div>
            <div className=" inline-flex items-center gap-2 cursor-pointer hover:text-primary">
                <ArrowLeftIcon className=" w-7 h-7"/>
                <span className=" text-2xl font-semibold">Post a Job</span>
            </div>

            <div className=" my-5">
                <div className=" text-lg font-semibold">Basic Information</div>
                <div className=" text-gray-400">List out your perks and benefit</div>
            </div>

            <Separator/>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=" mt-6 space-y-6 pt-6">
                    <FieldInput title="Job Title" subtitle="Job titles must be describe one position">
                        <FormField
                            control={form.control}
                            name="roles"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="e.g. Software Engineer" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        At least 80 character
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </FieldInput>
                    
                    <FieldInput title="Type of Employement" subtitle=" You can select multiple type of employment">
                        <RadioGroup>
                            {JOBTYPES.map(
                                (item: string, i: number) => (
                                <FormItem key={item + i} className="flex items-center gap-3">
                                    <FormControl>
                                        <RadioGroupItem value={item} />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        {item}
                                    </FormLabel>
                                </FormItem>
                            ))}
                        </RadioGroup>
                    </FieldInput>

                    <FieldInput title="Salary" subtitle="Please specify the estimated salary range for the role. *You can leave this blank">
                        <div className=" w-[450px] flex flex-row justify-between items-center">
                            <FormField
                                control={form.control}
                                name="salaryFrom"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Rp 3.000.000,00" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <span className=" text-center">To</span>
                            <FormField
                                control={form.control}
                                name="salaryTo"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Rp 6.000.000,00" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </FieldInput>

                    <FieldInput title="Categories" subtitle="You can select multiple job categories">
                        <FormField
                            control={form.control}
                            name="categoryId"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Select Job Categories</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                    <SelectTrigger className=" w-[450px]">
                                        <SelectValue placeholder="Select Job Categories" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                    </FieldInput>

                    
                </form>
            </Form>
        </div>
    )
}
export default PostJobPage