import { SearchCardFull } from "@/models/movie/searchcardfull.model";
import { Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
    prop: SearchCardFull;
}
export default function SearchFullCardRender({ prop }: Props) {
    return (
        <div className="p-2 rounded-md cursor-pointer hover:bg-opacity-10 transition-opacity shadow-md border border-white border-opacity-5 flex gap-4 items-center bg-secondary-text bg-opacity-5 ">
            <Image
                src={prop.searchCardImage}
                height={300}
                width={600}
                alt={prop.searchTitle}
                className="h-[100px] w-[200px] rounded-md object-cover"
            />
            <div className="w-[70%]">
                <h2 className="text-lg font-medium line-clamp-1">
                    {prop.searchTitle}
                </h2>
                <span className="text-secondary-text italic text-xs line-clamp-2">
                    {prop.searchDescription}
                </span>
                <span className="text-xs flex items-center gap-1 text-primary-cyan">
                    <Clock size={10} /> {prop.duration}
                </span>
                <span className="text-sm text-secondary-text uppercase">
                    {prop.searchGenre[0].genreName}
                </span>
            </div>
        </div>
    );
}
