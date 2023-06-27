import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongComponent } from './song/song.component';
import { SongsComponent } from './songs/songs.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  {path: '', component: AlbumComponent},
  {path: 'Albums/:albumId/songs', component: SongsComponent },
  {path: 'Albums/:albumId/songs/:id', component: SongComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
