import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Album } from './album';

@Injectable()
export class AlbumService {
  response: any;
  
  readonly ROOT_URL = "http://localhost:8080/"

  constructor(private http: HttpClient) {

  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.ROOT_URL + 'albums/all');
  }

  getArtists(){

  }

  getAlbumArt(){

  }

}
