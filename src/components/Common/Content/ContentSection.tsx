import { EpisodeCard } from "@/models/movie/episodecard.model";
import { MovieCard } from "@/models/movie/moviecard.model";
import { SeriesCard } from "@/models/movie/seriescard.model";
import React from "react";
import EpisodeCardRender from "./EpisodeCardRender";
import { Button } from "@/components/ui/button";
import SeriesCardRender from "./SeriesCardRender";

interface Props {
    type: "movie" | "series" | "episodes";
    heading: string;
    subHeading?: string;
    movieContent?: MovieCard[];
    seriesContent?: SeriesCard[];
    episodeContent?: EpisodeCard[];
    hasMore?: boolean;
}

export default function ContentSection({
    heading,
    type,
    subHeading,
    movieContent,
    seriesContent,
    episodeContent,
    hasMore = true,
}: Props) {
    return (
        <div className="overflow-hidden  z-0 lg:px-[8%] px-[5%] text-white py-8 ">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-semibold">{heading}</h2>
                    <span className="text-sm text-secondary-text">
                        {subHeading}
                    </span>
                </div>
                {hasMore && <Button>More</Button>}
            </div>
            <div className="py-4">
                {movieContent && <div></div>}
                {episodeContent && (
                    <div className="grid lg:grid-cols-4 grid-cols-2 gap-6  overflow-scroll ">
                        {episodeContent.map((ele, idx) => (
                            <EpisodeCardRender key={idx} ep={ele} />
                        ))}
                    </div>
                )}
                {seriesContent && (
                    <div className="grid lg:grid-cols-4 grid-cols-2 gap-6  overflow-scroll ">
                        {seriesContent.map((ele, idx) => (
                            <SeriesCardRender se={ele} key={idx} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
