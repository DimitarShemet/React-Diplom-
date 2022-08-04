import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../img/logo.jpg"; 
import './Page_Basket.css';
import {connect} from 'react-redux';
import Pizza_Item from '../components/Pizza_Item';
import basket from '../img/basket.svg';
import del from '../img/delete.svg';



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
        <main className="basket_main">
      <div className="basket_main_header">
        <div className='basket_main_header_left'>
        <img src={basket}/>
        <h1 >Корзина</h1>
        </div>
        <div className="basket_main_header_right">
      <img width={20} height={20} src={del}/>
      <p>Очистить корзину</p>
      </div>
      </div>
        {this.props.dataPizza.map(elem=>(
          <Pizza_Item  key={elem.id} name={elem.pizza}  img={elem.img} price={elem.price}  dough={elem.dough} size={elem.size}/>
          
         ))} 
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
    