import React from 'react';
import loaderImg from '../../assets/loader.gif';

const Loader = (props) => {
  return (
    <div>
      <img
        src={loaderImg}
        alt="loader icon"
        style={{ width: '100px' }}
      />
    </div>
  )
}

export default Loader;