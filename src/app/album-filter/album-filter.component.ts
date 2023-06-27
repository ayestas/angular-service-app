import { Component, EventEmitter, Output } from '@angular/core';
import { Album } from '../models/album';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-album-filter',
  templateUrl: './album-filter.component.html',
  styleUrls: ['./album-filter.component.css']
})
export class AlbumFilterComponent {
  albums !: Album[];

  constructor(private songService: SongService) {
    this.songService.getAlbums()
      .subscribe({
        next: (data : Album[]) => {
          this.albums = data;
        },
        error: err => console.log(err)
      })
  }

  @Output() changed = new EventEmitter<number>();

  ngOnInit() { }

  onChange(target : any) {
    this.changed.emit(parseInt(target.value));
  }
}
