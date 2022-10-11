export interface Video {
  cover: string;
  title: string;
  year: string;
  contentRating: string;
  duration: number;
  id: string;
}

export interface Videos {
  mylist: Video[],
  trends: Video[],
  originals: Video[],
}