import React, {FC} from "react";

interface JobDetailProps{

}

const JobDetail: FC<JobDetailProps> = ({}) => {
    return (
        <div>
            <div className=" grid grid-cols-3 w-full gap-5">
                <div className=" col-span-2 space-y-10">
                    <div>
                        <div className=" text-3xl font-semibold">Description</div>
                        <div className=" text-gray-500 mt-3">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Officiis labore dolorum maiores minima illo velit? 
                                Earum laborum architecto fugiat, hic aperiam ad 
                                expedita atque aliquam obcaecati odio deserunt ab. Unde.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className=" text-3xl font-semibold">Responsibilities</div>
                        <div className=" text-gray-500 mt-3">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Officiis labore dolorum maiores minima illo velit? 
                                Earum laborum architecto fugiat, hic aperiam ad 
                                expedita atque aliquam obcaecati odio deserunt ab. Unde.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className=" text-3xl font-semibold">Who You Are</div>
                        <div className=" text-gray-500 mt-3">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Officiis labore dolorum maiores minima illo velit? 
                                Earum laborum architecto fugiat, hic aperiam ad 
                                expedita atque aliquam obcaecati odio deserunt ab. Unde.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className=" text-3xl font-semibold">Nice-To-Have</div>
                        <div className=" text-gray-500 mt-3">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Officiis labore dolorum maiores minima illo velit? 
                                Earum laborum architecto fugiat, hic aperiam ad 
                                expedita atque aliquam obcaecati odio deserunt ab. Unde.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetail