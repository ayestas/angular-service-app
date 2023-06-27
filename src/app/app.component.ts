import { Component } from '@angular/core';
import { Song } from './models/song';
import { SongService } from './services/song.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'utunes';
  songs !: Array<Song>;
  filteredSongs !: Array<Song>;
  selectedSong ?: Song;

  constructor(private songService: SongService) {

  }

  ngOnInit(): void {
    this.songService.getSongs(-1)
    .subscribe({
      next: (data : Song[]) => {
        this.songs = data,
        this.filteredSongs = this.songs;
      },
      error : (err) => console.log(err)
    })
  }

  onClick(song : Song) {
    this.selectedSong = song;
  }

  filterByAlbum(id : number) {
    if(id == 0) {
      this.filteredSongs = this.songs;
      return;
    }
    this.filteredSongs = this.songs.filter((song: Song) => song.albumId == id);
  }
}
