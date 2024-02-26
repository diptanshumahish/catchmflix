import { privacy_policy } from "@/static/privacyPolicy";
import React from "react";

export default function page() {
    return (
        <div
            className="text-secondary-text py-[10%] px-[8%] privacy"
            dangerouslySetInnerHTML={{ __html: privacy_policy }}
        ></div>
    );
}
