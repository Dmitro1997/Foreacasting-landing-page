import React from "react";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import Economizes from "../../components/Economizes/Economizes";
import Hero from "../../components/Hero/Hero";
import OurGoals from "../../components/OurGoals/OurGoals";
import Provides from "../../components/Privides/Provides";
import WhatToBuy from "../../components/WhatToBuy/WhatToBuy";
import WhereWeGetData from "../../components/WhereWeGetData/WhereWeGetData";

function Body() {
    return (
        <div>
            <Hero></Hero>
            <WhatToBuy></WhatToBuy>
            {/* <AboutCompany></AboutCompany>
            <OurGoals></OurGoals>
            <WhereWeGetData></WhereWeGetData>
            <Economizes></Economizes>
            <Provides></Provides> */}
        </div>
    )
}

export default Body;