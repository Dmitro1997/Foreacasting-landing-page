import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoldCoin from '../../assets/3DImages/GoldCoin.png';


function AboutCompany() {
    return(
        <div className="bg-[#030A11] bg-about-company py-10 md:py-20">
            <div className=" grid grid-cols-1 md:grid-cols-5 text-white">
                <div className="md:col-span-4 px-5 sm:px-20 md:pr-0 text-lg">
                    <span className="text-[#AE91DF]">IamFuture</span> is the unique concept of intuitive trading recommendation system invented in Monaco by <span className="text-[#AE91DF]">Maya Bernaia</span> www.IamFuture.life and developed by <span className="text-[#AE91DF]">Mr. Omar Hammemi</span>.
                </div>
                <div className="flex justify-center md:hidden">
                    <img src={GoldCoin} className="w-5/6 sm:w-3/6" ></img>
                </div>
            </div>
            <div className="grid md:grid-cols-2 mt-8">
                <div className="md:pl-28">
                    <div className="text-lg flex flex-col  md:block">
                        <div className="w-5/6 md:w-96 h-24 px-7 mb-5 bg-grey-card rounded-lg border self-center flex">
                            <div className="self-center pr-3">
                                <div className="rounded bg-[#AE91DF] w-6 h-6 self-center text-center">
                                    <FontAwesomeIcon icon={faCheck}/>
                                </div>
                            </div>
                            <div className="self-center text-white">
                                Insight on the cryptocurrency price dynamic;
                            </div>
                        </div>
                        <div className="w-5/6 md:w-96 h-24 px-7 mb-5 bg-grey-card rounded-lg border self-center flex">
                            <div className="self-center pr-3">
                                <div className="rounded bg-[#AE91DF] w-6 h-6 self-center text-center">
                                    <FontAwesomeIcon icon={faCheck}/>
                                </div>
                            </div>
                            <div className="self-center text-white">
                                Real time recommendations on the future values;
                            </div>
                        </div>
                        <div className="w-5/6 md:w-96 h-24 px-7 mb-5 bg-grey-card rounded-lg border self-center flex">
                            <div className="self-center pr-3">
                                <div className="rounded bg-[#AE91DF] w-6 h-6 self-center text-center">
                                    <FontAwesomeIcon icon={faCheck}/>
                                </div>
                            </div>
                            <div className="self-center text-white">
                                Organized approach to the crypto data massives;
                            </div>
                        </div>
                        <div className="w-5/6 md:w-96 h-24 px-7 mb-5 bg-grey-card rounded-lg border self-center flex">
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
                <div >
                    <img src={GoldCoin} className="hidden md:block w-5/6 float-right" ></img>
                </div>
            </div>
        </div>
    )
}

export default AboutCompany;