import OnboardTop from "@/components/Landing/Onboard/OnboardTop";
import OnboardWrapper from "@/components/Landing/Onboard/OnboardWrapper";

import React from "react";

export default function page() {
    return (
        <div>
            <OnboardTop />
            <div className="flex items-center justify-center">
                <OnboardWrapper />
            </div>
        </div>
    );
}
