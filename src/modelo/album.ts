import { track } from "./track";

export class album{
    id: number;
    spotify_id: string;
    name: string;
    year:string;
    image: string;
    loved: boolean;
    tracks: track[]=[];

    constructor(id: number, spotify_id: string, name: string, year:string, image: string, loved: boolean, canciones: track[]){
        this.id = id;
        this.spotify_id = spotify_id;
        this.name = name;
        this.year = year;
        this.image = image;
        this.loved = loved;
        this.tracks = canciones;
    }
}