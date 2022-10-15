import React from "react";
import signInImg from '../../assets/3DImages/signin.png'
import { useHistory } from "react-router-dom";
import gmailLogo from '../../assets/Logo/logos_google-gmail.png';
import facebookLogo from '../../assets/Logo/fa_facebook.png';
import twitterLogo from '../../assets/Logo/logos_twitter.png';

function SignIn() {
    const history = useHistory();

    const changeMenu = (url) => {
        history.push(`/${url}`);
    }
    return (
        <div className="bg-[#030A11] px-[15%] py-[5%]">
            <div className="rounded-lg signin-bg flex w-full max-h-[550px]">
                <div className="hidden md:w-[50%] md:block rounded-r-lg">
                    <img src={signInImg} className="md:w-full h-full" ></img>
                </div>
                <div className="w-full rounded-lg md:rounded-l-none md:w-[50%] py-10 px-5 md:py-16 md:px-10 flex flex-col text-center gap-5">
                    <div className="text-[#AE91DF] font-bold text-xl md:text-[40px] text-center md:mb-4">
                        Sign In
                    </div>
                    <div className="flex flex-col relative py-5 gap-6 items-center">
                        <input type="text" placeholder="Name" className="rounded-md w-[90%] h-10 px-3 focus:outline-white"></input>
                        <input type="email" placeholder="Email Address" className="rounded-md w-[90%] h-10 px-3 focus:outline-white"></input>
                    </div>
                    <div className="mb-5">
                        <button className="bg-[#AE91DF] px-8 md:px-10 py-1 rounded-full text-white text-sm md:text-lg">SIGN IN</button>
                    </div>
                    <div className="flex mb-4 justify-between">
                        <div className="cursor-pointer font-bold text-[#AE91DF]" onClick={()=>{changeMenu('signin')}}>Forgot Password?</div>
                        <div>
                            No Account? <span className="cursor-pointer font-bold text-[#AE91DF]" onClick={()=>{changeMenu('signup')}}>Sign Up</span>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[30%] self-center ">
                            <hr className="border-solid border-black"></hr>
                        </div>
                        <div className="min-w-[160px] w-[40%]">
                            Or <b>Sign In</b> using
                        </div>
                        <div className="w-[30%] self-center">
                            <hr className="border-solid border-black"></hr>
                        </div>
                    </div>
                    <div className="flex justify-center gap-5">
                        <img src={gmailLogo} className=""></img>
                        <img src={facebookLogo} className=""></img>
                        <img src={twitterLogo} className=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;