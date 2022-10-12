import React from "react";
import { faWarning, faUserFriends, faChartColumn, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Provides() {
    return (
        <div className="bg-internatinal-family py-20">
            <div className="grid grid-cols-5 mt-8">
                <div className="col-span-3 pl-48">
                    <div className="mb-3 col-span-3 pl-20 text-[38px] text-[#2081E2] text-center font-bold">
                        IamFuture provides you more mobility and flexibility
                    </div>
                    <div className="font-semibold text-center mb-5 text-lg">
                        Opportunities:
                    </div>
                    <div className="text-lg">
                        <div className="w-full h-24 px-10 mb-5 bg-grey-card rounded-lg border self-center flex">
                            <div className="self-center pr-5">
                                <div className="rounded bg-[#2081E2] w-8 h-8 self-center text-center">
                                    <FontAwesomeIcon icon={faWarning}/>
                                </div>
                            </div>
                            <div className="self-center">
                                Possibility to set alerts by user.
                            </div>
                        </div>
                        <div className="w-full h-24 px-10 mb-5 bg-grey-card rounded-lg border self-center flex">
                            <div className="self-center pr-5">
                                <div className="rounded bg-[#2081E2] w-8 h-8 self-center text-center">
                                    <FontAwesomeIcon icon={faUserFriends}/>
                                </div>
                            </div>
                            <div className="self-center">
                                <b>Principle:</b> one source is never enough.<br/>
                                Always search alternative source.
                            </div>
                        </div>
                        <div className="w-full h-24 px-10 mb-5 bg-grey-card rounded-lg border self-center flex">
                            <div className="self-center pr-5">
                                <div className="rounded bg-[#2081E2] w-8 h-8 self-center text-center">
                                    <FontAwesomeIcon icon={faChartColumn}/>
                                </div>
                            </div>
                            <div className="self-center">
                                Always provides good opportunity to invest.
                            </div>
                        </div>
                        <div className="w-full h-24 px-10 mb-5 bg-grey-card rounded-lg border self-center flex">
                            <div className="self-center pr-5">
                                <div className="rounded bg-[#2081E2] w-8 h-8 self-center text-center">
                                    <FontAwesomeIcon icon={faChartLine}/>
                                </div>
                            </div>
                            <div className="self-center">
                                Create stability.
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-span-2 bg-provides-img w-full h-96 mt-32">
                    
                </div>
            </div>
        </div>
    )
}

export default Provides;