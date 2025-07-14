import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import { AiOutlineHome, AiOutlineMessage, AiOutlineUsergroupAdd, AiTwotoneCalendar, AiOutlineSetting  } from "react-icons/ai";
import { HiOutlineOfficeBuilding, HiOutlineClipboardList, HiOutlineLogout } from "react-icons/hi";

interface SidebarProps{

}

const Sidebar: FC<SidebarProps> = ({}) => {
    return(
        <div className=" pb-12 min-h-screen">
            <div className=" space-y-4 py-4">
                <div className=" px-3 py-2">
                    <h2 className=" mb-2 px-4 text-lg font-semibold">
                        Dashboard
                    </h2>
                    <div className=" space-y-3">
                        <Button variant={'ghost'} className=" w-full justify-start rounded-none hover:text-primary">
                            <AiOutlineHome className=" mr-2 text-lg" />
                            Home
                        </Button>
                        <Button variant={'ghost'} className=" w-full justify-start rounded-none hover:text-primary">
                            <AiOutlineMessage  className=" mr-2 text-lg" />
                            Massage
                        </Button>
                        <Button variant={'ghost'} className=" w-full justify-start rounded-none hover:text-primary">
                            <HiOutlineOfficeBuilding className=" mr-2 text-lg" />
                            Company Profile
                        </Button>
                        <Button variant={'ghost'} className=" w-full justify-start rounded-none hover:text-primary">
                            <AiOutlineUsergroupAdd className=" mr-2 text-lg" />
                            All Aplicants
                        </Button>
                        <Button variant={'ghost'} className=" w-full justify-start rounded-none hover:text-primary">
                            <HiOutlineClipboardList  className=" mr-2 text-lg" />
                            Job Listing
                        </Button>
                        <Button variant={'ghost'} className=" w-full justify-start rounded-none hover:text-primary">
                            <AiTwotoneCalendar className=" mr-2 text-lg" />
                            My Schedule
                        </Button>
                    </div>
                </div>
            </div>
            <div className=" space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className=" mb-2 px-4 text-lg font-semibold">
                        Settings
                    </h2>
                    <Button variant={'ghost'} className=" w-full justify-start rounded-none hover:text-primary">
                        <AiOutlineSetting  className=" mr-2 text-lg" />
                        Home
                    </Button>
                    <Button variant={'ghost'} className=" w-full text-red-500 hover:bg-red-200 justify-start rounded-none">
                        <HiOutlineLogout  className=" mr-2 text-lg" />
                        Logout
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;
