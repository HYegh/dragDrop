import React from 'react';
import {connect} from 'react-redux'

const Text = ({ firstTime }) => {
  return (
    <div 
      className='text'>
      { firstTime ? 'Search pics to sort' : 'Search new pics to sort' }
    </div>
  );
}

export default connect(
   (state) => ({firstTime: state.data.firstTime}),
 )(Text)