import axios from 'axios'

const GetPhotos = (flickrApis, tags) => {
 return axios.all(flickrApis.map(l => axios.get(l)))
  .then(axios.spread((...responces) => {
      const photos = [];
      for (let j = 0; j < responces.length; j++) {
        let res = responces[j];
        for (let i = 0; i < 5; i++) {
           photos.push({
              ...res.data.photos.photo[Math.floor(Math.random() * 90)],
              'tesak': tags[j]
           })
        }
      }
      return photos
    })
  );
}

export default GetPhotos