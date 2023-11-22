export interface MovieData {
  id?: number;
  title?: string;
  poster_path: string;
  release_date: string;
}

export interface Params {
  params: { id: string };
}

export interface GenreParams {
  id: string;
  name: string;
}
