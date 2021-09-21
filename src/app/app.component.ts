import { AlbumService } from './album.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <div>
    <nav-component></nav-component>
    <div id="data-card__wrapper">
      <div *ngFor="let album of albums">
        {{album}}
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'heavy-vinyl';
  albums;
  constructor(albumService: AlbumService){
    this.albums = albumService.getAlbums();
  }
}
