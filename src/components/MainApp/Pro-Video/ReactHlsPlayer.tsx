"use client";
import React, {
    useEffect,
    RefObject,
    useState,
    useLayoutEffect,
    useRef,
    forwardRef,
    useImperativeHandle,
} from "react";
import Hls, { HlsConfig } from "hls.js";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { ChildProps } from "./MainVideoPlayer";

export interface HlsPlayerProps
    extends React.VideoHTMLAttributes<HTMLVideoElement> {
    playerRef: RefObject<HTMLVideoElement>;
    src: string;
    onQualityChange?: (newQualityIndex: number) => void;
    quality?: number;
    qualityValues: (data: string[]) => void;
}

const ReactHlsPlayer = forwardRef<ChildProps, HlsPlayerProps>(
    (
        {
            playerRef = React.createRef<HTMLVideoElement>(),
            src,
            onQualityChange,
            autoPlay = false,
            quality,
            qualityValues,
            ...props
        },
        ref
    ) => {
        const [currentQuality, setCurrentQuality] = useState(quality ?? -1);
        const [isLoading, setIsLoading] = useState(false);
        const [hlsState, setHlsState] = useState<Hls>();

        const changeQuality = (val: number) => {
            console.log("set as", val);
            if (hlsState) {
                hlsState.currentLevel = val;
                console.log(hlsState.currentLevel);
            }
        };
        useImperativeHandle(ref, () => ({
            qualityChange(val) {
                changeQuality(val);
            },
        }));
        function _initPlayer() {
            if (hlsState != null) {
                hlsState.destroy();
            }

            const newHls = new Hls({
                enableWorker: true,
                lowLatencyMode: true,
            });

            if (playerRef.current != null) {
                newHls.attachMedia(playerRef.current);
            }

            newHls.on(Hls.Events.MEDIA_ATTACHED, () => {
                newHls.loadSource(src);

                newHls.on(Hls.Events.MANIFEST_PARSED, (_, data) => {
                    const levels = data.levels;
                    const qualityLabels = levels
                        .map((level) =>
                            level.height ? `${level.height}p` : ""
                        )
                        .filter((item) => item !== "");
                    qualityValues(qualityLabels);
                });
            });

            setHlsState(newHls);
        }

        useLayoutEffect(() => {
            _initPlayer();
            if (Hls.isSupported()) {
                _initPlayer();
            }

            return () => {
                if (hlsState) {
                    hlsState.destroy();
                }
            };
        }, [autoPlay, playerRef, src]);

        useEffect(() => {
            console.log(hlsState?.currentLevel);
            if (hlsState) {
                hlsState.on(Hls.Events.BUFFER_APPENDED, () => {
                    setIsLoading(false);
                });
                hlsState.currentLevel = currentQuality;

                hlsState.on(Hls.Events.BUFFER_APPENDING, () => {
                    setIsLoading(true);
                });

                hlsState.on(Hls.Events.ERROR, function (event, data) {
                    console.log(data);
                    setIsLoading(true);
                    if (data.details === "bufferStalledError") {
                        hlsState.currentLevel = -1;
                        setCurrentQuality(-1);
                        setIsLoading(true);
                    }
                    if (data.fatal) {
                        switch (data.type) {
                            case Hls.ErrorTypes.NETWORK_ERROR:
                                hlsState.startLoad();
                                break;
                            case Hls.ErrorTypes.MEDIA_ERROR:
                                hlsState.recoverMediaError();
                                break;
                            default:
                                _initPlayer();
                                break;
                        }
                    }
                });
            }
        }, [hlsState]);
        if (Hls.isSupported())
            return (
                <div>
                    <video
                        ref={playerRef}
                        src={src}
                        {...props}
                        className="h-screen object-cover aspect-[16/9] w-screen"
                    />
                    {/* {qualityValues.map((ele, idx) => {
                    return (
                        <Button
                            onClick={() => {
                                handleQualityChange(idx);
                            }}
                            key={idx}
                        >
                            {ele}
                        </Button>
                    );
                })} */}
                    {/* {isLoading && (
                    <Loader2 color="white" className="animate-spin" />
                )} */}
                </div>
            );

        return <div>Error in authorization</div>;
    }
);
ReactHlsPlayer.displayName = "CATCHMFLIX_PLAYER";

export default ReactHlsPlayer;
