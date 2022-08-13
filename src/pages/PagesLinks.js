import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

class PagesLinks extends React.Component {
          
  render() {

    return (
      <Fragment>
        <NavLink to="/" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}></NavLink>
       
      </Fragment>
    );
    
  }

}
    
export default PagesLinks;
