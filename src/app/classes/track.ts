export class Track {
  public uri: string;
  public name: string;
  public coverImage: string;
  public albumName: string;
  public id: string;
  // TODO create artists array with IDs for linking
  public mainArtist: string;
  public rating: number;
  public album: string;
  public progress_ms: number;
  public duration_ms: number;

  constructor(uri: string, name: string, cover: string, album: string, artists: string, id: string, progress_ms: number, duration_ms: number) {
    this.uri = uri;
    this.name = name;
    this.coverImage = cover;
    this.albumName = album;
    this.mainArtist = artists;
    this.id = id;
    this.progress_ms = progress_ms;
    this.duration_ms = duration_ms;
  }
}
