import { Song } from './song';

export interface Album {
    id: number;
    name: string;
    artist: string;
    review: string;
    price: number;
    song: Song;
}