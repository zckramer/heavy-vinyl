import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpClient: HttpClient) {

  }

  async getAlbums(){
    const res = await this.httpClient.get("http://localhost:8080/albums/all")
    console.log(res)
  }

  // getAlbums(){
  //   return [
  //     "Nevermind",
  //     "Kind of Blue", 
  //     "Neon Bible", 
  //     "Frances the Mute"
  //   ]
  // }

  getArtists(){
    return [
      "Nirvana",
      "Miles Davis",
      "Arcade Fire",
      "The Mars Volta"
    ]
  }

  getAlbumArt(){
    return "https://placekitten.com/500/500"
  }

}
