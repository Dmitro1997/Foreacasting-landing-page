import React from "react";
import { faBook, faSearch, faQuestion, faQuestionCircle, faChartColumn, faChartLine, faEye, faChartArea } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OurGoals() {
    return (
        <div className="bg-internatinal-family py-20 text-center">
            <div className="text-[#2081E2] text-[30px] md:text-[40px] font-bold mb-4">
                Our Goals
            </div>
            <div className="flex justify-center px-10 gap-5 flex-wrap mb-5">
                <div className="p-7 rounded-lg min-w-[200px] sm:min-w-[300px] lg:min-w-[20%] max-w-[20%] border">
                    <div className="rounded-md bg-[#2081E2] w-7 h-7 self-center text-center mb-4">
                        <FontAwesomeIcon icon={faBook}/>
                    </div>
                    <div className="text-xl text-left text-black">
                        <b>Find</b> them while they are small!
                    </div>
                </div>
                <div className="p-7 rounded-lg min-w-[200px] sm:min-w-[300px] lg:min-w-[20%] max-w-[20%] border">
                    <div className="rounded-md bg-[#2081E2] w-7 h-7 self-center text-center mb-4">
                        <FontAwesomeIcon icon={faQuestionCircle}/>
                    </div>
                    <div className="text-xl text-left text-black">
                        <b>Minimize</b> risks of guessing.
                    </div>
                </div>
                <div className="p-7 rounded-lg min-w-[200px] sm:min-w-[300px] lg:min-w-[20%] max-w-[20%] border">
                    <div className="rounded-md bg-[#2081E2] w-7 h-7 self-center text-center mb-4">
                        <FontAwesomeIcon icon={faQuestion}/>
                    </div>
                    <div className="text-xl text-left text-black">
                        Avoid <b>insecurity.</b>
                    </div>
                </div>
                <div className="p-7 rounded-lg min-w-[200px] sm:min-w-[300px] lg:min-w-[20%] max-w-[20%] border">
                    <div className="rounded-md bg-[#2081E2] w-7 h-7 self-center text-center mb-4">
                        <FontAwesomeIcon icon={faSearch}/>
                    </div>
                    <div className="text-xl text-left text-black">
                        <b>Identify</b> evloving impact.
                    </div>
                </div>
            </div>
            <div className="flex justify-center px-10 gap-5 flex-wrap">
                <div className="p-7 rounded-lg min-w-[200px] sm:min-w-[300px] lg:min-w-[20%] max-w-[20%] border">
                    <div className="rounded-md bg-[#2081E2] w-7 h-7 self-center text-center mb-4">
                        <FontAwesomeIcon icon={faChartColumn}/>
                    </div>
                    <div className="text-xl text-left text-black">
                        Track the <b>trends.</b>
                    </div>
                </div>
                <div className="p-7 rounded-lg min-w-[200px] sm:min-w-[300px] lg:min-w-[20%] max-w-[20%] border">
                    <div className="rounded-md bg-[#2081E2] w-7 h-7 self-center text-center mb-4">
                        <FontAwesomeIcon icon={faChartLine}/>
                    </div>
                    <div className="text-xl text-left text-black">
                        Track the <b>rise.</b>
                    </div>
                </div>
                <div className="p-7 rounded-lg min-w-[200px] sm:min-w-[300px] lg:min-w-[20%] max-w-[20%] border">
                    <div className="rounded-md bg-[#2081E2] w-7 h-7 self-center text-center mb-4">
                        <FontAwesomeIcon icon={faEye}/>
                    </div>
                    <div className="text-xl text-left text-black">
                        <b>Foresee</b> bullish trend.
                    </div>
                </div>
                <div className="p-7 rounded-lg min-w-[200px] sm:min-w-[300px] lg:min-w-[20%] max-w-[20%] border">
                    <div className="rounded-md bg-[#2081E2] w-7 h-7 self-center text-center mb-4">
                        <FontAwesomeIcon icon={faChartArea}/>
                    </div>
                    <div className="text-xl text-left text-black">
                        <b>Forcast</b> positive development.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurGoals;