import { album } from "./album";

export class artist{
    id: number;
    spotify_id: string;
    name: string;
    image: string;
    albums: album[]=[];

    constructor(id: number, spotify_id: string, name: string, image: string, albums: album[]){
        this.id = id;
        this.spotify_id = spotify_id;
        this.name = name;
        this.image = image;
        this.albums = albums;
    }



}