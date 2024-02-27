import MainVideoPlayer from "@/components/MainApp/Pro-Video/MainVideoPlayer";
import { Button } from "@/components/ui/button";
import { static_images } from "@/static/static_images";
import React from "react";

const source4 =
    // "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8";
    // "https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8";
    "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8";
export default function page() {
    return (
        <div>
            <MainVideoPlayer url={source4} />
        </div>
    );
}
