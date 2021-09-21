import { AlbumService } from './album.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from './album';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <div>
    <div id="data-card__wrapper">
      <div *ngFor="let album of albums$ | async;">
        <div>{{album.albumName}}</div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'heavy-vinyl';
  albums$: Observable<Album[]>;

  constructor(private albumService: AlbumService){
    this.albums$ = this.albumService.getAlbums();
  }

  ngOnInit() {
    
  }
}