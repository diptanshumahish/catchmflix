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
import Hls from "hls.js";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { static_images } from "@/static/static_images";

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
    quality_values: string[];
    selectQual: (data: number) => void;
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
    selectQual,
    quality_values,
}) => {
    const [hide, setHide] = useState(false);
    const [quality, setQuality] = useState(-1);

    function checkQuality(): string {
        switch (quality) {
            case -1:
                return "Auto";
            case 0:
                return "SD";
            case 1:
                return "SD+";
            case 2:
                return "HD";
            case 3:
                return "HD+";
            case 4:
                return "2K";

            default:
                return "Auto";
        }
    }

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

        timeRe = setTimeout(() => setHide(true), 3000);
        const handleMouseMove = () => {
            setHide(false);
            if (timeRe) {
                clearTimeout(timeRe);
                timeRe = setTimeout(() => setHide(true), 3000);
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
            style={{ zIndex: 100 }}
            className={twMerge(
                hide
                    ? "hidden opacity-0 "
                    : "absolute opacity-100  bg-black bg-opacity-40 bottom-0 w-full right-0 top-0 left-0  flex items-center justify-center ",
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
                                    aria-label="rewind 10 seconds"
                                    className=" text-white size-14 active:bg-white active:bg-opacity-10 active:scale-90 transition-colors rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-5"
                                >
                                    <img
                                        width="40"
                                        height="40"
                                        src="https://img.icons8.com/ios-glyphs/100/replay-10.png"
                                        alt="replay-10"
                                        className="invert"
                                    />
                                </button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-white bg-opacity-5 border-none text-white">
                                <p>Rewind 10 seconds</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <button
                        onClick={onPlayPause}
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                        className="text-white size-18 active:bg-white active:bg-opacity-10 active:scale-90 transition-colors rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-5 "
                    >
                        {isPlaying ? (
                            <img
                                width="50"
                                height="50"
                                src="https://img.icons8.com/ios-filled/50/circled-pause.png"
                                alt="circled-pause"
                                className="invert"
                            />
                        ) : (
                            <img
                                width="50"
                                height="50"
                                src="https://img.icons8.com/ios-filled/50/circled-play.png"
                                className="invert"
                            />
                        )}
                    </button>
                    <button
                        onClick={onSkipForward}
                        aria-label="Skip 30 seconds backward"
                        className=" text-white size-14 active:bg-white active:bg-opacity-10 active:scale-90 transition-colors rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-5"
                    >
                        <img
                            width="40"
                            height="40"
                            src="https://img.icons8.com/ios-glyphs/60/forward-10.png"
                            alt="forward-10"
                            className="invert"
                        />
                    </button>
                </div>
                <div className="flex items-center px-[1%] gap-4 z-50 absolute w-full justify-between bottom-4 left-0 right-0">
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
                                    defaultValue={0}
                                    max={1}
                                    value={volume * 100}
                                    className="absolute  inset-0  rotate-[270deg] top-2 w-[60px] h-1  bg-white bg-opacity-30 pointer-events-none z-0"
                                />
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-white text-sm hover:text-primary-cyan">
                            {checkQuality()}
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-white bg-opacity-5 text-white">
                            {quality_values.map((ele, idx) => (
                                <DropdownMenuItem
                                    className="cursor-pointer"
                                    onClick={() => {
                                        selectQual(idx);
                                        setQuality(idx);
                                    }}
                                    key={idx}
                                >
                                    {ele}
                                </DropdownMenuItem>
                            ))}
                            <DropdownMenuItem
                                onClick={() => {
                                    selectQual(-1);
                                    setQuality(-1);
                                }}
                            >
                                Auto
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

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
            </div>
        </div>
    );
};

export default VideoControls;
