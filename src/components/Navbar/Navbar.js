import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import logo from '../../assets/Logo.png';

function Navbar() {
    const history = useHistory();
    let pathname = window.location.pathname;

    useEffect(()=> {
    })

    const changeMenu = (url) => {
        history.push(`/${url}`);
    }

    return (
        <div className="bg-[#030A11] text-white h-32 flex justify-between gap-4">
            <div className="inline-block pl-4 sm:pl-16 self-center">
                <img src={logo} alt="logo" className="w-[81px] inline-block" ></img>
                <span className="hidden md:inline">IamFuture</span>
            </div>
            <div className="self-center">
                <div className="grid grid-rows-1 grid-cols-3 gap-4 ">
                    <div className="col-span-3 lg:col-span-2 gap-3 flex self-center overflow-x-auto pr-3">
                        <div className={`cursor-pointer ${pathname == '/' ? "text-[#AE91DF]" : "" }`} onClick={ () => { changeMenu('') } }>Home</div>
                        <div className={`cursor-pointer ${pathname == '/market' ? "text-[#AE91DF]" : "" }`} onClick={ () => { changeMenu('market') } }>Market</div>
                        <div className={`cursor-pointer ${pathname == '/contact' ? "text-[#AE91DF]" : "" }`} onClick={ () => { changeMenu('contact') } }>Contact</div>
                        <div className={`cursor-pointer ${pathname == '/recommend' ? "text-[#AE91DF]" : "" }`} onClick={ () => { changeMenu('recommend') } }>Recommend</div>
                        <div className={`cursor-pointer ${pathname == '/forecast' ? "text-[#AE91DF]" : "" }`} onClick={ () => { changeMenu('forecast') } }>Forecast</div>
                    </div>
                    <div className="hidden lg:block">
                        <button className="contact-us px-5 py-2" onClick={()=>{changeMenu('contact')}}>
                            Contact us &nbsp;{`->`}
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar;