import React from "react";
import buy from '../../assets/3DImages/Buy.png'

function WhatToBuy() {
    return (
        <div className="bg-[#030A11] text-white grid grid-rows-1 grid-cols-3 gap-4 py-10">
            <div className="self-center bg-gold-bricks w-full h-64">
            </div>
            <div className="self-center text-center">
                <div className="mb-4 text-[40px] font-bold text-[#AE91DF]">
                    What to buy?
                </div>
                <div className="text-xl">
                    <b>FORECAST</b> well with <b>IamFuture</b>
                </div>
            </div>
            <div className="self-center bg-buy w-full h-64">

            </div>
        </div>
    )
}

export default WhatToBuy;