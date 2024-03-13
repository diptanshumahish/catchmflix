import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const genreCards = [
    {
        name: "Crime",
        image: "https://picsum.photos/id/631/1200/1120",
    },
    {
        name: "Action",
        image: "https://picsum.photos/id/431/1200/1120",
    },
    {
        name: "Thriller",
        image: "https://picsum.photos/id/823/1200/1120",
    },
    {
        name: "Horror",
        image: "https://picsum.photos/id/100/1200/1120",
    },
    {
        name: "Comedy",
        image: "https://picsum.photos/id/609/1200/1120",
    },
    {
        name: "Love",
        image: "https://picsum.photos/id/407/1200/1120",
    },
    {
        name: "Sci-Fi",
        image: "https://picsum.photos/id/513/1200/1120",
    },
    {
        name: "Rom-com",
        image: "https://picsum.photos/id/913/1200/1120",
    },
];

export default function SearchMainArea() {
    return (
        <div className="py-[5%] text-white lg:px-[8%] flex lg:flex-row flex-col lg:gap-0 gap-4 justify-between px-[5%]">
            <div className="lg:w-[70%]">
                <h2 className="lg:text-3xl text-2xl font-medium  ">
                    ✨ Search for your desired content
                </h2>
                <form action="" className="w-full flex items-center py-4 gap-4">
                    <input
                        type="search"
                        name="search-term"
                        placeholder="search for series/movies"
                        id=""
                        className="w-full p-2 bg-transparent text-white border border-white border-opacity-40 rounded-md"
                    />
                    <Button className="bg-white text-black">
                        <Search />{" "}
                    </Button>
                </form>
                <div className="grid grid-cols-2 gap-4 overflow-hidden">
                    {genreCards.map((ele, idx) => (
                        <Link
                            href={`/watch/search-now/search?search=${encodeURIComponent(
                                ele.name
                            )}`}
                            key={idx}
                            className="aspect-[16/9] relative overflow-hidden shadow-md rounded-lg"
                        >
                            <Image
                                src={ele.image}
                                height={100}
                                width={200}
                                alt={ele.name}
                                className="w-full h-full object-cover absolute inset-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-design-black opacity-70" />
                            <div className="flex absolute bottom-4 left-4 items-end h-full w-full  z-20 tracking-wider text-lg font-medium">
                                {ele.name}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="lg:w-[27%] bg-yellow-300 flex items-center justify-center rounded-md h-[70vh] text-black">
                Ads Section
            </div>
        </div>
    );
}
