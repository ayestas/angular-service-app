import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroment';
import { Album } from '../models/album';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpClient: HttpClient) { }

  getSongs(id: number) : Observable<Song[]> {
    return this.httpClient.get<Song[]>(`${environment.baseApiUrl}/Albums/${id}/songs`)  
  }

  getAlbums() : Observable<Album[]> {
    return this.httpClient.get<Album[]>(`${environment.baseApiUrl}/Albums`)
  }

  getSongById(id : string | null) : Observable<Song> {
    return this.httpClient.get<Song>(`${environment.baseApiUrl}/Songs/${id}`)  
  }
}
