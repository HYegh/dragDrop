import React from 'react';
import {connect} from 'react-redux'

const Album = (props) => {
  const albumImages = props.albumImages.map((img,i) => {
    return <img 
    					key={i} 
    					src={img} 
    					alt="sdfd" />
  });
  return <div 
  					className='Album'>
        		{albumImages}
   			 </div>
};

export default connect(
   (state) => ({ albumImages: state.data.albumImages })
)(Album)