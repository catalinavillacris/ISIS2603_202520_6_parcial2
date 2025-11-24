export class track{
    id: number;
    spotify_id: string;
    name: string;
    loved: boolean;

    constructor(id: number, spotify_id: string, name: string, loved: boolean){
        this.id = id;
        this.spotify_id = spotify_id;
        this.name = name;
        this.loved = loved;
    }
}