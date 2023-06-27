import { Component, OnInit } from '@angular/core';
import { Song } from '../models/song';
import { SongService } from '../services/song.service';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs !: Array<Song>;
  filteredSongs !: Array<Song>;
  selectedSong ?: Song;

  constructor(private songService : SongService) {
    
  }

  ngOnInit(): void {
    this.songService.getSongs(-1)
      .subscribe({
        next: (data : Song[]) => {
          this.songs = data,
          this.filteredSongs = this.songs;
        },
        error: (err) =>  console.log(err)
      })
  }

  onClick(song : Song){
    this.selectedSong = song;
  }

  filterByAlbum(id : number){
    if(id == 0){
      this.filteredSongs = this.songs;
      return;
    }
    this.filteredSongs = this.songs.filter((song: Song ) => song.albumId == id);
  }
}
