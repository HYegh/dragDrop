import React, {Component} from 'react';
import {connect} from 'react-redux'
import { getPictures, 
         getImages, 
         getAlbum,
         changeEmptyPictures
} from '../store/actions/pictures.action.js'

class Busket extends Component {

  dragOver = (e) => e.preventDefault()
  dragDrop = (e) => {
    let tag = e.target.innerHTML;
    let src = e.dataTransfer.getData('src');
    let tesak = e.dataTransfer.getData('tesak');

    if (tesak === tag) {
      let updatedPictures = this.props.pictures.filter(pic => {
        let imgSrc = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg';
        return imgSrc !== src;
      });
      let images = this.props.images;

      images[tag].push(e.dataTransfer.getData('src'));
      this.props.getImages(images)
      this.props.getPictures(updatedPictures)

      if (!updatedPictures.length) {
        this.props.changeEmptyPictures()
      }
    }
  }

  render() {
    return (
      <div 
        className='item'
        onDragOver={this.dragOver}
        onDrop={this.dragDrop}
        onClick={() => 
            this.props.onClick(this.props.img)}
        text = {this.props.text}
      >
        {this.props.text}
      </div>
    );
  }
}

export default connect(
  (state) => ({
      pictures: state.data.pictures,
      images: state.data.images
  }),
  { getPictures, 
    getImages, 
    getAlbum,
    changeEmptyPictures }
 )(Busket)