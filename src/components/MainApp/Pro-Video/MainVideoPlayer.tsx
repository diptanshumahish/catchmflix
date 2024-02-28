"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import ReactHlsPlayer from "./ReactHlsPlayer";
import {
    PlayCircle,
    PauseCircle,
    Fullscreen,
    Settings,
    Menu,
} from "lucide-react";
import VideoControls from "../Video/VideoControls";
import Hls from "hls.js";
import dynamic from "next/dynamic";

interface Props {
    url: string;
}

const MainVideoPlayer = ({ url }: Props) => {
    const VIDEO_REF = useRef<HTMLVideoElement>(null);
    const Container_ref = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [full, setFull] = useState(false);
    const [qualityVal, setQualityVal] = useState<string[]>([]);
    // const [hls, setHls] = useState<Hls>();
    const [selected_quality, setSelectedQuality] = useState(-1);

    const handlePlayPause = () => {
        if (isPlaying) {
            VIDEO_REF.current!.pause();
        } else {
            VIDEO_REF.current!.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (newVolume: number) => {
        VIDEO_REF.current!.volume = newVolume;
        setVolume(newVolume);
    };

    const handleProgressChange = (newTime: number) => {
        VIDEO_REF.current!.currentTime = newTime;
    };

    const handleSkipForward = () => {
        VIDEO_REF.current!.currentTime += 30;
    };

    const handleSkipBackward = () => {
        VIDEO_REF.current!.currentTime -= 30;
    };

    const videoMetadataLoaded = () => {
        setCurrentTime(VIDEO_REF.current!.duration);
    };

    const handleMute = () => {
        const videoElement = VIDEO_REF.current!;

        if (videoElement.muted) {
            videoElement.muted = false;
            videoElement.volume = volume;
        } else {
            setVolume(videoElement.volume);
            videoElement.muted = true;
        }
    };
    useEffect(() => {
        if (typeof document !== "undefined" && VIDEO_REF.current) {
            setVolume(VIDEO_REF.current.volume);
            setFull(document.fullscreenElement !== null ? true : false);
        }
    }, [VIDEO_REF.current]);

    const toggleFullScreen = () => {
        if (typeof document !== "undefined" && document.fullscreenElement) {
            document.exitFullscreen();
        } else if (Container_ref.current) {
            Container_ref.current.requestFullscreen();
        }
    };
    const dur = VIDEO_REF.current?.duration ?? 0;

    return (
        <div className="h-screen w-screen relative" ref={Container_ref}>
            <ReactHlsPlayer
                // hls={(data) => {
                //     setHls(data);
                // }}
                onLoadedMetadata={videoMetadataLoaded}
                onTimeUpdate={() =>
                    setCurrentTime(
                        parseInt(
                            VIDEO_REF.current!.currentTime.toString() ?? "0"
                        )
                    )
                }
                muted={VIDEO_REF.current?.muted ?? false}
                src={url}
                playerRef={VIDEO_REF}
                qualityValues={(val) => {
                    setQualityVal(val);
                }}
                quality={selected_quality}
            />

            <VideoControls
                selectQual={(data) => {
                    setSelectedQuality(data);
                }}
                onMute={handleMute}
                isMuted={VIDEO_REF.current?.muted ?? false}
                isPlaying={isPlaying}
                onPlayPause={handlePlayPause}
                onVolumeChange={handleVolumeChange}
                currentTime={currentTime}
                totalTime={dur}
                onProgressChange={handleProgressChange}
                onSkipForward={handleSkipForward}
                onSkipBackward={handleSkipBackward}
                isFullscreen={full}
                onFullscreen={toggleFullScreen}
                volume={volume}
                quality_values={qualityVal}
            />
        </div>
    );
};

export default dynamic(() => Promise.resolve(MainVideoPlayer), { ssr: false });
