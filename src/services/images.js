import api from './api';
import { SORT, SECTIONS, WINDOW } from '../utils/constants';

function getGalleryImages(section = SECTIONS.HOT, sort = SORT.VIRAL, window = WINDOW.DAY, showViral = true) { // default values by the API
  const url = `${process.env.REACT_APP_IMGUR_BASE_URL}/gallery/${section}/${sort}/${window}?showViral=${showViral}`;
  return api.get(url);
}

export {
  getGalleryImages,
}
