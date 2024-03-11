"use client";
import { Button } from "@/components/ui/button";
import { Genre } from "@/models/movie/genre.model";
import { movieParameters } from "@/static/movie-parameters";
import { Heart, Play, Plus } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Link from "next/link";

const data: {
    type: "video" | "poster";

    itemId: string;
    contentLink: string;
}[] = [
    {
        type: "video",
        contentLink: "/static/test.mp4",

        itemId: "1",
    },
    {
        type: "poster",
        contentLink: "https://picsum.photos/id/139/1920/1080",

        itemId: "3",
    },
    {
        type: "poster",
        contentLink: "https://picsum.photos/id/189/1920/1080",

        itemId: "3",
    },
];

export default function MovieHeader() {
    const [activeItem, setActiveItem] = useState(0);
    var temp = 0;
    const update = () => {
        console.log(temp);
        if (temp === 2) {
            setActiveItem(0);
            temp = 0;
        } else {
            setActiveItem((prev) => prev + 1);
            temp++;
        }
    };
    useEffect(() => {
        const timer = setInterval(() => {
            update();
        }, 10000);
        return () => clearInterval(timer);
    }, []);

    const dt = data[activeItem];
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-[70vh] w-screen relative overflow-hidden animate-in"
            >
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-design-black" />
                {dt.type === "video" ? (
                    <motion.video
                        key="mov"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 2 }}
                        src={dt.contentLink}
                        autoPlay
                        controls={false}
                        muted
                        loop
                        className="absolute inset-0 w-full object-cover h-full select-none "
                    />
                ) : (
                    <motion.img
                        key="img"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 2 }}
                        transition={{ ease: easeInOut }}
                        src={dt.contentLink}
                        height={900}
                        width={1920}
                        alt="alt"
                        className="absolute  inset-0 w-full object-cover h-full select-none"
                    />
                )}
                <motion.div
                    key={dt.itemId}
                    initial={{ y: "100px" }}
                    animate={{ y: 0 }}
                    transition={{ ease: "easeInOut" }}
                    className="h-full z-10 w-full flex flex-col  lg:px-[8%] px-[5%] justify-end text-white"
                >
                    <div className="z-10 flex flex-col gap-2  ">
                        <h1 className="lg:text-4xl text-2xl font-medium lg:max-w-[60%]">
                            A Bravery Tale in the universe
                        </h1>
                        <p className="text-secondary-text lg:max-w-[60%] line-clamp-2 text-sm italic ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nihil dignissimos, voluptate doloremque
                            doloribus natus at! Quia ducimus officiis beatae,
                            perferendis rem quisquam totam earum voluptatem
                            rerum? Ab facilis modi deserunt.
                        </p>
                        <span>HORROR | 2hr 45mins</span>
                        <div className=" flex gap-2 flex-wrap">
                            {movieParameters.hdIcon} {movieParameters.fourKIcon}{" "}
                            {movieParameters.eighteenPlus}
                            {movieParameters.telugu}
                        </div>
                        <div className="flex lg:flex-row flex-col  lg:gap-4 gap-2">
                            <Button
                                asChild
                                className="bg-white text-black lg:w-fit "
                            >
                                <Link href="/test">
                                    <Play fill="black" size={15} />{" "}
                                    <span>Watch Now</span>
                                </Link>
                            </Button>
                            <Button className="bg-transparent text-white border border-white lg:w-fit ">
                                <Plus fill="black" size={15} />{" "}
                                <span>Add to watch later</span>
                            </Button>
                            <Button className=" text-white bg-transparent lg:w-fit border ">
                                <Heart fill="black" size={15} />{" "}
                            </Button>
                        </div>
                        <span className="text-sm text-secondary-text">
                            ✅ Finished on 10th september, 2024
                        </span>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
