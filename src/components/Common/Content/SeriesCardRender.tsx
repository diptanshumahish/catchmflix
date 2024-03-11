import { SeriesCard } from "@/models/movie/seriescard.model";
import { Clock, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    se: SeriesCard;
}
export default function SeriesCardRender({ se }: Props) {
    return (
        <div className="w-full flex flex-col gap-1">
            <div className="relative">
                <Image
                    src={se.seriesThumbnail}
                    height={200}
                    width={900}
                    alt={se.seriesTitle}
                    className="rounded-lg h-[200px] object-cover shadow-sm"
                />
                <Link
                    href={se.seriesWatchLink}
                    className="absolute inset-0 opacity-60 bg-gradient-to-b from-transparent hover:opacity-100 transition-opacity  to-design-black"
                />
                <div className="absolute bottom-2   left-2 text-xs flex items-center gap-2">
                    <Clock size={15} /> {se.seriesDuration}
                </div>
                <div className="absolute right-2 bottom-2 z-30">
                    <MoreHorizontal
                        size={15}
                        className="cursor-pointer opacity-70 hover:scale-x-125 hover:opacity-100 transition-transform"
                    />
                </div>

                {se.seriesProgress && (
                    <div
                        style={{ width: `${se.seriesProgress}%` }}
                        className=" absolute bottom-0 h-[2px] bg-primary-cyan rounded-full"
                    />
                )}
            </div>
            <Link href={se.seriesWatchLink}>
                <span className="uppercase text-xs text-secondary-text">
                    {se.seriesGenre[0].genreName}
                </span>
                <h2 className="line-clamp-1 font-medium text-lg">
                    {se.seriesTitle}
                </h2>
                <span className="text-xs text-secondary-text line-clamp-2">
                    {se.seriesDesc}
                </span>
            </Link>
        </div>
    );
}
