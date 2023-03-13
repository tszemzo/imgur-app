import api from './api';

function getGalleryImages(section, sort, showViral) {
  return api.get(`https://api.imgur.com/3/gallery/${section}/${sort}/?showViral=${showViral}`);
}

export {
  getGalleryImages,
}
