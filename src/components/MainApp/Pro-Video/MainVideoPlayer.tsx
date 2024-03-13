"use client";
import React, { Key, useEffect, useRef, useState } from "react";
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
import { toast } from "sonner";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu";

interface Props {
    url: string;
}

export interface ChildProps {
    qualityChange: (val: number) => void;
}

const MainVideoPlayer = ({ url }: Props) => {
    const compRef = useRef<ChildProps>(null);
    const VIDEO_REF = useRef<HTMLVideoElement>(null);
    const Container_ref = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [full, setFull] = useState(false);
    const [qualityVal, setQualityVal] = useState<string[]>([]);
    const [selected_quality, setSelectedQuality] = useState(-1);

    const handlePlayPause = () => {
        if (VIDEO_REF.current) {
            if (isPlaying) {
                VIDEO_REF.current.pause();
            } else {
                VIDEO_REF.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVolumeChange = (newVolume: number) => {
        VIDEO_REF.current!.volume = newVolume;
        setVolume(newVolume);
    };

    const handleProgressChange = (newTime: number) => {
        VIDEO_REF.current!.currentTime = newTime;
    };

    const handleSkipForward = () => {
        VIDEO_REF.current!.currentTime += 10;
    };

    const handleSkipBackward = () => {
        VIDEO_REF.current!.currentTime -= 10;
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
    const changeQuality = (val: number) => {
        compRef.current?.qualityChange(val);
    };

    const handleKeys = (e: KeyboardEvent) => {
        switch (e.key) {
            case " ":
                handlePlayPause();
                break;
            case "ArrowRight":
                handleSkipForward();
                break;
            case "ArrowLeft":
                handleSkipBackward();
                break;
            case "f":
                toggleFullScreen();
                break;
            case "m":
                handleMute();
                break;
            default:
                break;
        }
    };

    const handleDoubleClick = () => {
        toggleFullScreen();
    };
    const disableRightClick = (e: MouseEvent) => {
        e.preventDefault();
    };
    useEffect(() => {
        if (typeof document !== "undefined" && VIDEO_REF.current) {
            setVolume(VIDEO_REF.current.volume);
            setFull(document.fullscreenElement !== null ? true : false);
            document.addEventListener("keydown", handleKeys, true);
            document.addEventListener("dblclick", handleDoubleClick, true);
            document.addEventListener("contextmenu", disableRightClick, true);
        }
        return () => {
            document.removeEventListener("keydown", handleKeys);
            document.removeEventListener("dblclick", handleDoubleClick);
        };
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
                ref={compRef}
            />

            <VideoControls
                selectQual={(data) => {
                    changeQuality(data);
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
