import ContentSection from "@/components/Common/Content/ContentSection";
import HeaderSlider from "@/components/MainApp/Header/HeaderSlider";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Watch Now 🎞️ | CatchMFlix",
};

export default function page() {
    return (
        <div>
            <HeaderSlider />
            <div className="h-[100px]" />
            <ContentSection
                heading="Continue Watching"
                type="episodes"
                subHeading="All the ones you watched"
                episodeContent={[
                    {
                        episodeId: "03380638-890b-440a-8b62-d16292693f1a",
                        episodeThumbnail:
                            "https://picsum.photos/id/499/1200/1120",
                        episodeTitle: "Awesome Shoes",
                        episodeDesc:
                            "Quisque euismod velit eget nibh laoreet, et hendrerit lectus consectetur.",
                        episodeDuration: "14 mins",
                        episodeProgress: 32,
                        episodeWatchLink: "/watch/watch-now/movie",
                    },

                    {
                        episodeId: "8e82b2ed-22576757c5d-b510-59a0b502778c",
                        episodeThumbnail:
                            "https://picsum.photos/id/600/1000/1120",
                        episodeTitle: "Dynamic hola",
                        episodeDesc:
                            "Nunc eget orci eu laoreet nulla posuere consectetur ac vitae risus.",
                        episodeDuration: "22 mins",
                        episodeProgress: 55,
                        episodeWatchLink: "/watch/watch-now/movie",
                    },
                    {
                        episodeId: "8e82b2ed-2257-4c5d-b510-59a0b5027hj8c",
                        episodeThumbnail:
                            "https://picsum.photos/id/814/1200/2120",
                        episodeTitle: "bunga Solutions",
                        episodeDesc:
                            "Nunc eget orci eu laoreet nulla posuere consectetur ac vitae risus.",
                        episodeDuration: "22 mins",
                        episodeProgress: 70,
                        episodeWatchLink: "/watch/watch-now/movie",
                    },
                    {
                        episodeId: "8e82b2ed-2257-4c5d-b510-59a0b5027hj8c",
                        episodeThumbnail:
                            "https://picsum.photos/id/880/1900/1120",
                        episodeTitle: "bungaui Solutions",
                        episodeDesc:
                            "Nunc eget orci eu laoreet nulla posuere consectetur ac vitae risus.",
                        episodeDuration: "30 mins",
                        episodeProgress: 92,
                        episodeWatchLink: "/watch/watch-now/movie",
                    },
                ]}
            />
            <ContentSection
                heading="Added to your watch later"
                type="series"
                subHeading="Check out the ones you added to your watch later"
                seriesContent={[
                    {
                        seriesId: "03380638-890b-440a-8b62-d16292693f1a",
                        seriesThumbnail:
                            "https://picsum.photos/id/130/1200/1120",
                        seriesTitle: "Drishyam 2",
                        seriesDesc: "The story unfolds a wierd mystry ",
                        seriesDuration: "1hr 30mins",

                        seriesWatchLink: "/watch/watch-now/movie",
                        seriesGenre: [{ genreId: "@3", genreName: "Horror" }],
                    },

                    {
                        seriesId: "8e82b2ed-22576757c5d-b510-59a0b502778c",
                        seriesThumbnail:
                            "https://picsum.photos/id/980/1000/1120",
                        seriesTitle: "Dynamic hola",
                        seriesDesc:
                            "Nunc eget orci eu laoreet nulla posuere consectetur ac vitae risus.",
                        seriesDuration: "1hr 30mins",
                        seriesProgress: 55,
                        seriesWatchLink: "/watch/watch-now/movie",
                        seriesGenre: [{ genreId: "@3", genreName: "Horror" }],
                    },
                    {
                        seriesId: "8e82b2ed-2257-4c5d-b510-59a0b5027hj8c",
                        seriesThumbnail:
                            "https://picsum.photos/id/244/1200/2120",
                        seriesTitle: "bunga Solutions",
                        seriesDesc:
                            "Nunc eget orci eu laoreet nulla posuere consectetur ac vitae risus.",
                        seriesDuration: "1hr 45mins",
                        seriesProgress: 70,
                        seriesWatchLink: "/watch/watch-now/movie",
                        seriesGenre: [{ genreId: "@2", genreName: "Comedy" }],
                    },
                    {
                        seriesId: "8e82b2ed-2257-4c5d-b510-59a0b5027hj8c",
                        seriesThumbnail:
                            "https://picsum.photos/id/602/1900/1120",
                        seriesTitle: "bungaui Solutions",
                        seriesDesc:
                            "Nunc eget orci eu laoreet nulla posuere consectetur ac vitae risus.",
                        seriesDuration: "1hr 20mins",

                        seriesWatchLink: "/watch/watch-now/movie",
                        seriesGenre: [{ genreId: "@1", genreName: "Romance" }],
                    },
                ]}
            />

            <ContentSection
                heading="CatchMFlix Picks"
                type="series"
                subHeading="The best curated content, selected just for you, by our editorial"
                seriesContent={[
                    {
                        seriesId: "03380638-890b-440a-8b62-d16292693f1a",
                        seriesThumbnail:
                            "https://picsum.photos/id/199/1200/1120",
                        seriesTitle: "Awesome Shoes",
                        seriesDesc:
                            "Quisque euismod velit eget nibh laoreet, et hendrerit lectus consectetur.",
                        seriesDuration: "1hr 30mins",

                        seriesWatchLink: "/watch/watch-now/movie",
                        seriesGenre: [{ genreId: "@3", genreName: "Horror" }],
                    },

                    {
                        seriesId: "8e82b2ed-22576757c5d-b510-59a0b502778c",
                        seriesThumbnail:
                            "https://picsum.photos/id/901/1000/1120",
                        seriesTitle: "Dynamic hola",
                        seriesDesc:
                            "Nunc eget orci eu laoreet nulla posuere consectetur ac vitae risus.",
                        seriesDuration: "1hr 30mins",
                        seriesProgress: 55,
                        seriesWatchLink: "/watch/watch-now/movie",
                        seriesGenre: [{ genreId: "@3", genreName: "Horror" }],
                    },
                    {
                        seriesId: "8e82b2ed-2257-4c5d-b510-59a0b5027hj8c",
                        seriesThumbnail:
                            "https://picsum.photos/id/234/1200/2120",
                        seriesTitle: "bunga Solutions",
                        seriesDesc:
                            "Nunc eget orci eu laoreet nulla posuere consectetur ac vitae risus.",
                        seriesDuration: "1hr 45mins",
                        seriesProgress: 70,
                        seriesWatchLink: "/watch/watch-now/movie",
                        seriesGenre: [{ genreId: "@2", genreName: "Comedy" }],
                    },
                    {
                        seriesId: "8e82b2ed-2257-4c5d-b510-59a0b5027hj8c",
                        seriesThumbnail:
                            "https://picsum.photos/id/780/1900/1120",
                        seriesTitle: "bungaui Solutions",
                        seriesDesc:
                            "Nunc eget orci eu laoreet nulla posuere consectetur ac vitae risus.",
                        seriesDuration: "1hr 20mins",

                        seriesWatchLink: "/watch/watch-now/movie",
                        seriesGenre: [{ genreId: "@1", genreName: "Romance" }],
                    },
                ]}
            />

            <ContentSection
                heading="👻 Horror series for you"
                type="series"
                subHeading="The spookiness is real"
                seriesContent={[
                    {
                        seriesId: "03380638-890b-440a-8b62-d16292693f1a",
                        seriesThumbnail:
                            "https://picsum.photos/id/139/1200/1120",
                        seriesTitle:
                            "Giant bog foot : the tale 2023 for the better",
                        seriesDesc:
                            "Check out this sad story from the world classic 2024",
                        seriesDuration: "1hr 30mins",

                        seriesWatchLink: "/watch/watch-now/movie",
                        seriesGenre: [{ genreId: "@3", genreName: "Horror" }],
                    },

                    {
                        seriesId: "8e82b2ed-22576757c5d-b510-59a0b502778c",
                        seriesThumbnail:
                            "https://picsum.photos/id/301/1000/1120",
                        seriesTitle: "What awaits the newMan Age history",
                        seriesDesc:
                            "Nunc eget orci eu laoreet nulla posuere consectetur ac vitae risus.",
                        seriesDuration: "1hr 30mins",
                        seriesProgress: 55,
                        seriesWatchLink: "/watch/watch-now/movie",
                        seriesGenre: [{ genreId: "@3", genreName: "Horror" }],
                    },
                    {
                        seriesId: "8e82b2ed-2257-4c5d-b510-59a0b5027hj8c",
                        seriesThumbnail:
                            "https://picsum.photos/id/274/1200/2120",
                        seriesTitle: "Seven days below the sea",
                        seriesDesc:
                            "What happened when 7 kids got trapped under the sea for inifinity",
                        seriesDuration: "1hr 45mins",
                        seriesProgress: 70,
                        seriesWatchLink: "/watch/watch-now/movie",
                        seriesGenre: [{ genreId: "@2", genreName: "Comedy" }],
                    },
                    {
                        seriesId: "8e82b2ed-2257-4c5d-b510-59a0b5027hj8c",
                        seriesThumbnail:
                            "https://picsum.photos/id/770/1900/1120",
                        seriesTitle: "Howard tales",
                        seriesDesc:
                            "Nunc eget orci eu laoreet nulla posuere consectetur ac vitae risus.",
                        seriesDuration: "1hr 20mins",

                        seriesWatchLink: "/watch/watch-now/movie",
                        seriesGenre: [{ genreId: "@1", genreName: "Horror" }],
                    },
                ]}
            />

            <ContentSection
                heading="Romantic Diaries 💗"
                type="series"
                subHeading="Speak out your heart"
                seriesContent={[
                    {
                        seriesId: "03380638-890b-440a-8b62-d16292693f1a",
                        seriesThumbnail:
                            "https://picsum.photos/id/129/1200/1120",
                        seriesTitle:
                            "Giant bog foot : the tale 2023 for the better",
                        seriesDesc:
                            "Check out this sad story from the world classic 2024",
                        seriesDuration: "1hr 30mins",

                        seriesWatchLink: "/watch/watch-now/movie",
                        seriesGenre: [{ genreId: "@3", genreName: "Love" }],
                    },

                    {
                        seriesId: "8e82b2ed-22576757c5d-b510-59a0b502778c",
                        seriesThumbnail:
                            "https://picsum.photos/id/127/1000/1120",
                        seriesTitle: "The garden of hearts",
                        seriesDesc:
                            "Nunc eget orci eu laoreet nulla posuere consectetur ac vitae risus.",
                        seriesDuration: "1hr 20mins",
                        seriesProgress: 55,
                        seriesWatchLink: "/watch/watch-now/movie",
                        seriesGenre: [{ genreId: "@3", genreName: "Romance" }],
                    },
                    {
                        seriesId: "8e82b2ed-2257-4c5d-b510-59a0b5027hj8c",
                        seriesThumbnail:
                            "https://picsum.photos/id/174/1200/2120",
                        seriesTitle: "All yours is mine",
                        seriesDesc:
                            "What happened when 7 kids got trapped under the sea for inifinity",
                        seriesDuration: "1hr 45mins",
                        seriesProgress: 70,
                        seriesWatchLink: "/watch/watch-now/movie",
                        seriesGenre: [{ genreId: "@2", genreName: "Romance" }],
                    },
                    {
                        seriesId: "8e82b2ed-2257-4c5d-b510-59a0b5027hj8c",
                        seriesThumbnail:
                            "https://picsum.photos/id/740/1900/1120",
                        seriesTitle: "A bliss to see",
                        seriesDesc:
                            "Nunc eget orci eu laoreet nulla posuere consectetur ac vitae risus.",
                        seriesDuration: "1hr 20mins",

                        seriesWatchLink: "/watch/watch-now/movie",
                        seriesGenre: [{ genreId: "@1", genreName: "Love" }],
                    },
                ]}
            />
        </div>
    );
}
