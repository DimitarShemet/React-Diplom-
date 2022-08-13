import React  from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../img/logo.jpg"; 
import './Page_Basket.css';
import {connect} from 'react-redux';
import Pizza_Item from '../components/Pizza_Item';
import basket from '../img/basket.svg';
import {CSSTransition,TransitionGroup} from 'react-transition-group';

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
  
  insertUserData = async  ()=> {
    let dataClient={clientPizzas:this.props.dataPizza,clientSum:this.props.startBasket.startPrice,clientTotalProducts:this.props.startBasket.numberProducts}
    let userName;
    do {
      userName = prompt("Введите ваш логин на английском языке");
    } while (userName === null || userName === "");
 console.log(userName)
var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
let sp = new URLSearchParams();
sp.append('f', 'INSERT');
sp.append('n', userName+"_CLIENT_INFO" );
sp.append('v', JSON.stringify(dataClient));


try {
    let response=await fetch(ajaxHandlerScript,{ method: 'post', body: sp });
    let data=await response.json();
    console.log(data);
    data.result===""?alert("Пользователь под данным логином уже зарегистрирован, попробуйте другой"): alert("Ваш заказ отправлен на сервер!")
  
}
catch ( error ) {
    console.error(error);
}
this.setState({update:!this.state.update})
}
dataRecovery = async () =>  {
  let userName;
  
    userName = prompt("Корзина была очищена. Для восстановления данных введите логин или нажмите 'Отмена' ");
   if (userName === null || userName === "")
   return 
   else{
console.log(userName)
var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
          // отдельно создаём набор POST-параметров запроса
          let sp = new URLSearchParams();
          sp.append('f', 'READ');
          sp.append('n',userName+"_CLIENT_INFO" );
      
          try {
              let response=await fetch(ajaxHandlerScript,{ method: 'post', body: sp });
              let data=await response.json();
              let dataItem=data.result
              var obj = JSON.parse(dataItem);
               let objData=obj.clientPizzas
              objData.forEach(elem=>(
                this.props.dispatch( { type:"ADD", data:elem })
              ))
          }
          catch ( error ) {
              console.error(error);
          }
this.setState({update:!this.state.update})
        }
}
  render() {
    if ( !this.props.startBasket.numberProducts){ 
      setTimeout(this.dataRecovery, 200); 
    }
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
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
         <path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
         <path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
         <path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
         </svg>
      <p className='basket_main_header_right_delete' >Очистить корзину</p>
      </div>
      </div>
      <TransitionGroup>
        {this.props.dataPizza.map((elem,index)=>(
           <CSSTransition
           key={elem.id}
           timeout={500}
           classNames="item"
         >
          <Pizza_Item    number={elem.numberSelectedPizza} key={elem.id*elem.price} id={elem.id} name={elem.pizza}  img={elem.img} price={elem.price}  dough={elem.dough} size={elem.size} cbDeleteItem={this.cbDeleteItem}/>
         </CSSTransition>
         ))} 
         </TransitionGroup>
        </main>
        <footer className='basket_footer'>
        <div className='basket_footer_data'>
          <p>Всего пицц: <span>{this.props.startBasket.numberProducts}</span></p>
          <p>Сумма заказа: <span className='basket_footer_data_price'>{this.props.startBasket.startPrice+" ₽"}</span></p>
        </div>
        <div className='basket_footer_buttons'>
        <NavLink to="/">
          <button className='basket_footer_buttons_back'> 
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          <span>Вернуться</span> <span className='basket_footer_buttons_back_second'>назад</span>
          </button>
          </NavLink>
          <button className="basket_footer_buttons_pay" onClick={this.insertUserData}><span>Оплатить</span> <span className="basket_footer_buttons_pay_second">сейчас</span>
          </button>
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
    