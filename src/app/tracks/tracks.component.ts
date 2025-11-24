import { Component, EventEmitter, Input, Output } from '@angular/core';
import { track } from '../../modelo/track';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.css'
})
export class TracksComponent {

  @Input() tracks: track[] = [];
  @Output()  loveTrack = new EventEmitter<track>();

}
