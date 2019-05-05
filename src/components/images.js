import React, {Component} from 'react';
import {connect} from 'react-redux'

class Images extends Component {
  dragStart = (ev, obj) => {
    ev.persist();
    ev.dataTransfer.setData('src', obj.src);
    ev.dataTransfer.setData('tesak', obj.tesak);
  };

  render() {
    return (
        <div className='image'>
          {
            this.props.pictures.map((pic, i) => {
              let src = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg';
              return <img
                key={i}
                alt={pic.id}
                src={src}
                draggable
                onDragStart={ (ev) =>
                  this.dragStart(ev, {src: src, tesak: pic.tesak}) }
              />
            })
          }
        </div>
    );
  }
}

export default connect(
   (state) => ({pictures: state.data.pictures}),
 )(Images)