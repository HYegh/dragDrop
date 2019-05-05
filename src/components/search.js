import React, {Component} from 'react';
import {connect} from 'react-redux'
import {  
  dispatchGetPictures, 
  getPictures
} from '../store/actions/pictures.action.js'

const api = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key'

class Search extends Component {
  state = {
    searchingText: ''
  }


  fetchPhotos = (searchingText) => {
    if (searchingText === '') {
       return;
    }
    let tags = this.trim(searchingText).split(' ');
    let key = '5ff0eb449d9e007769ef845c9f2f7210';
    let flickrApis = [];
    for (let tag of tags) {
      flickrApis.push(`${api}=${key}&tags=${tag}&license=1&format=json&nojsoncallback=1`)
    }
    this.props.dispatchGetPictures(tags, flickrApis)
  }

  trim = (s) => {
    s = s.replace(/(^\s*)|(\s*$)/gi, "");
    s = s.replace(/[ ]{2,}/gi, " ");
    s = s.replace(/\n /, "\n");
    return s;
  };

  changeSearchingText = (e) => {
    this.setState({
      searchingText: e.target.value
    })
  }

  render() {
    return (
      <div 
        className='header'>
        <input 
          type="text" 
          value={this.state.searchingText} 
          onChange={(e) => 
            this.changeSearchingText(e)}/>
        <button 
          onClick={() => 
            this.fetchPhotos(this.state.searchingText)}>
          Search
        </button>
      </div>
    );
  }
}

export default connect(
  (state) => ({pictures: state.data.pictures}),
  { dispatchGetPictures, 
    getPictures }
)(Search)