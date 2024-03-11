import { Genre } from "./genre.model";

export class SearchCardFull {
    declare searchCardImage: string;
    declare searchID: string;
    declare searchTitle: string;
    declare searchDescription: string;
    declare searchGenre: Genre[];
    declare duration: string;
}
