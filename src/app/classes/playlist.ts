export class Playlist {
  public uri: string;
  public name: string;
  public coverImage: string;

  constructor(uri: string, name: string, cover: string) {
    this.uri = uri;
    this.name = name;
    this.coverImage = cover;
  }
}
