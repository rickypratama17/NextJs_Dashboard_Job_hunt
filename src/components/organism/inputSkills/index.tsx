import { JobFormSchema } from "@/lib/form-shcema";
import { FC, useRef, useState } from "react";
import {z} from "zod";

interface inputSkillsProps{
    form: userFormReturn<z.infer<typeof JobFormSchema>>
}

const inputSkills: FC<inputSkillsProps> = ({form}) => (
    const [isHide, setHide] = useState<boolean>(false);
    const [values, setValues] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    

)