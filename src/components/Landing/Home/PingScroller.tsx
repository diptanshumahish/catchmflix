import { static_images } from "@/static/static_images";
import React from "react";
import Image from "next/image";

export default function PingScroller() {
    return (
        <div className="flex flex-col justify-center animate-pulse gap-2 items-center py-[5%]">
            <Image
                src={static_images.circleSymbol}
                height={60}
                width={60}
                alt="circle symbol"
                className="object-cover"
            />
            <span className="text-secondary-text">
                Scroll down to know more
            </span>
        </div>
    );
}
