"use client"

import { Button } from "@/components/ui/button"
import { MoreVertical } from "lucide-react"
import { useRouter } from "next/navigation"
import { FC } from "react"

interface ButtonActionDetailProps{
    url: string
}

const ButtonActionDetail: FC<ButtonActionDetailProps> = ({url}) => {
    const router = useRouter();
    return(
        <Button onClick={() => router.push(url)} size='icon' variant='outline'>
            <MoreVertical/>
        </Button>
    )
}
export default ButtonActionDetail