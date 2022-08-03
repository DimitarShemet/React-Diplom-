import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../img/logo.jpg"; 
import './Page_Basket.css';


class Page_Basket extends React.PureComponent {
          
  render() {

    return (
      <div className="wrapper">
      <div className="inner">
        <header>
        <NavLink to="/">
            <div className="header__logo">
              <img width="38" height="43" src={logo} />
                <div className='header__title'>
                  <h1>React Pizza</h1>
                  <p>самая вкусная пицца во вселенной</p>
                </div>
              </div>
              </NavLink>
        </header>
        </div>
        </div>
    
    );
    
  }

}
    
export default Page_Basket;
    