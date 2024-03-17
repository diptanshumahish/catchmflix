import SettingsWrapper from "@/components/MainApp/Settings/SettingsWrapper";
import React from "react";

export default function page() {
    return (
        <div className="py-[5%] lg:px-[8%] px-[5%] text-white flex flex-col gap-3">
            <h2 className="lg:text-4xl text-2xl">Settings</h2>
            <SettingsWrapper />
        </div>
    );
}
