import React from 'react';
import {connect} from 'react-redux'
import Busket from "./busket";
import { getAlbum } from '../store/actions/pictures.action.js'

const BusketsContent = ({ getAlbum, tags, images }) => {
  const buskets = tags.map((tag, ind) => (
          <Busket
            key={ind}
            text={tag}
            onClick={() => getAlbum(images[tag])} />
        ));
  return  <div 
           className='buskets'> 
           {buskets} 
          </div>
};

export default connect(
   (state) => ({ 
    images: state.data.images,
    tags: state.data.tags 
    }),
   { getAlbum }
)(BusketsContent)