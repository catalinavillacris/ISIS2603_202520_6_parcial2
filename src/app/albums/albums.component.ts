import { Component, EventEmitter, Input, Output } from '@angular/core';
import { album } from '../../modelo/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {

  @Input() albums: album[] = [];
  @Output() getTracks = new EventEmitter<album>();
  @Output()  loveAlbum = new EventEmitter<album>();

}
