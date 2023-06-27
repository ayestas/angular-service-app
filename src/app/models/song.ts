import { Album } from './album';

export interface Song {
    id: number;
    name: string;
    artist: string;
    price: number;
    albumId: number;
    album: Album;
}