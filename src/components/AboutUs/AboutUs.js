import React from "react";
import defaultPhoto from '../../assets/Photos/defaultPhoto.png';
import Dmytro from '../../assets/Photos/Dmytro.png';
import Frederic from '../../assets/Photos/Frederic.png';
import Jeta from '../../assets/Photos/Jeta.png';
import Omar from '../../assets/Photos/Omar.png';


function AboutUs() {
    return (
        <div className="bg-[#030A11] text-center py-20">
            <div className="text-[#AE91DF] text-xl md:text-[40px] font-bold mb-10">
                We Are
            </div>
            <div className="grid grid-cols-1 px-5 sm:grid-cols-2 md:grid-cols-4 sm:px-10 gap-4 mb-5">
                <div className="bg-grey-card rounded-md inline-block">
                    <div className="">
                        <img src={defaultPhoto} className="w-full px-6 py-5 rounded-[35px]"></img>
                    </div>
                    <div className="mb-5">
                        <div className="text-[#AE91DF] text-lg font-bold">
                            Maya
                        </div>
                        <div className=" italic text-white text-md text-center">
                            Enterpreneur and organizer
                        </div>
                    </div>
                </div>
                <div className="bg-grey-card rounded-md inline-block">
                    <div className="">
                        <img src={Omar} className="w-full px-6 py-5 rounded-[35px]"></img>
                    </div>
                    <div className="mb-5">
                        <div className="text-[#AE91DF] text-lg font-bold">
                            Omar
                        </div>
                        <div className=" italic text-white text-md text-center px-6">
                           Data Scientist, Fintech Expert, responsible for forecasting model building.
                        </div>
                    </div>
                </div>
                <div className="bg-grey-card rounded-md inline-block">
                    <div className="">
                        <img src={defaultPhoto} className="w-full px-6 py-5 rounded-[35px]"></img>
                    </div>
                    <div className="mb-5">
                        <div className="text-[#AE91DF] text-lg font-bold">
                            Samuel
                        </div>
                        <div className=" italic text-white text-md text-center px-6">
                            Fullstack Developer responsible for the ecosystem sustainablility
                        </div>
                    </div>
                </div>
                <div className="bg-grey-card rounded-md inline-block">
                    <div className="">
                        <img src={defaultPhoto} className="w-full px-6 py-5 rounded-[35px]"></img>
                    </div>
                    <div className="mb-5">
                        <div className="text-[#AE91DF] text-lg font-bold">
                            Yvan
                        </div>
                        <div className=" italic text-white text-md text-center px-6">
                            Project Economy Planning
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 px-5 sm:grid-cols-2 md:grid-cols-4 sm:px-10 gap-4">
                <div className="bg-grey-card rounded-md inline-block">
                    <div className="">
                        <img src={Frederic} className="w-full px-6 py-5 rounded-[35px]"></img>
                    </div>
                    <div className="mb-5">
                        <div className="text-[#AE91DF] text-lg font-bold">
                            Frederic
                        </div>
                        <div className=" italic text-white text-md text-center px-6">
                            Strategy And Development
                        </div>
                    </div>
                </div>
                <div className="bg-grey-card rounded-md inline-block">
                    <div className="">
                        <img src={Jeta} className="w-full px-6 py-5 rounded-[35px]"></img>
                    </div>
                    <div className="mb-5">
                        <div className="text-[#AE91DF] text-lg font-bold">
                            Jeta
                        </div>
                        <div className=" italic text-white text-md text-center px-6">
                            Production
                        </div>
                    </div>
                </div>
                <div className="bg-grey-card rounded-md inline-block">
                    <div className="">
                        <img src={defaultPhoto} className="w-full px-6 py-5 rounded-[35px]"></img>
                    </div>
                    <div className="mb-5">
                        <div className="text-[#AE91DF] text-lg font-bold">
                            Niyaz
                        </div>
                        <div className=" italic text-white text-md text-center px-6">
                            Art
                        </div>
                    </div>
                </div>
                <div className="bg-grey-card rounded-md inline-block">
                    <div className="">
                        <img src={Dmytro} className="w-full px-6 py-5 rounded-[35px]"></img>
                    </div>
                    <div className="mb-5">
                        <div className="text-[#AE91DF] text-lg font-bold">
                            Dmytro Smolianets
                        </div>
                        <div className=" italic text-white text-md text-center px-6">
                            Web and Blockchain Fullstack Developer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
