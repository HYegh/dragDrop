import GetPhotos from '../../api'

export const GET_TAGS = 'GET_TAGS'
export const GET_PICTURES = 'GET_PICTURES'
export const GET_IMAGES = 'GET_IMAGES'
export const GET_ALBUM = 'GET_ALBUM'
export const CHANGE_EMPTYPICTURES = 'CHANGE_EMPTYPICTURES'

export const getTags = ( data ) => {
	return { type: GET_TAGS, payload: data }
}

export const getPictures = ( data ) => {
	return { type: GET_PICTURES, payload: data }
}

export const dispatchGetPictures = ( tags, data ) => {
	return (dispatch) => {
		dispatch(getTags(tags))
		GetPhotos(data, tags)
		.then(arr => {
			for (let i = arr.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [arr[i], arr[j]] = [arr[j], arr[i]];
      }
			dispatch(getPictures(arr))
		})
		.then(res => {
			let images = {}
			for (let i = 0; i < tags.length; i++) {
         images[tags[i]] = [];
      }
      dispatch(getImages(images))
		})
	}
}

export const getImages = (data) => {
	return { type: GET_IMAGES, payload: data }
}

export const getAlbum = (data) => {
	return { type: GET_ALBUM, payload: data }
}

export const changeEmptyPictures = () => {
	return { type: CHANGE_EMPTYPICTURES }
}