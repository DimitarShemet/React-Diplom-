import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../img/logo.jpg"; 
import './Page_Basket.css';
import {connect} from 'react-redux';


class intPage_Basket extends React.PureComponent {
          
  render() {
console.log(this.props.dataPizza)
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
        <main>
         {/* {this.props.dataPizza.map(pizza=>(
          
         ))} */}
        </main>
        </div>
        </div>
    
    );
    
  }

}
const mapStateToProps = function (state) {
  return {
    // из раздела Redux с именем dataPizza свойство dataPizza будет доступно
    // данному компоненту как this.props.dataPizza
    dataPizza: state.dataPizza.dataPizza,
  };
};

// присоединяем (connect) компонент к хранилищу Redux
const Page_Basket = connect(mapStateToProps)(intPage_Basket);
export default Page_Basket;
    