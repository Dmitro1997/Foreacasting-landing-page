import React from "react";
import { faClosedCaptioning, faDollarSign, faPiggyBank, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InternationalFamily() {
    return (
        <div className="bg-internatinal-family pt-10 pb-8 text-center">
            <div className="text-[#2081E2] text-[40px] font-bold mb-3">
                IamFuture International Family
            </div>
            <div className="text-xl mb-3 font-semibold">
                Innovation, Devotion and Expertise.
            </div>
            <div className="text-lg mb-3">
                We develop our ecosystem of products to:
            </div>
            <div className="grid grid-cols-4 gap-4 grid-rows-1 mb-4">
                <div className="col-start-2 border border-white h-48 rounded-lg text-left px-8 py-8">
                    <div className="rounded-sm bg-[#2081E2] w-7 h-7 self-center text-center mb-2">
                        <FontAwesomeIcon icon={faClosedCaptioning}/>
                    </div>
                    <div className="text-xl">
                        Minimize risks.
                    </div>
                </div>
                <div className="border border-white h-48 rounded-lg text-left px-8 py-8">
                    <div className="rounded-sm bg-[#2081E2] w-7 h-7 self-center text-center mb-2">
                        <FontAwesomeIcon icon={faDollarSign}/>
                    </div>
                    <div className="text-xl">
                        Create opportunity.
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 grid-rows-1">
                <div className="col-start-2 border border-white h-48 rounded-lg text-left px-8 py-8">
                    <div className="rounded-sm bg-[#2081E2] w-7 h-7 self-center text-center mb-2">
                        <FontAwesomeIcon icon={faPiggyBank}/>
                    </div>
                    <div className="text-xl">
                        Increase profitability of business.
                    </div>
                </div>
                <div className="border border-white h-48 rounded-lg text-left px-8 py-8">
                    <div className="rounded-sm bg-[#2081E2] w-7 h-7 self-center text-center mb-2">
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