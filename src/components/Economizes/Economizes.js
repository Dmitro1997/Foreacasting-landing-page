import React from "react";
import { faBook, faBrain, faMobileAndroid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Economizes() {
    return (
        <div className="bg-[#030A11] text-center py-20 px-5">
            <div className="text-[#AE91DF] text-[40px] font-bold pb-5">
                IamFuture economizes
            </div>
            <div className="flex justify-center gap-6">
                <div className="bg-grey-card p-7 rounded-lg min-w-[20%]">
                    <div className="rounded-md bg-[#AE91DF] w-7 h-7 self-center text-center mb-4">
                        <FontAwesomeIcon icon={faBook}/>
                    </div>
                    <div className="text-xl text-left text-white">
                        Your reading.
                    </div>
                </div>
                <div className="bg-grey-card p-7 rounded-lg min-w-[20%]">
                    <div className="rounded-md bg-[#AE91DF] w-7 h-7 self-center text-center mb-4">
                        <FontAwesomeIcon icon={faBrain}/>
                    </div>
                    <div className="text-xl text-left text-white">
                        Analyzing effort.
                    </div>
                </div>
                <div className="bg-grey-card p-7 rounded-lg min-w-[20%]">
                    <div className="rounded-md bg-[#AE91DF] w-7 h-7 self-center text-center mb-4">
                        <FontAwesomeIcon icon={faMobileAndroid}/>
                    </div>
                    <div className="text-xl text-left text-white">
                        Time online.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Economizes;