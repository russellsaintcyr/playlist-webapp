export class Track {
  public uri: string;
  public name: string;
  public coverImage: string;
  public albumName: string;
  // TODO create artists array with IDs for linking
  public mainArtist: string;

  constructor(uri: string, name: string, cover: string, album: string, artists: string) {
    this.uri = uri;
    this.name = name;
    this.coverImage = cover;
    this.albumName = album;
    this.mainArtist = artists;
  }
}
