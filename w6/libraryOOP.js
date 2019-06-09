class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  addPlaylist(playlist) {
    this.playlists.push(playlist);
  }
}

class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
  }

  addTrack(track) {
    this.tracks.push(track);
  }

  overallRating() {
    let sumRating = 0;
    let numberOfTracks = this.tracks.length;

    for (var i = 0; i < this.tracks.length; i++) {
      sumRating += this.tracks[i].rating;
    }

    return sumRating / numberOfTracks;
  }

  totalDuration() {
    let sumLength = 0;

    for (var i = 0; i < this.tracks.length; i++) {
      sumLength += this.tracks[i].trackLength;
    }

    return sumLength;
  }
}

class Track {
  constructor(title, rating, trackLength) {
    this.title = title;
    this.rating = rating;
    this.trackLength = trackLength;
  }
}

const song2 = new Track("song2", 3, 150);
const labamba = new Track("labamba", 5, 180);

// console.log(song2);

const playlist1 = new Playlist("Playlist1");

playlist1.addTrack(song2);
playlist1.addTrack(labamba);

// console.log(playlist1);

const library1 = new Library("Library1", "Rebecca");

library1.addPlaylist(playlist1);

console.log("OVERALL RATING:", playlist1.overallRating());

// console.log('PLAYLIST1: ', playlist1);

console.log("TOTAL DURATION:", playlist1.totalDuration());
