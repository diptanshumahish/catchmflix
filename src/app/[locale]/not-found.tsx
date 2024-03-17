import NewLink from "@/components/Common/Navigation/NewLink";
import React from "react";

export default function Notfound() {
    return (
        <div className="h-screen w-screen flex flex-col text-white items-center justify-center gap-3">
            <span>Page Not found, go back</span>
            <NewLink
                link="/"
                content="Back"
                className="bg-white text-black p-2 py-1 rounded-sm"
            />
        </div>
    );
}
