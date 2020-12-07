export class Track {
  public uri: string;
  public name: string;
  public coverImage: string;
  public albumName: string;
  public id: string;
  // TODO create artists array with IDs for linking
  public mainArtist: string;
  public mainArtistID: string;
  public rating: number;
  public album: string;
  public albumYear: Date;
  public albumID: string;
  public progress_ms: number;
  public duration_ms: number;
  public is_playing: boolean;

  constructor(uri: string, name: string, cover: string, albumName: string, artists: string, id: string, progress_ms: number, duration_ms: number,
              is_playing: boolean, albumYear: Date, albumID: string, mainArtistID: string) {
    this.uri = uri;
    this.name = name;
    this.coverImage = cover;
    this.albumName = albumName;
    this.mainArtist = artists;
    this.id = id;
    this.progress_ms = progress_ms;
    this.duration_ms = duration_ms;
    this.is_playing = is_playing;
    this.albumYear = albumYear;
    this.albumID = albumID;
    this.mainArtistID = mainArtistID;
  }
}
