import React from "react";
import heroImage from '../../assets/3DImages/HeroImage.png'

function Hero() {
    return (
        <div className="bg-[#030A11] grid grid-cols-5 gap-6 ">
            <div className="col-span-3 self-center pl-16">
                <div className="self-center mb-4">
                    <h1 className="hero-title font-bold text-[72px]">
                        IamFuture Crypto Trading Forecasting.
                    </h1>
                </div>
                <div className="text-white pl-6 text-lg">
                    <ul className="list-disc">
                        <li>
                            Over 21000 cryptocurrencies in existence.
                        </li>
                        <li>
                            Many are not well seen.
                        </li>
                        <li>
                            Some enjoy immense popularity.
                        </li>
                    </ul>
                </div>
                <div className="mt-10">
                    <div className="flex w-96 text-white border-white border rounded-full h-12 self-center">
                        <div className="float-left self-center pl-3">
                            <input type="email" className="bg-transparent w-64" placeholder="Enter Email Address"></input>
                        </div>
                        <div className="float-right self-center">
                            <button className="contact-us px-3 py-1">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-2">
                <div className="mt-5 hero-image w-full h-96 min-h-[520px]">
                   
                </div>
            </div>

        </div>
    )
}

export default Hero;