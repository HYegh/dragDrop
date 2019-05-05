import React from 'react';
import {connect} from 'react-redux'
import Images from './images'
import Text from './text'

const PicturesWrapper = ({ isPicturesEmpty }) => {
  return  (
    <div className='pictures_wrapper'>
      { isPicturesEmpty ? <Text /> : <Images /> }
    </div>
  )
};

export default connect(
  (state) => ({ 
    isPicturesEmpty: state.data.isPicturesEmpty
  })
)(PicturesWrapper)