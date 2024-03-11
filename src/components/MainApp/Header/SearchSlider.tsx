"use client";
import { Button } from "@/components/ui/button";
import { Genre } from "@/models/movie/genre.model";
import { movieParameters } from "@/static/movie-parameters";
import { Heart, Play, Plus } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import LogoImage from "@/components/Common/Logo/LogoImage";
import Indicator from "@/components/Common/Indicators/Indicator";

const data: {
    type: "video" | "poster";
    title: string;
    desc: string;
    duration: string;
    genres: Genre[];
    watchLinkForEpisodeOne: string;
    itemId: string;
    contentLink: string;
}[] = [
    {
        type: "video",
        contentLink: "/static/test.mp4",
        title: "The ruins of the lost Saga: A complete Collection of history",
        desc: "A botanist stranded on Mars, with only her wit and forgotten science from a bygone era, attempts to cultivate life, battling isolation and the ever-present longing for home amidst the barren red landscape.",
        duration: "1hr 45mins",
        genres: [{ genreId: "1", genreName: "Horror" }],
        itemId: "1",
        watchLinkForEpisodeOne: "",
    },
    {
        type: "poster",
        contentLink: "/dummy/back2.webp",
        title: "The devil made me do it",
        desc: "A cynical chef inherits a magical cookbook, unleashing culinary chaos and a sprinkle of romance.",
        duration: "1hr 45mins",
        genres: [{ genreId: "1", genreName: "Romance" }],
        itemId: "2",
        watchLinkForEpisodeOne: "",
    },
    {
        type: "video",
        contentLink: "/static/vid2.mp4",
        title: "A beautiful Saga of Witches",
        desc: "Heaven and hell changed for them, the saga of a beautiful world keeps changing forever",
        duration: "1hr 55mins",
        genres: [{ genreId: "4", genreName: "Sci-Fi" }],
        itemId: "4",
        watchLinkForEpisodeOne: "",
    },
    {
        type: "poster",
        contentLink: "/dummy/test1.webp",
        title: "The curse of the Inoya Mountains and the vigil monkeys",
        desc: "Ths  culinary chaos and a sprinkle of romance, with a saga of cool omens in the set",
        duration: "1hr 45mins",
        genres: [{ genreId: "1", genreName: "Murder Mystery" }],
        itemId: "3",
        watchLinkForEpisodeOne: "",
    },
];

export default function SearchSlider() {
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
                className="h-[60vh] w-screen relative overflow-hidden animate-in"
            >
                <div className="right-[1%] w-fit z-10 gap-2 absolute h-[70vh] lg:flex hidden flex-col justify-center items-center">
                    {data.map((_, idx) => {
                        if (idx === activeItem) {
                            return <Indicator key={idx} active />;
                        } else {
                            return <Indicator key={idx} />;
                        }
                    })}
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-design-black" />
                {dt.type === "video" ? (
                    <motion.video
                        key={dt.title}
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
                        key={dt.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 2 }}
                        transition={{ ease: easeInOut }}
                        src={dt.contentLink}
                        height={900}
                        width={1920}
                        alt={dt.title}
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
                            {dt.title}
                        </h1>
                        <p className="text-secondary-text lg:max-w-[60%] line-clamp-2 text-sm italic ">
                            {dt.desc}
                        </p>

                        <div className="flex lg:flex-row flex-col  lg:gap-4 gap-2">
                            <Button className="bg-white text-black lg:w-fit ">
                                <Play fill="black" size={15} />{" "}
                                <span>Watch Now</span>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
