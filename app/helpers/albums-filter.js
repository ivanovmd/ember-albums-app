import { helper } from '@ember/component/helper';

export default helper(function albumsFilter([albums, term]) {
  if (term) {
    term = term.toLowerCase();
  
    albums = albums.filter(album => {
        let matches = [];
        Object.keys(album).forEach(key => {
            if (key !== 'albumArtUrl') {
                const value = album[key].toString().toLowerCase();
                matches.push(value.includes(term));
            }
        });
        return matches.includes(true);
    });
  }

  return albums;
});
