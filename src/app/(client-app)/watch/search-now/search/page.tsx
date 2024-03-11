import SearchFullCardRender from "@/components/MainApp/Search/SearchFullCardRender";
import { Button } from "@/components/ui/button";
import { SearchCardFull } from "@/models/movie/searchcardfull.model";
import { prettify } from "@/services/extensions/string";
import { ServerProps } from "@/services/server-params";
import { Search } from "lucide-react";
import React from "react";

type Props = ServerProps<{ search: string }, { search: string }>;

const data: SearchCardFull[] = [
    {
        searchCardImage: "https://picsum.photos/id/139/1200/1120",
        searchDescription: "A cool movie",
        searchGenre: [{ genreId: "12", genreName: "Horror" }],
        searchID: "1212",
        searchTitle: "Hanuman Chalisa",
        duration: "1hr 30mins",
    },
    {
        searchCardImage: "https://picsum.photos/id/730/1200/1120",
        searchDescription:
            "A cool movie where the villian gets to know that people are really bad and he commits suicicde, the entire forest now seems like a burning hell with more issues ",
        searchGenre: [{ genreId: "12", genreName: "Horror" }],
        searchID: "1213",
        searchTitle: "Demon slayer",
        duration: "2hrs",
    },
    {
        searchCardImage: "https://picsum.photos/id/930/1200/1120",
        searchDescription:
            "A cool movie where the villian gets to know that people are really bad and he commits suicicde, the entire forest now seems like a burning hell with more issues ",
        searchGenre: [{ genreId: "12", genreName: "Comedy" }],
        searchID: "1212",
        searchTitle: "Duan Kua",
        duration: "1hrs",
    },
    {
        searchCardImage: "https://picsum.photos/id/910/1200/1120",
        searchDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum molestias excepturi saepe beatae quos distinctio! Accusantium ducimus distinctio repellendus sunt?",
        searchGenre: [{ genreId: "12", genreName: "Comedy" }],
        searchID: "1212",
        searchTitle: "Darji khan",
        duration: "1hrs",
    },
];

export default function page(props: Props) {
    return (
        <div className="lg:px-[8%] py-[2%] text-white">
            <div>
                <form action="" className="w-full flex items-center py-4 gap-4">
                    <input
                        type="search"
                        name="search"
                        placeholder={prettify(props.searchParams.search)}
                        id=""
                        className="w-full p-2 bg-transparent  focus:outline-transparent focus:border-transparent text-white border border-white border-opacity-40 rounded-md"
                    />
                    <Button className="bg-white text-black">
                        <Search />{" "}
                    </Button>
                </form>
                <div>
                    <h3>
                        showing results for &quot;
                        {prettify(props.searchParams.search)}&quot;
                    </h3>
                    <div className="flex flex-col gap-4 py-6 w-[60%]">
                        {data.map((ele, idx) => (
                            <SearchFullCardRender prop={ele} key={idx} />
                        ))}
                        <span className="text-center text-secondary-text text-sm italic">
                            End of list
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
