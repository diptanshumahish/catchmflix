import ContentSection from "@/components/Common/Content/ContentSection";
import MovieHeader from "@/components/MainApp/Movie/MovieHeader";
import React from "react";

export default function page() {
    return (
        <div>
            <MovieHeader />
            <ContentSection
                hasMore={false}
                heading="Season 1"
                type="episodes"
                subHeading="The full series"
                episodeContent={[
                    {
                        episodeId: "03380638-890b-440a-8b62-d16292693f1a",
                        episodeThumbnail:
                            "https://picsum.photos/id/499/1200/1120",
                        episodeTitle: "Awesome Shoes | E 1 ",
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
                        episodeTitle: "Dynamic hola | E 2",
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
                        episodeTitle: "bunga Solutions | E 2 ",
                        episodeDesc:
                            "Nunc eget orci eu laoreet nulla posuere consectetur ac vitae risus.",
                        episodeDuration: "22 mins",
                        episodeProgress: 70,
                        episodeWatchLink: "/watch/watch-now/movie",
                    },
                ]}
            />
            <div className="lg:px-[8%] px-[5%] text-white">
                <h3 className="font-medium text-lg">Cast</h3>
                <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Unde distinctio quo corrupti omnis nam eum enim ut sequi,
                    dicta et?
                </span>
            </div>
        </div>
    );
}
