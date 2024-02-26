"use client";
import React, { useState, useRef, useEffect } from "react";
import VideoControls from "./VideoControls";

interface VideoPlayerProps {
    videoSrc: string;
    poster: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc, poster }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [full, setFull] = useState(false);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current!.pause();
        } else {
            videoRef.current!.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (newVolume: number) => {
        videoRef.current!.volume = newVolume;
        setVolume(newVolume);
    };

    const handleProgressChange = (newTime: number) => {
        videoRef.current!.currentTime = newTime;
    };

    const handleSkipForward = () => {
        videoRef.current!.currentTime += 30;
    };

    const handleSkipBackward = () => {
        videoRef.current!.currentTime -= 30;
    };

    const videoMetadataLoaded = () => {
        setCurrentTime(videoRef.current!.duration);
    };

    const handleMute = () => {
        const videoElement = videoRef.current!;

        if (videoElement.muted) {
            videoElement.muted = false;
            videoElement.volume = volume;
        } else {
            setVolume(videoElement.volume);
            videoElement.muted = true;
        }
    };
    const dur = videoRef.current?.duration ?? 0;

    const toggleFullScreen = () => {
        if (typeof document !== "undefined" && document.fullscreenElement) {
            document.exitFullscreen();
        } else if (videoRef.current) {
            videoRef.current.requestFullscreen();
        }
    };

    // Only update volume state on client-side (browser environment)
    useEffect(() => {
        if (typeof document !== "undefined" && videoRef.current) {
            setVolume(videoRef.current.volume);
            setFull(document.fullscreenElement !== null ? true : false);
        }
    }, [videoRef.current]);

    return (
        <div className="relative">
            <video
                ref={videoRef}
                src={videoSrc}
                poster={poster}
                onLoadedMetadata={videoMetadataLoaded}
                onTimeUpdate={() =>
                    setCurrentTime(
                        parseInt(
                            videoRef.current!.currentTime.toString() ?? "0"
                        )
                    )
                }
                muted={videoRef.current?.muted ?? false}
                className="w-screen h-screen object-cover aspect-video"
            />

            <VideoControls
                onMute={handleMute}
                isMuted={videoRef.current?.muted ?? false}
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
            />
        </div>
    );
};

export default VideoPlayer;
