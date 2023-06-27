import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albums !: Array<Album>;
  filteredAlbums !: Array<Album>;
  selectedAlbum ?: Album;

  constructor(private songService : SongService) {
    
  }

  ngOnInit(): void {
    this.songService.getAlbums()
      .subscribe({
        next: (data : Album[]) => {
          this.albums = data,
          this.filteredAlbums = this.albums;
        },
        error: (err) =>  console.log(err)
      })
  }

  onClick(album : Album) {
    this.selectedAlbum = album;
  }
}

