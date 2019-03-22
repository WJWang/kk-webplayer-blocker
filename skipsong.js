const ARTIST_ID_BLACKLIST = [
  'i5cq9UqFX9hxFr30F0moD08J',
];

setInterval(() => {
  if (!!~ARTIST_ID_BLACKLIST.indexOf(JSON.parse(localStorage.getItem('ngStorage-playing')).current.song.artist_id)) {
    []
      .filter
      .call(document.querySelector('#player > div.controls').children, child => child.getAttribute('title') === '下一首')
      .forEach((el) => {
        if (el.fireEvent) {
          el.fireEvent('onclick');
        } else {
          el.dispatchEvent(new Event('click'));
        }
      });
  }
}, 1000);
