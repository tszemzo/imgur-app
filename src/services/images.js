import api from './api';
import { SORT, SECTIONS, WINDOW } from '../utils/constants';

function getGalleryImages(section = SECTIONS.HOT, sort = SORT.VIRAL, window = WINDOW.DAY, showViral = true) { // default values by the API
  return api.get(`https://api.imgur.com/3/gallery/${section}/${sort}/${window}?showViral=${showViral}`);
}

export {
  getGalleryImages,
}
