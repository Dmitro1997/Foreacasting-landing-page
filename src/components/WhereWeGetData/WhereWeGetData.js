import React from "react";
import coinDeskLogo from '../../assets/Logo/coindesk.svg'
import financialTimes from '../../assets/Logo/financialTimes.svg'
import cryptopolitan from '../../assets/Logo/cryptopolitan.svg'
import dappradar from '../../assets/Logo/dappradar.svg'
import coinpedia from '../../assets/Logo/coinpedia.svg'
import utoday from '../../assets/Logo/utoday.svg'
import bitcoinmagazine from '../../assets/Logo/bitcoinmagazine.svg'
import forbes from '../../assets/Logo/forbes.svg'
import newsbtc from '../../assets/Logo/newsbtc.svg'
import bitcoincom from '../../assets/Logo/bitcoincom.svg'
import cryptoslate from '../../assets/Logo/cryptoslate.svg'
import beincrypto from '../../assets/Logo/beincrypto.svg'
import cointelegraph from '../../assets/Logo/cointelegraph.svg'
import bitcoin from '../../assets/Logo/bitcoin.svg'



function WhereWeGetData() {
    return (
        <div className="bg-[#030A11] text-center py-20 px-10">
            <div className="text-[#AE91DF] text-[40px] font-bold pb-10">
                Where we get data
            </div>
            <div className="text-white pb-5">
                Undoubtedly, the pool of crypto media is large.
                <br/>
                <b>Main Public Media</b> sources:
            </div>
            <div className="flex justify-center flex-wrap gap-6">
                <div className="bg-grey-card rounded-lg text-white flex px-10 py-5 min-w-[20%] max-w-[20%]">
                    <div className="bg-[#AE91DF] w-12 h-12 rounded-lg pl-2 mr-4 flex">
                        <img src={coinDeskLogo} className="w-8 h-8 self-center"></img>
                    </div>
                    <div className="self-center text-left">
                        Coindesk
                    </div>
                </div>
                <div className="bg-grey-card rounded-lg text-white flex px-10 py-5 min-w-[20%] max-w-[20%]">
                    <div className="bg-[#AE91DF] w-12 h-12 rounded-lg pl-2 mr-4 flex">
                        <img src={financialTimes} className="w-8 h-8 self-center"></img>
                    </div>
                    <div className="self-center text-left">
                        Financial
                        <br/>
                        Times
                    </div>
                </div>
                <div className="bg-grey-card rounded-lg text-white flex px-10 py-5 min-w-[20%] max-w-[20%]">
                    <div className="bg-[#AE91DF] w-12 h-12 rounded-lg pl-2 mr-4 flex">
                        <img src={cryptopolitan} className="w-8 h-8 self-center"></img>
                    </div>
                    <div className="self-center text-left">
                        Cryptopolitan
                    </div>
                </div>
                <div className="bg-grey-card rounded-lg text-white flex px-10 py-5 min-w-[20%] max-w-[20%]">
                    <div className="bg-[#AE91DF] w-12 h-12 rounded-lg pl-2 mr-4 flex">
                        <img src={dappradar} className="w-8 h-8 self-center"></img>
                    </div>
                    <div className="self-center text-left">
                        Dappradar
                    </div>
                </div>
                <div className="bg-grey-card rounded-lg text-white flex px-10 py-5 min-w-[20%] max-w-[20%]">
                    <div className="bg-[#AE91DF] w-12 h-12 rounded-lg pl-2 mr-4 flex">
                        <img src={coinpedia} className="w-8 h-8 self-center"></img>
                    </div>
                    <div className="self-center text-left">
                        Coinpedia
                    </div>
                </div>
                <div className="bg-grey-card rounded-lg text-white flex px-10 py-5 min-w-[20%] max-w-[20%]">
                    <div className="bg-[#AE91DF] w-12 h-12 rounded-lg pl-2 mr-4 flex">
                        <img src={utoday} className="w-8 h-8 self-center"></img>
                    </div>
                    <div className="self-center text-left">
                        U.Today
                    </div>
                </div>
                <div className="bg-grey-card rounded-lg text-white flex px-10 py-5 min-w-[20%] max-w-[20%]">
                    <div className="bg-[#AE91DF] w-12 h-12 rounded-lg pl-2 mr-4 flex">
                        <img src={bitcoinmagazine} className="w-8 h-8 self-center"></img>
                    </div>
                    <div className="self-center text-left">
                        Bitcoin
                        <br/>
                        Magazine
                    </div>
                </div>
                <div className="bg-grey-card rounded-lg text-white flex px-10 py-5 min-w-[20%] max-w-[20%]">
                    <div className="bg-[#AE91DF] w-12 h-12 rounded-lg pl-2 mr-4 flex">
                        <img src={forbes} className="w-8 h-8 self-center"></img>
                    </div>
                    <div className="self-center text-left">
                        Forbes
                    </div>
                </div>
                <div className="bg-grey-card rounded-lg text-white flex px-10 py-5 min-w-[20%] max-w-[20%]">
                    <div className="bg-[#AE91DF] w-12 h-12 rounded-lg pl-2 mr-4 flex">
                        <img src={newsbtc} className="w-8 h-8 self-center"></img>
                    </div>
                    <div className="self-center text-left">
                        NewsBTC
                    </div>
                </div>
                <div className="bg-grey-card rounded-lg text-white flex px-10 py-5 min-w-[20%] max-w-[20%]">
                    <div className="bg-[#AE91DF] w-12 h-12 rounded-lg pl-2 mr-4 flex">
                        <img src={bitcoincom} className="w-8 h-8 self-center"></img>
                    </div>
                    <div className="self-center text-left">
                        Bitcoin.com
                    </div>
                </div>
                <div className="bg-grey-card rounded-lg text-white flex px-10 py-5 min-w-[20%] max-w-[20%]">
                    <div className="bg-[#AE91DF] w-12 h-12 rounded-lg pl-2 mr-4 flex">
                        <img src={cryptoslate} className="w-8 h-8 self-center"></img>
                    </div>
                    <div className="self-center text-left">
                        Cryptoslate
                    </div>
                </div>
                <div className="bg-grey-card rounded-lg text-white flex px-10 py-5 min-w-[20%] max-w-[20%]">
                    <div className="bg-[#AE91DF] w-12 h-12 rounded-lg pl-2 mr-4 flex">
                        <img src={beincrypto} className="w-8 h-8 self-center"></img>
                    </div>
                    <div className="self-center text-left">
                        BeinCrypto
                    </div>
                </div>
                <div className="bg-grey-card rounded-lg text-white flex px-10 py-5 min-w-[20%] max-w-[20%]">
                    <div className="bg-[#AE91DF] w-12 h-12 rounded-lg pl-2 mr-4 flex">
                        <img src={cointelegraph} className="w-8 h-8 self-center"></img>
                    </div>
                    <div className="self-center text-left">
                        Cointelegraph
                    </div>
                </div>
                <div className="bg-grey-card rounded-lg text-white flex px-10 py-5 min-w-[50%] max-w-[50%]">
                    <div className="bg-[#AE91DF] w-12 h-12 rounded-lg pl-2 mr-4 flex">
                        <img src={bitcoin} className="w-8 h-8 self-center"></img>
                    </div>
                    <div className="self-center text-left">
                        Native tokens platforms, Discord servers, Uplift Dao, Github, Reddit,
                        <br/>
                        Various Launchpads, cryptoplatforms updates, press releses.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhereWeGetData;