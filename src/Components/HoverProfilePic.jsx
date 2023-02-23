import React from 'react';
import { MDBRipple } from 'mdb-react-ui-kit';
import '../index.css';
import '../App.js';
import ProfilePic from './Photos/IMG_7369.jpeg';

function HoverProfilePic() {
  return (
    <MDBRipple
      className='bg-image hover-overlay shadow-1-strong rounded'
      rippleTag='div'
      rippleColor='light'
    >
      <img src={ProfilePic} id="profile" className='w-100' />
      <a href='#!'>
        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
      </a>
    </MDBRipple>
  );
}
export default HoverProfilePic;