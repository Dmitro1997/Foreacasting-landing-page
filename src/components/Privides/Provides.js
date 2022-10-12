import React from "react";
import { faWarning, faUserFriends, faChartColumn, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CoinBox from '../../assets/3DImages/CoinBox.png';

function Provides() {
    return (
        <div className="bg-internatinal-family py-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 mt-8">
                <div className="lg:col-span-3 ">
                    <div className="mb-3 lg:col-span-3 lg:pl-20 text-[30px] lg:text-[40px] text-[#2081E2] text-center font-bold">
                        IamFuture provides you more mobility and flexibility
                    </div>
                    <div className="font-semibold text-center mb-5 text-md md:text-lg">
                        Opportunities:
                    </div>
                    <div className="text-md flex flex-col  md:text-lg">
                        <div className="w-5/6 h-24 px-10 mb-5 bg-grey-card rounded-lg border self-center flex">
                            <div className="self-center pr-5">
                                <div className="rounded bg-[#2081E2] w-8 h-8 self-center text-center">
                                    <FontAwesomeIcon icon={faWarning}/>
                                </div>
                            </div>
                            <div className="self-center">
                                Possibility to set alerts by user.
                            </div>
                        </div>
                        <div className="w-5/6 h-24 px-10 mb-5 bg-grey-card rounded-lg border self-center flex">
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
                        <div className="w-5/6 h-24 px-10 mb-5 bg-grey-card rounded-lg border self-center flex">
                            <div className="self-center pr-5">
                                <div className="rounded bg-[#2081E2] w-8 h-8 self-center text-center">
                                    <FontAwesomeIcon icon={faChartColumn}/>
                                </div>
                            </div>
                            <div className="self-center">
                                Always provides good opportunity to invest.
                            </div>
                        </div>
                        <div className="w-5/6 h-24 px-10 mb-5 bg-grey-card rounded-lg border self-center flex">
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
                <div className="hidden lg:col-span-2 lg:flex justify-center self-center">
                    <img src={CoinBox} className="hidden w-4/6 md:block "></img>
                </div>
            </div>
        </div>
    )
}

export default Provides;