import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section
      className='section is-flex is-flex-direction-column is-align-items-center is-justify-content-center'
      style={{ minHeight: '50vh' }}
    >
      <div>
        <h1 className='is-size-1-desktop is-size-2-mobile'>Page Not Found</h1>
        <h4 className='is-size-4-desktop is-size-5-mobile has-text-centered'>
          <Link to='/'>Return to the Home Page</Link>
        </h4>
      </div>
    </section>
  );
};

export default NotFound;
