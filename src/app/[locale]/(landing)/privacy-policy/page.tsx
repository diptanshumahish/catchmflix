import { privacy_policy } from "@/static/privacyPolicy";
import React from "react";

export default function page() {
    return (
        <div
            className="text-secondary-text py-[15%] lg:px-[8%] px-[5%] privacy"
            dangerouslySetInnerHTML={{ __html: privacy_policy }}
        ></div>
    );
}
