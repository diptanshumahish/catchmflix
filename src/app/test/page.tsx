import MainVideoPlayer from "@/components/MainApp/Pro-Video/MainVideoPlayer";
import { Button } from "@/components/ui/button";
import { static_images } from "@/static/static_images";
import React from "react";

const source4 =
    "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";
export default function page() {
    return (
        <div>
            <MainVideoPlayer url={source4} />
        </div>
    );
}
