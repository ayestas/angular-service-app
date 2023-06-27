import { Component, Input } from '@angular/core';
import { Song } from '../models/song';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {
  @Input() song ?: Song

  constructor(private route: ActivatedRoute, private songService: SongService) {
    
  }

  ngOnInit(): void { 
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id')
      this.songService.getSongById(id)
      .subscribe({
        next : (data : Song) => this.song = data,
        error : (err) => console.log(err)
      });
    })
  }
}
