import {
	GET_TAGS, 
	GET_PICTURES, 
	GET_IMAGES,
	GET_ALBUM,
	CHANGE_EMPTYPICTURES
} from '../actions/pictures.action'

const initState = {
  tags: [],
  searchingText: '',
  pictures: [],
  images: {},
  albumImages: [],
  isPicturesEmpty: true,
  firstTime: true
}
  
const PicturesReducer = (state = initState, action) => {
	switch (action.type) {
		case GET_TAGS:
			return {
				...state, 
				tags: action.payload
			}
		case GET_PICTURES:
			return {
				...state, 
				pictures: action.payload,
				isPicturesEmpty: false,
				firstTime: false,
        albumImages: []
			}
		case GET_IMAGES:
			return {
				...state, 
				images: action.payload
			}
		case GET_ALBUM:
			return {
				...state, 
				albumImages: action.payload
			}
		case CHANGE_EMPTYPICTURES:
			return {
				...state, 
				isPicturesEmpty: true
			}
		default: 
			return state
	}
}

export default PicturesReducer