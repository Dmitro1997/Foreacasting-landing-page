import React from "react";

function Contact() {
    return(
        <div className="bg-[#030A11] px-[15%] py-[5%]">
            <div className="rounded-lg flex w-full">
                <div className="w-full rounded-lg md:rounded-r-none md:w-[50%] py-10 px-5 md:py-16 md:px-10 flex flex-col bg-internatinal-family text-center">
                    <div className="text-black font-bold text-xl md:text-[40px] text-center">
                        Contact Us
                    </div>
                    <div className="flex flex-col relative py-5 gap-6 items-center">
                        <input type="text" placeholder="Name" className="rounded-md w-[90%] h-10 px-3"></input>
                        <input type="email" placeholder="Email Address" className="rounded-md w-[90%] h-10 px-3"></input>
                        <textarea rows="4" className="w-[90%] rounded-md px-3 py-3" placeholder="Message"></textarea>  
                    </div>
                    <div>
                        <button className="bg-[#030A11] px-4 py-1 rounded-full text-white text-sm md:text-lg">Send Message</button>
                    </div>
                </div>
                <div className="hidden md:w-[50%] bg-contact-img md:block rounded-r-lg">
                </div>
            </div>
        </div>
    )
}

export default Contact;