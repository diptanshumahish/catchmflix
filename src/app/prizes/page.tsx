import ImageGradientHeader from "@/components/Common/Header/ImageGradientHeader";
import { Button } from "@/components/ui/button";
import { static_images } from "@/static/static_images";
import { static_text } from "@/static/static_text";
import { Notebook, Star, TrophyIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
    const stt = static_text.en;
    return (
        <div>
            <div className="relative">
                <ImageGradientHeader
                    imageLink={static_images.dummyBackgrounds[0]}
                />
            </div>
            <div className="flex flex-col gap-8 items-center  pt-[40vh] justify-center w-full">
                <h2 className="z-10 lg:text-5xl md:text-4xl text-3xl font-medium lg:px-0 px-[5%] text-white lg:max-w-[30%]  text-center">
                    {stt.prizes_main}
                </h2>
            </div>
            <div className="z-10 lg:pt-[20vh] pt-[10vh] pb-[5vh] flex flex-col items-center justify-center text-white">
                <div className="flex flex-col items-center justify-center py-[10vh] lg:w-[40vw] gap-2 lg:px-[8%] px-[5%]">
                    <TrophyIcon className="z-10 lg:size-20 text-yellow-400 size-10 " />
                    <h3 className="lg:text-4xl text-2xl font-medium text-center">
                        <span>{stt.prizes_1}</span>{" "}
                        <span className="text-primary-cyan font-bold">
                            {stt.prizes_2}
                        </span>{" "}
                    </h3>
                    <span className="text-secondary-text text-xs text-center">
                        {stt.terms_and_conditions}
                    </span>
                </div>
                <div className="bg-primary-cyan flex flex-col justify-center items-center text-black w-screen lg:text-center lg:px-[8%] px-[5%] py-8">
                    <h3 className="lg:text-4xl text-3xl font-semibold">
                        What are the details of the event?
                    </h3>
                    <span className="text-xs flex gap-2 py-2">
                        <Star fill="black" size={10} />
                        <Star fill="black" size={10} />
                        <Star fill="black" size={10} />
                        <Star fill="black" size={10} />
                        <Star fill="black" size={10} />
                    </span>
                    <div className="flex flex-col items-start p-4 border gap-2 border-black rounded-md font-medium">
                        {stt.event_details1.map((ele, idx) => (
                            <span key={idx}>🎞️ {ele}</span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center py-8 gap-2 lg:px-[8%] px-[5%]">
                    <Notebook className="lg:size-20 size-10" />
                    <h3 className="text-3xl font-semibold py-2">
                        What to keep in mind before participating?
                    </h3>
                    <div className="flex flex-col gap-2 items-start lg:p-4  ">
                        {stt.event_Details2.map((ele, idx) => (
                            <span key={idx}>✅ {ele}</span>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center w-full lg:px-[8%] px-[5%]">
                    <div className="flex flex-col items-center justify-center lg:py-8 p-[5%] gap-2 border border-white border-opacity-40 rounded-md my-4">
                        <Image
                            src={static_images.dummyBackgrounds[2]}
                            height={400}
                            width={1920}
                            className="lg:w-[80vw] w-full rounded-md h-[20vh] object-cover"
                            alt="test"
                        />
                        <h3 className="lg:text-4xl text-2xl font-bold py-2  text-primary-cyan lg:w-[40vw] lg:text-center">
                            {" "}
                            {stt.event_details3[0]}
                        </h3>
                        <span className="lg:text-xl text-lg">
                            🚀 {stt.event_details3[1]}
                        </span>
                        <div className="py-4 flex flex-col gap-4 items-center justify-center">
                            <span className="text-secondary-text">
                                {stt.event_details3[2]}
                            </span>
                            <div className="p-8 border flex flex-col items-center border-dashed border-white border-opacity-45 rounded-md">
                                <span>{stt.event_details3[3]}</span>
                                <h2 className="lg:text-6xl text-4xl font-bold text-primary-cyan text-center">
                                    📌{stt.event_details3[4]}
                                </h2>
                            </div>
                            <div className="p-8 lg:w-fit w-full border flex flex-col items-center border-dashed border-white border-opacity-45 rounded-md">
                                <span>{stt.event_details3[5]}</span>
                                <h2 className="lg:text-6xl text-4xl font-bold text-center">
                                    🎞️{stt.event_details3[6]}
                                </h2>
                            </div>
                            <div className="p-8 border lg:w-fit w-full flex flex-col items-center border-dashed border-white border-opacity-45 rounded-md">
                                <span>{stt.event_details3[7]}</span>
                                <h2 className="lg:text-6xl text-4xl font-bold text-center">
                                    🏆{stt.event_details3[8]}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white bg-opacity-80 w-screen p-8 flex flex-col gap-2 items-center justify-center text-black ">
                    <span className="font-medium">{stt.participate}</span>
                    <Button
                        asChild
                        className="hover:bg-primary-cyan hover:text-black"
                    >
                        <Link href="mailto:Contact@catchmflix.com">
                            Mail us
                        </Link>
                    </Button>
                    <span className="text-xs italic">
                        mail us at Contact@catchmflix.com
                    </span>
                </div>
            </div>
        </div>
    );
}
