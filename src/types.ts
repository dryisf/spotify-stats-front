export interface Artist {
  id: string;
  name: string;
  images: { height: number; url: string; width: number }[];
}

export interface Track {
  id: string;
  name: string;
  images: { height: number; url: string; width: number }[];
  artists: {
    id: string;
    name: string;
  }[];
  albumType: string;
}
