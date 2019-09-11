import Route from '@ember/routing/route';

const albums = [{
    "title": "Souvlaki Space Station",
    "artist": "Slowdive",
    "albumArtUrl": "https://upload.wikimedia.org/wikipedia/en/a/a6/Souvlaki_%28album%29_cover .jpg",
    "releaseDate": 1993
  }, {
    "title": "OK Computer",
    "artist": "Radiohead",
    "albumArtUrl": "https://upload.wikimedia.org/wikipedia/en/a/a1/Radiohead.okcomputer.album art.jpg",
    "releaseDate": 1997
  }, {
    "title": "Like What EP",
    "artist": "Tennyson",
    "albumArtUrl": "https://f4.bcbits.com/img/a1437638858_16.jpg",
    "releaseDate": 2015
  }, {
    "title": "22, A Million",
    "artist": "Bon Iver",
    "albumArtUrl": "https://upload.wikimedia.org/wikipedia/en/6/66/22%2C_A_Million_cover.jpg",
    "releaseDate": 2016
  }, {
    "title": "Kid A",
    "artist": "Radiohead",
    "albumArtUrl": "https://upload.wikimedia.org/wikipedia/en/b/b5/Radiohead.kida.albumart.jp g",
    "releaseDate": 2000
  }];
  
export default Route.extend({
    model() {
        return albums;
    }
});
