import React from "react";
import { faClosedCaptioning, faDollarSign, faPiggyBank, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InternationalFamily() {
    return (
        <div className="bg-internatinal-family py-20 text-center">
            <div className="text-[#AE91DF] text-xl md:text-[40px] font-bold mb-3">
                IamFuture International Family
            </div>
            <div className="text-lg md:text-xl mb-3 font-semibold">
                Innovation, Devotion and Expertise.
            </div>
            <div className="text-lg md:text-lg mb-6">
                We develop our ecosystem of products to:
            </div>
            <div className="grid justify-items-center grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-4 md:grid-rows-1 mb-4">
                <div className="w-4/6 md:w-full md:mx-0 lg:w-full lg:mx-0 md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-2  border border-white h-48 rounded-lg text-left px-8 py-8">
                    <div className="rounded-sm bg-[#AE91DF] w-7 h-7 self-center text-center mb-2">
                        <FontAwesomeIcon icon={faClosedCaptioning}/>
                    </div>
                    <div className="text-xl">
                        Minimize risks.
                    </div>
                </div>
                <div className="w-4/6 md:w-full md:mx-0 lg:w-full md:col-span-2 lg:col-span-1 border border-white h-48 rounded-lg text-left px-8 py-8">
                    <div className="rounded-sm bg-[#AE91DF] w-7 h-7 self-center text-center mb-2">
                        <FontAwesomeIcon icon={faDollarSign}/>
                    </div>
                    <div className="text-xl">
                        Create opportunity.
                    </div>
                </div>
            </div>
            <div className="grid justify-items-center grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-4 md:grid-rows-1 mb-4">
                <div className="w-4/6 md:w-full md:mx-0 lg:w-full lg:mx-0 md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-2  border border-white h-48 rounded-lg text-left px-8 py-8">
                    <div className="rounded-sm bg-[#AE91DF] w-7 h-7 self-center text-center mb-2">
                        <FontAwesomeIcon icon={faPiggyBank}/>
                    </div>
                    <div className="text-xl">
                        Increase profitability of business.
                    </div>
                </div>
                <div className="w-4/6 md:w-full md:mx-0 lg:w-full md:col-span-2 lg:col-span-1 border border-white h-48 rounded-lg text-left px-8 py-8">
                    <div className="rounded-sm bg-[#AE91DF] w-7 h-7 self-center text-center mb-2">
                        <FontAwesomeIcon icon={faChartLine}/>
                    </div>
                    <div className="text-xl">
                        Improve ratinoal economic development.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InternationalFamily;