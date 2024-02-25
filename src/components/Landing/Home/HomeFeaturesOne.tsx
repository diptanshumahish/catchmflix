import { static_images } from "@/static/static_images";
import { static_text } from "@/static/static_text";
import { Sparkle } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function HomeFeaturesOne() {
    return (
        <div className=" pt-[10%] pb-[5%] flex flex-col gap-4 items-center justify-center px-[8%] relative overflow-hidden ">
            <Image
                src={static_images.circleSymbol}
                height={400}
                width={400}
                alt="background"
                className="absolute lg:h-[600px] lg:w-[600px] left-[-300px] -z-0 opacity-5 animate-bounce"
            />
            <div className="flex flex-col gap-1 items-center justify-center text-primary-cyan">
                <Sparkle size={25} />
                <h2 className=" text-3xl font-semibold">Free To Watch</h2>
                <span className="text-sm text-secondary-text">
                    (There is no catch)
                </span>
            </div>
            <Image
                src={static_images.dummyBackgrounds[2]}
                height={1080}
                width={1920}
                alt="Background image"
                className="h-[60vh] w-full object-cover rounded-md border border-secondary-text border-opacity-40 z-10"
            />
            <div className="border-l-4 flex flex-col gap-4 border-primary-cyan pl-6">
                <h3 className="lg:text-4xl text-2xl  text-white">
                    <span className="text-primary-cyan font-bold">
                        No hidden charges, No commitments
                    </span>
                    , all CatchMflix users can get our premium plans for free
                    right now!
                </h3>
                <span className="text-secondary-text lg:text-md text-sm">
                    {static_text.en.noCatch}
                </span>
            </div>
        </div>
    );
}
