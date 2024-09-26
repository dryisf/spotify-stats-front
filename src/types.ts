import { SpotifyTimeRange as SpotifyTimeRangeEnum } from 'enums';

export interface Item {
  id: string;
  name: string;
  images: { height: number; url: string; width: number }[];
}

export interface Track extends Item {
  artists: {
    id: string;
    name: string;
  }[];
  albumType: string;
}

export type SpotifyTimeRange =
  (typeof SpotifyTimeRangeEnum)[keyof typeof SpotifyTimeRangeEnum];
