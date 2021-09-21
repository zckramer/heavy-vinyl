import { AlbumService } from './../album.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-card',
  // templateUrl: './data-card.component.html',
  template: `
  <div class="dataCard">
    <div class="dataCard__Album-Title">
        {{ title }}
    </div>
    <div class="dataCard__Album-Author">
        {{ author }}
    </div>
    <div class="dataCard__Release-Date">
        {{ releaseYear }}
    </div>
    <div class="dataCard__Album-Art">
        <img src="https://placekitten.com/500/500"/>
    </div>
  </div>
  `,
  styleUrls: ['./data-card.component.css']
})
export class DataCardComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

  title = "Album Title"
  author = "Album Artist"
  releaseYear = "year of release"

}
