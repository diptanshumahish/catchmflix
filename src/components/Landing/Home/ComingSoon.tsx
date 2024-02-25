import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { static_images } from "@/static/static_images";
import { static_text } from "@/static/static_text";
import { ArrowUpRight, Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ComingSoon() {
    return (
        <div className=" py-[5%] flex flex-col gap-4 items-center justify-center px-[8%] relative overflow-hidden">
            <div className="text-primary-cyan flex flex-col gap-1 items-center justify-center">
                <Quote size={32} />
                <h2 className=" text-3xl font-semibold">
                    {static_text.en.comingsoon}
                </h2>
                <span className="text-sm text-secondary-text">
                    we are very close to our launch date, stay tuned!
                </span>
            </div>
            <div className="w-full p-8 bg-secondary-violet border border-white border-opacity-40 rounded-md flex justify-between items-center">
                <div className="w-[50%]">
                    <Image
                        src={static_images.dummyBackgrounds[3]}
                        height={600}
                        width={400}
                        alt="poster"
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>
                <div className="w-[40%] flex flex-col gap-8">
                    <Image
                        src={static_images.logo}
                        alt="logo"
                        height={180}
                        width={180}
                        className="animate-pulse"
                    />
                    <div className="text-5xl flex flex-col gap-2 font-semibold text-primary-cyan">
                        <h2>{static_text.en.excited}</h2>
                        <h2 className="text-white">{static_text.en.already}</h2>
                    </div>
                    <div className="text-secondary-text flex flex-col">
                        <span>{static_text.en.weToo}</span>
                        <span>{static_text.en.join}</span>
                    </div>
                    <form action="" className="flex flex-col gap-2">
                        <Input
                            type="email"
                            placeholder="johndoe@email.com"
                            className="bg-opacity-10 rounded-full text-white"
                        />
                        <Button
                            className="w-fit bg-transparent px-0 border-b rounded-none"
                            type="submit"
                        >
                            Let&apos;s Go <ArrowUpRight />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
