import { InfiniteMovingCards } from "@/components/ui/infinitymovingcards";
import { static_images } from "@/static/static_images";
import { static_text } from "@/static/static_text";
import React from "react";

const imgs = static_images.dummyBackgrounds;
export default function BottomCards() {
    return (
        <div className="w-full ">
            <div className="opacity-30">
                <InfiniteMovingCards
                    speed="slow"
                    items={imgs}
                    pauseOnHover={false}
                />
                <InfiniteMovingCards
                    items={imgs}
                    pauseOnHover={false}
                    direction="right"
                    speed="slow"
                />
            </div>
            <div className="flex flex-col py-6 lg:px-0 px-[5%]  gap-2 items-center justify-center  text-primary-cyan">
                <h3 className="text-4xl font-semibold text-center lg:max-w-[40%]">
                    {static_text.en.getReady}
                </h3>
                <h3 className="text-3xl">{static_text.en.comingsoon}</h3>
                <span className="text-white">{static_text.en.stayTuned}</span>
            </div>
        </div>
    );
}
