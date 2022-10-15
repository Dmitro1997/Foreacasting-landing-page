import React from "react";
import { useHistory } from "react-router-dom";

function WhatToBuy() {
    const history = useHistory();

    const changeMenu = (url) => {
        history.push(`/${url}`);
    }
    return (
        <div className="bg-what-to-buy text-white flex justify-center flex-col sm:flex-row gap-4 py-3 sm:py-6 md:py-10">
            <div className="self-center w-full sm:w-3/6 text-left pl-20">
                <div className="mb-4 text-xl whitespace-nowrap sm:text-[40px] font-bold text-[#AE91DF] text-left">
                    What to buy?
                </div>
                <div className="text-black text-md sm:text-xl">
                    <b>FORECAST</b> well with <b className="text-[#2081E2]">IamFuture</b>
                </div>
                <div className="mt-4">
                    <button className="text-white px-8 py-2 text-sm md:text-md rounded-full bg-[#AE91DF]" onClick={() => {changeMenu('signup')}}>
                        SIGN UP NOW
                    </button>
                </div>
            </div>
            <div className="self-center bg-buy w-full sm:w-3/6 h-64">

            </div>
        </div>
    )
}

export default WhatToBuy;