import React from 'react';

// import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';
import SiteMenu from '../../components/site-menu/site-menu';

const HomePage = () => (
  <div className='homepage'>
    {/* <Directory /> */}
    <SiteMenu />
  </div>
);

export default HomePage;