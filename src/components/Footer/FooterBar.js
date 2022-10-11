import React from "react";
import logo from '../../assets/Logo.png';

import { faEnvelope, faPhone, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FooterBar() {
    return(
        <>
            <div className="bg-[#030A11] text-white h-60 grid grid-cols-7 gap-6">
                <div className="col-start-2 self-center">
                    <img src={logo} alt="logo" className="w-[81px] h-[78px] inline-block" ></img>
                    <div>
                        Product of IamFuture  
                    </div>
                    <div>
                        www.iamfuture.life
                    </div>
                    <div>
                        Monaco
                    </div>
                </div>
                <div className="self-center">
                    <div className="text-lg mb-3">
                        Contact Us
                    </div>
                    <div className="flex mb-2">
                        <div className="self-center pr-2">
                            <FontAwesomeIcon icon={faMapLocation} />
                        </div>
                        <div>
                            <div>
                                Monaco 98000
                            </div>
                            <div>
                                Boulevard d'Italie 74
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-2">
                        <div className="self-center pr-2">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div>
                            future@iamfuture.biz
                        </div>
                    </div>
                    <div className="flex">
                        <div className="self-center pr-2">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div>
                            +316 251 60619
                        </div>
                    </div>
                </div>
                <div className="self-center">
                    <div className="mb-1">
                        Home
                    </div>
                    <div className="mb-1">
                        Market
                    </div>
                    <div className="mb-1">
                        Contact
                    </div>
                    <div className="mb-1">
                        Recommend
                    </div>
                    <div className="mb-1">
                        Forcast
                    </div>
                </div>
                <div className="col-span-2 self-center">
                    <div className="text-left mb-2">
                        Send me a message if you have inquiries about my tutorials or possible work. 
                    </div>
                    <div className="mx-10">
                        <div>
                            <input type="email" className="h-7 w-full mb-2" placeholder="Email"/>
                        </div>
                        <div>
                            <button className="rounded-1 subscribe-button w-full h-7" >Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#030A11] text-white h-10 grid grid-cols-7 gap-6">
                <div className="col-start-2 self-center">
                    <p className="text-[12px] whitespace-nowrap">
                        @2022 All Rights Reserved
                    </p>
                </div>
                <div className="col-start-5 col-span-2">
                    <div className="grid grid-cols-3 gap-6 text-[12px]">
                        <div>
                            Privacy Policy
                        </div>
                        <div className="text-center">
                            Terms of Use
                        </div>
                        <div className="text-right">
                            Legal
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterBar;