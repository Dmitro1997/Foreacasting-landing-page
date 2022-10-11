import React from "react";
import logo from '../../assets/Logo.png';

function Navbar() {
    return (
        <div className="bg-[#030A11] text-white h-32 grid grid-rows-1 grid-cols-2 gap-4">
            <div className="inline-block pl-6 self-center">
                <img src={logo} alt="logo" className="w-[81px] h-[78px] inline-block" ></img>
                <span>IamFuture</span>
            </div>
            <div className="self-center">
                <div className="grid grid-rows-1 grid-cols-3 gap-4">
                    <div className="col-span-2 gap-3 flex self-center">
                        <div>Home</div>
                        <div>Market</div>
                        <div>Contact</div>
                        <div>Recommend</div>
                        <div>Forecast</div>
                    </div>
                    <div>
                        <button className="contact-us px-5 py-2">
                            Contact us &nbsp;{`->`}
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar;