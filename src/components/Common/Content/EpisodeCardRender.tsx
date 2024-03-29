import { EpisodeCard } from "@/models/movie/episodecard.model";
import { Clock, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import NewLink from "../Navigation/NewLink";

interface Props {
    ep: EpisodeCard;
}
export default function EpisodeCardRender({ ep }: Props) {
    return (
        <div className="w-full flex flex-col gap-1 overflow-hidden rounded-lg">
            <div className="relative aspect-video ">
                <Image
                    src={ep.episodeThumbnail}
                    height={200}
                    width={900}
                    alt={ep.episodeTitle}
                    className="rounded-lg aspect-video w-auto h-[200px] object-cover shadow-sm"
                />
                <NewLink
                    link={ep.episodeWatchLink}
                    className="absolute inset-0 opacity-60 bg-gradient-to-b from-transparent hover:opacity-100  to-design-black transition-opacity"
                />
                <div className="absolute bottom-2   left-2 text-xs flex items-center gap-2">
                    <Clock size={15} /> {ep.episodeDuration}
                </div>
                <div className="absolute right-2 bottom-2 z-30">
                    <MoreHorizontal
                        size={15}
                        className="cursor-pointer opacity-70 hover:scale-x-125 hover:opacity-100 transition-transform"
                    />
                </div>
                {ep.episodeProgress && (
                    <div
                        style={{ width: `${ep.episodeProgress}%` }}
                        className=" absolute bottom-0 h-[2px] bg-primary-cyan rounded-full"
                    />
                )}
            </div>
            <NewLink
                link={ep.episodeWatchLink}
                data={
                    <>
                        {" "}
                        <h2 className="line-clamp-1 font-medium text-lg">
                            {ep.episodeTitle}
                        </h2>
                        <span className=" text-secondary-text text-xs line-clamp-2">
                            {ep.episodeDesc}
                        </span>
                    </>
                }
            />
        </div>
    );
}
