"use client";
import {
    ChevronLeft,
    Forward,
    FullscreenIcon,
    PauseCircle,
    PlayCircle,
    RedoDot,
    Rewind,
    ScreenShare,
    UndoDot,
    Volume2,
    VolumeX,
} from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import React, { useEffect, useRef, useState } from "react";
import LogoImage from "@/components/Common/Logo/LogoImage";
import { twMerge } from "tailwind-merge";
import { Progress } from "@/components/ui/progress";

interface VideoControlsProps {
    isPlaying: boolean;
    onPlayPause: () => void;
    onVolumeChange: (newVolume: number) => void;
    currentTime: number;
    totalTime: number | undefined;
    onProgressChange: (newTime: number) => void;
    onSkipForward: () => void;
    onSkipBackward: () => void;
    isMuted: boolean;
    onMute: () => void;
    isFullscreen: boolean;
    onFullscreen: () => void;
    volume: number;
}

const VideoControls: React.FC<VideoControlsProps> = ({
    isPlaying,
    onMute,
    onPlayPause,
    onVolumeChange,
    currentTime,
    totalTime = 10,
    onProgressChange,
    onSkipForward,
    onSkipBackward,
    isMuted,
    onFullscreen,
    isFullscreen,
    volume,
}) => {
    const [hide, setHide] = useState(false);

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const remainingSeconds = seconds % 3600;
        const minutes = Math.floor(remainingSeconds / 60);
        const sec = remainingSeconds % 60;
        const paddedHours = hours.toString().padStart(2, "0");
        const paddedMinutes = minutes.toString().padStart(2, "0");
        const paddedSeconds = parseInt(sec.toString().padStart(2, "0"));
        return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
    };
    useEffect(() => {
        let timeRe: ReturnType<typeof setTimeout> | null = null;

        timeRe = setTimeout(() => setHide(true), 5000);
        const handleMouseMove = () => {
            setHide(false);
            if (timeRe) {
                clearTimeout(timeRe);
                timeRe = setTimeout(() => setHide(true), 5000);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("click", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (timeRe) {
                clearTimeout(timeRe);
            }
        };
    }, []);

    return (
        <div
            className={twMerge(
                hide
                    ? "hidden opacity-0 "
                    : "absolute opacity-100  bg-black bg-opacity-40 bottom-0 w-full right-0 top-0 left-0 z-10 flex items-center justify-center ",
                "transition-opacity"
            )}
        >
            <div className="h-screen absolute w-screen bg-gradient-to-t from-design-black via-transparent to-design-black" />
            <div className="relative w-full h-full">
                <div className="absolute px-[1%] w-full text-white left-0 right-0 top-4 ">
                    <div className="flex items-center gap-2">
                        <button>
                            <ChevronLeft size={30} />
                        </button>
                        <div>
                            <h2 className="font-medium leading-4 ">
                                The legends of Inoya
                            </h2>
                            <span className="text-xs text-secondary-text">
                                S 1 | E 1
                            </span>
                        </div>
                    </div>
                </div>
                <div className="absolute h-screen w-screen gap-4 flex items-center justify-center">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <button
                                    onClick={onSkipBackward}
                                    aria-label="Skip 30 seconds backward"
                                    className=" text-white size-14 active:bg-white active:bg-opacity-10 active:scale-90 transition-colors rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-5"
                                >
                                    <UndoDot size={30} className="size-10 " />
                                </button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Skip 30 seconds</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <button
                        onClick={onPlayPause}
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                        className="text-white size-18 active:bg-white active:bg-opacity-10 active:scale-90 transition-colors rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-5 "
                    >
                        {isPlaying ? (
                            <PauseCircle size={30} className="size-16" />
                        ) : (
                            <PlayCircle size={30} className="size-16" />
                        )}
                    </button>
                    <button
                        onClick={onSkipForward}
                        aria-label="Skip 30 seconds backward"
                        className=" text-white size-14 active:bg-white active:bg-opacity-10 active:scale-90 transition-colors rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-5"
                    >
                        <RedoDot size={30} className="size-10 " />
                    </button>
                </div>
                <div className="flex items-center px-[1%] gap-4 z-20 absolute w-full justify-between bottom-4 left-0 right-0">
                    <LogoImage size={15} />
                    <span className="text-white text-sm w-[60px]">
                        {formatTime(currentTime)}
                    </span>
                    <div className="w-full relative player">
                        <input
                            type="range"
                            min={0}
                            max={totalTime}
                            value={currentTime}
                            onChange={(e) =>
                                onProgressChange(Number(e.target.value))
                            }
                            className="w-full z-10 opacity-0 h-[15px] player rounded-full cursor-pointer focus:outline-none player "
                        />
                        <Progress
                            max={totalTime}
                            value={(currentTime / totalTime) * 100}
                            className="absolute w-full inset-0 h-1 top-[10px] left-2 bg-white bg-opacity-30 text-red-500 pointer-events-none z-0"
                        />
                    </div>
                    <span className="text-white w-[60px] text-sm ">
                        {formatTime(totalTime || 0)}
                    </span>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <button
                                    onClick={onMute}
                                    aria-label={
                                        isMuted ? "Unmute video" : "Mute video"
                                    }
                                    className="text-white size-8 active:bg-white active:bg-opacity-10 active:scale-90 transition-colors rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-5 z-20"
                                >
                                    {isMuted ? (
                                        <VolumeX className="size-4 " />
                                    ) : (
                                        <Volume2 className="size-4 " />
                                    )}
                                </button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-transparent relative border-none p-0 shadow-none overflow-visible h-[40px]">
                                <input
                                    type="range"
                                    className="opacity-0 rotate-[270deg] w-[60px] cursor-pointer"
                                    onChange={(e) =>
                                        onVolumeChange(Number(e.target.value))
                                    }
                                    value={volume}
                                    max={1}
                                    step="any"
                                    min={0}
                                />
                                <Progress
                                    max={1}
                                    value={volume * 100}
                                    className="absolute  inset-0  rotate-[270deg] top-2 w-[60px] h-1  bg-white bg-opacity-30 pointer-events-none z-0"
                                />
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <button
                        onClick={onFullscreen}
                        aria-label={
                            isFullscreen
                                ? "Exit fullscreen"
                                : "Enter fullscreen"
                        }
                        className="text-white size-8 active:bg-white active:bg-opacity-10 active:scale-90 transition-colors rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-5"
                    >
                        {isFullscreen ? (
                            <FullscreenIcon className="size-4 " />
                        ) : (
                            <ScreenShare className="size-4 " />
                        )}
                    </button>
                </div>

                {/* 
            <button
                onClick={onFullscreen}
                aria-label={
                    isFullscreen ? "Exit fullscreen" : "Enter fullscreen"
                }
                className="w-8 h-8 rounded-full bg-transparent text-gray-400 hover:bg-gray-200 focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
                <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-4 h-4 fill-current"
                >
                    {isFullscreen ? (
                        <path d="M5 19h14v-4H5v4zm9-11H5V5h9v4z" />
                    ) : (
                        <path d="M7 14h10v8H7v-8zm14-11V5l-7 7-7-7v6H5v14h14v-14z" />
                    )}
                </svg>
            </button>
            <div className="relative w-full">
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.1}
                    value={volume}
                    onChange={(e) => onVolumeChange(Number(e.target.value))}
                    className="w-full bg-gray-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                />
                <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                    {Math.round(volume * 100)}%
                </span>
            </div> */}
            </div>
        </div>
    );
};

export default VideoControls;
