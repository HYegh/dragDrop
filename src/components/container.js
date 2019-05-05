import React from 'react';
import Album from "./album";
import Search from './search'
import BusketsContent from './busketsContent'
import PicturesWrapper from './picturesWrapper'

const Container = () => {
  return (
    <div 
      className='container'>
      <Search />
      <PicturesWrapper />
      <BusketsContent />
      <Album /> 
    </div>
  );
}

export default Container

