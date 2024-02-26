import VideoPlayer from "@/components/MainApp/Video/VideoPlayer";
import { static_images } from "@/static/static_images";
import React, { Suspense } from "react";

export default function page() {
    return (
        <div>
            <VideoPlayer
                videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                poster={static_images.dummyBackgrounds[2]}
            />
        </div>
    );
}
