import React from "react";
import heroImage from '../../assets/3DImages/HeroImage.png'

function Hero() {
    return (
        <div className="bg-[#030A11] grid grid-cols-1 md:grid-cols-5 gap-6 ">
            <div className="md:col-span-3 self-center pl-16">
                <div className="self-center md:mb-4">
                    <h1 className="hero-title font-bold text-[40px] md:text-[60px] lg:text-[72px]">
                        IamFuture Crypto Trading Forecasting.
                    </h1>
                </div>
                <div className="block m-[-40px] md:hidden ">
                    <img src={heroImage} className="w-[50%]">
                    </img>
                </div>
                <div className="text-white pl-6 text-md md:text-lg">
                    <ul className="list-disc">
                        <li className="whitespace-nowrap">
                            Over 21000 cryptocurrencies in existence.
                        </li>
                        <li className="whitespace-nowrap">
                            Many are not well seen.
                        </li>
                        <li className="whitespace-nowrap">
                            Some enjoy immense popularity.
                        </li>
                    </ul>
                </div>
                <div className="mt-10">
                    <div className="flex w-80 sm:w-96 text-white border-white border rounded-full h-12 self-center">
                        <div className="float-left self-center pl-3">
                            <input type="email" className="bg-transparent w-48 sm:w-64" placeholder="Enter Email Address"></input>
                        </div>
                        <div className="float-right self-center">
                            <button className="contact-us px-3 py-1">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:col-span-2 md:block">
                <img src={heroImage} className="w-full">
                </img>
                {/* <div className="pt-5 hero-image w-full h-96 min-h-[520px]">
                
                </div> */}
            </div>

        </div>
    )
}

export default Hero;