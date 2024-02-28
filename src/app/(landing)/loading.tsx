import { LucideLoader2 } from "lucide-react";
import React from "react";

export default function loading() {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-4">
            <LucideLoader2 className="lg:size-10 text-primary-cyan animate-spin" />
            <h3 className="text-white text-2xl">Loading your page</h3>
        </div>
    );
}
