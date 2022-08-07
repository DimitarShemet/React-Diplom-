import React  from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../img/logo.jpg"; 
import './Page_Basket.css';
import {connect} from 'react-redux';
import Pizza_Item from '../components/Pizza_Item';
import basket from '../img/basket.svg';
import del from '../img/delete.svg';

class intPage_Basket extends React.Component {
state = {
  dataPizza:this.props.dataPizza,
  update:false
 }
  deleteAllItems=()=>{
    this.props.dispatch( { type:"DEL"});
    this.setState({update:!this.state.update})
  }
  cbDeleteItem=(id,price)=>{
    this.props.dispatch( { type:"DELETEITEM",deleteId:id,deletePrice:price});
  }
  
  render() {
    console.log("render");
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
        <div className='content'>
        <main className="basket_main">
      <div className="basket_main_header">
        <div className='basket_main_header_left'>
        <img src={basket}/>
        <h1 >Корзина</h1>
        </div>
        <div  onClick={this.deleteAllItems}className="basket_main_header_right">
      <img width={20} height={20} src={del}/>
      <p >Очистить корзину</p>
      </div>
      </div>
        {this.props.dataPizza.map(elem=>(
          <Pizza_Item   number={elem.numberSelectedPizza} key={elem.id*elem.price} id={elem.id} name={elem.pizza}  img={elem.img} price={elem.price}  dough={elem.dough} size={elem.size} cbDeleteItem={this.cbDeleteItem}/>
          
         ))} 
        </main>
        <footer className='basket_footer'>
        <div className='basket_footer_data'>
          <p>Всего пицц: <span>{this.props.startBasket.numberProducts}</span></p>
          <p>Сумма заказа: <span className='basket_footer_data_price'>{this.props.startBasket.startPrice+" ₽"}</span></p>
        </div>
        </footer>
        </div>
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
    startBasket:state.dataPizza.startBasket
  };
};

// присоединяем (connect) компонент к хранилищу Redux
const Page_Basket = connect(mapStateToProps)(intPage_Basket);
export default Page_Basket;
    