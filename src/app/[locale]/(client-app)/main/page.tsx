import LogoImage from "@/components/Common/Logo/LogoImage";
import UserProfileSelection from "@/components/MainApp/UserUI/UserProfileSelection";
import { static_internal_text } from "@/static/static_internal_text";
import React from "react";

export default function page() {
    const stt = static_internal_text.en;
    return (
        <div className="h-screen w-screen flex items-center justify-center ">
            <div className="flex flex-col items-center justify-center gap-2 ">
                <LogoImage />
                <h2 className="text-2xl font-medium text-primary-cyan">
                    {stt.welcome}
                </h2>
                <UserProfileSelection />
            </div>
        </div>
    );
}
