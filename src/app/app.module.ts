import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AlbumFilterComponent } from './album-filter/album-filter.component';
import { SongComponent } from './song/song.component';
import { SongsComponent } from './songs/songs.component';
import {MatIconModule} from '@angular/material/icon';
import { AlbumComponent } from './album/album.component'

@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    AlbumFilterComponent,
    SongsComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
