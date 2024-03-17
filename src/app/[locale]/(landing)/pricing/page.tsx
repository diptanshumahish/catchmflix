import BottomCards from "@/components/Landing/Home/BottomCards";
import PricingDiv from "@/components/Landing/Pricing/PricingDiv";
import PricingTop from "@/components/Landing/Pricing/PricingTop";

import React from "react";

export default function page() {
    return (
        <div>
            <PricingTop />
            <div className="pt-[10%] lg:px-[8%] px-[5%] flex items-center justify-center z-10">
                <PricingDiv />
            </div>
            <BottomCards />
        </div>
    );
}
