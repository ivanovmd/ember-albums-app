import Component from '@ember/component';

export default Component.extend({
    mostFrequentArtist: null,
    actions: {
        sort(sortBy, asc) {
            this.set('sortBy', sortBy);
            if (asc) {
                this.albums.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1);            
            } else {
                this.albums.sort((a, b) => a[sortBy] < b[sortBy] ? 1 : -1);            
            }
            this.set('albums', [...this.albums]);
        },

        addAlbum() {
            if (this.title && this.artist && this.releaseDate && this.albumArtUrl) {
                const album = {title: this.title, artist: this.artist, releaseDate: this.releaseDate, albumArtUrl: this.albumArtUrl};
                this.set('albums', [...this.albums, album]);
                this.set('title', null);
                this.set('artist', null);
                this.set('releaseDate', null);
                this.set('albumArtUrl', null);
            }
        },

        deleteAlbum(id) {
            this.albums.splice(id, 1);
            this.set('albums', [...this.albums]);
        },

        clearSearch() {
            this.set('searchTerm', '');
        },

        swapAlbums() {
            this.albums.forEach((album, i) => {
                if (i % 2 === 0 && i !== this.albums.length - 1) {
                    [this.albums[i], this.albums[i + 1]] = [this.albums[i + 1], this.albums[i]];
                }
            });

            this.set('albums', [...this.albums]);
        },

        highlightMostFrequentArtist() {
            let artistsCount = {};
            this.albums.forEach(album => {
                if (!artistsCount[album.artist]){
                    artistsCount[album.artist] = 1;
                } else {
                    artistsCount[album.artist] += 1;
                }
            });
        
            let mostFrequentArtist = Object.keys(artistsCount).sort((a, b) => { 
                return artistsCount[a] > artistsCount[b] ? 1 : -1;
            }).pop();

            this.set('mostFrequentArtist', mostFrequentArtist);
        },

        randomAlbum() {
            let random = Math.floor(Math.random() * this.albums.length);
            this.set('albums', [this.albums[random]]);
        }
    }
});
