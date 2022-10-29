import axios from 'axios';

const API_KEY = 'd14364330a0707cb476c7398b53d6df5';
const GALLERY_ID = '66911286-72157647277042064';
const URL = `https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${API_KEY}&gallery_id=${GALLERY_ID}&format=json&nojsoncallback=1`;

export const getPhoto = async () => {
  const arrayImage: string[] = [];
  const response = await axios.get(URL);
  response.data.photos.photo.forEach(
    (el: {farm: string; server: string; id: string; secret: string}) => {
      let url = `https://farm${el.farm}.staticflickr.com/${el.server}/${el.id}_${el.secret}`;
      url += '.jpg';
      arrayImage.push(url);
    },
  );
  return arrayImage;
};
