import { Genre } from "./genre.model";

export class SeriesCard {
    declare seriesId: string;
    declare seriesProgress?: number;
    declare seriesTitle: string;
    declare seriesDesc: string;
    declare seriesDuration: string;
    declare seriesThumbnail: string;
    declare seriesWatchLink: string;
    declare seriesGenre: Genre[];
}
