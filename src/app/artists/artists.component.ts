import { Component, EventEmitter, Input, Output } from '@angular/core';
import { artist } from '../../modelo/artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.css'
})
export class ArtistsComponent {

  @Input() artists: artist[] = [];
  @Output() selectArtist = new EventEmitter<artist>();

}
