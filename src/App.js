import React from 'react';
import './App.css';
import StarSpecial from './icons/Social/star-special.js';
import StarSpecial2 from './icons/Social/star-special-2.js';
import Star from './icons/Social/star.js';
import Search from './icons/Form/search.js';
import Send from './icons/Form/send.js';
import ProfielCircle from './icons/User/profile-circle.js';
import LocationPin from './icons/Navigation/location-pin.js';
import Compass from './icons/Navigation/compass.js';
import Chevron from './icons/Common/chevron.js';
import Arrow from './icons/Common/arrow.js';
import Like from './icons/Social/like.js';
import Dislike from './icons/Social/dislike.js';
import Flag from './icons/Social/flag.js';
import Ribbon from './icons/Social/ribbon.js';
import Heart from './icons/Social/heart.js';
import Pen from './icons/Document/pen.js';
import Pen2 from './icons/Document/pen2.js';
import PenCircle from './icons/Document/pen-circle.js';
import PenSquare from './icons/Document/pen-square.js';
import DocumentFilled from './icons/Document/document-filled.js';
import MapEmpty from './icons/Navigation/map-empty.js';
import LocationMarker from './icons/Navigation/location-marker.js';
import MapPointer from './icons/Navigation/map-pointer.js';
import GlobeEquator from './icons/Navigation/globe-equator.js';
import GlobeAxis from './icons/Navigation/globe-axis.js';

function App() {

  return (
    <div className="App">
      <StarSpecial />
      <StarSpecial2 />
      <Star />
      <Search />
      <Send />
      <ProfielCircle />
      <LocationPin />
      <Compass />
      <Like />
      <Dislike />
      <Flag />
      <Heart />
      <Ribbon />
      <Pen />
      <Pen2 />
      <PenCircle />
      <MapEmpty />
      <PenSquare />
      <LocationMarker />
      <MapPointer />
      <DocumentFilled />
      <GlobeEquator />
      <GlobeAxis />
      <Chevron direction="down" />
      <Arrow direction="left" />
    </div>
  );
}

export default App;
