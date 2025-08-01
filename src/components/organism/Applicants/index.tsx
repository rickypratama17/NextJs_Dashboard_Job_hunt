import React, {FC} from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge";
import { JOB_APPLICANTS_COLUMN, JOB_APPLICANTS_DATA } from "@/constans";
import ButtonActionDetail from "../ButtonActionDetail";

interface ApplicantsProps{

}

const Applicants: FC<ApplicantsProps> = ({}) => {
    return(
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        {JOB_APPLICANTS_COLUMN.map((item: string, i:number) =>(
                            <TableHead key={item + i}>{item}</TableHead>
                        ))}
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {JOB_APPLICANTS_DATA.map((item: any, i:number) => (
                        <TableRow key={item.roles + i}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.appliedDate}</TableCell>
                            <TableCell>
                                <ButtonActionDetail url="/job-detail/1" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default Applicants