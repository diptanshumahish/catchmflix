import MainVideoPlayer from "@/components/MainApp/Pro-Video/MainVideoPlayer";
import React from "react";

const source4 =
    // "https://dqtojn93oycsa.cloudfront.net/assets/seasonsd7dc482e-e348-4b34-b9b3-07e15daabfce/HLS/seasons.m3u8";
    "https://dqtojn93oycsa.cloudfront.net/assets/frb8af9e7c-c10c-42c4-ab40-920afa313162/HLS/fr.m3u8";
export default function page() {
    return (
        <div>
            <MainVideoPlayer url={source4} />
        </div>
    );
}
