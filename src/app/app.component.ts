import { Component, OnInit } from '@angular/core';
import { artist } from '../modelo/artist';
import { ArtistsService } from './Servicio/artists.service';
import { album } from '../modelo/album';
import { track } from '../modelo/track';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frontend_examen2';
  artists:artist[]=[];
  albums:album[]=[];
  tracks:track[]=[];
  selectedAlbum!:album;
  selectedTrack!:track;

  constructor(private service: ArtistsService){}

  ngOnInit(): void {
   this.service.getArtists().subscribe((data:any)=>{
     this.artists = data;
   });
  }

  getAlbums(artist: artist){
    const artistExists = this.artists.find(a => a.id === artist.id) ;
    if(artistExists){
      this.albums = artistExists.albums;
    }
  }

  getTracks(artist: artist, album: album){
    const artistExists = this.artists.find(a => a.id === artist.id) ;
    if(artistExists){
      const albumExists = artistExists.albums.find(al => al.id === album.id);
      if(albumExists){
        this.tracks = albumExists.tracks;
      }
    }
  }

  onSelectedAlbum(album: album){
    this.selectedAlbum = album;
  }
  
  onSelectedTrack(track: track){
    this.selectedTrack = track;
  }

  loveAlbum(album: album){
    this.selectedAlbum.loved = true;
  }

  loveTrack(track: track){
    this.selectedTrack.loved = true;
  }


}
