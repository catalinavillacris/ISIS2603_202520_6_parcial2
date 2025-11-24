import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { artist } from '../../modelo/artist';
import { album } from '../../modelo/album';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  private apiUrl :string= environment.baseUrl + '/artistas';

  constructor(private http:HttpClient) { }

  getArtists(){
    return this.http.get(this.apiUrl);
  }

}
