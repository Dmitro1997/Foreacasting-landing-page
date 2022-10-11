import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function AboutCompany() {
    return(
        <div className="bg-[#030A11] bg-about-company">
            <div className=" grid grid-cols-5 text-white">
                <div className="col-span-3 pl-20 text-lg">
                    <span className="text-[#AE91DF]">IamFuture</span> is the unique concept of intuitive trading recommendation system invented in Monaco by <span className="text-[#AE91DF]">Maya Bernaia</span> www.IamFuture.life and developed by <span className="text-[#AE91DF]">Mr. Omar Hammemi</span>.
                </div>
            </div>
            <div className="grid grid-cols-2 mt-8">
                <div className="pl-48">
                    <div className="text-lg">
                        <div className="w-96 h-24 px-7 mb-5 bg-grey-card rounded-lg border self-center flex">
                            <div className="self-center pr-3">
                                <div className="rounded bg-[#AE91DF] w-6 h-6 self-center text-center">
                                    <FontAwesomeIcon icon={faCheck}/>
                                </div>
                            </div>
                            <div className="self-center text-white">
                                Insight on the cryptocurrency price dynamic;
                            </div>
                        </div>
                        <div className="w-96 h-24 px-7 mb-5 bg-grey-card rounded-lg border self-center flex">
                            <div className="self-center pr-3">
                                <div className="rounded bg-[#AE91DF] w-6 h-6 self-center text-center">
                                    <FontAwesomeIcon icon={faCheck}/>
                                </div>
                            </div>
                            <div className="self-center text-white">
                                Real time recommendations on the future values;
                            </div>
                        </div>
                        <div className="w-96 h-24 px-7 mb-5 bg-grey-card rounded-lg border self-center flex">
                            <div className="self-center pr-3">
                                <div className="rounded bg-[#AE91DF] w-6 h-6 self-center text-center">
                                    <FontAwesomeIcon icon={faCheck}/>
                                </div>
                            </div>
                            <div className="self-center text-white">
                                Organized approach to the crypto data massives;
                            </div>
                        </div>
                        <div className="w-96 h-24 px-7 mb-5 bg-grey-card rounded-lg border self-center flex">
                            <div className="self-center pr-3">
                                <div className="rounded bg-[#AE91DF] w-6 h-6 self-center text-center">
                                    <FontAwesomeIcon icon={faCheck}/>
                                </div>
                            </div>
                            <div className="self-center text-white">
                                Investment decision facilitaion.
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="bg-company-img w-full h-96">
                    
                </div>
            </div>
        </div>
    )
}

export default AboutCompany;