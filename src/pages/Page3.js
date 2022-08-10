import React from 'react'
import Basket from '../components/Basket'
import { NavLink } from 'react-router-dom';
import Pizza from '../components/Pizza';
import './Page1.css';
import {connect} from 'react-redux';
import logo from "../img/logo.jpg"; 

class intPage3 extends React.Component{
         
    state = {
        dataReady: false,
        data: "",
        dough:"",
        currentPizzaData:""
      }
      cbAdd =( newReduxObject)=>{ 
        this.setState({currentPizzaData:newReduxObject})
        this.props.dispatch( { type:"ADD", data:newReduxObject });
       }
      componentDidMount() {
        this.loadData();
      }
        loadData = async () =>  {
          var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
          // отдельно создаём набор POST-параметров запроса
          let sp = new URLSearchParams();
          sp.append('f', 'READ');
          sp.append('n', 'SHEMET_DZMITRY_ARR');
      
          try {
              let response=await fetch(ajaxHandlerScript,{ method: 'post', body: sp });
              let data=await response.json();
              let dataItem=data.result
              var obj = JSON.parse(dataItem);
              this.setState({dataReady:true, data:obj.splice(41), dough:obj[0].arrDough});
          }
          catch ( error ) {
              console.error(error);
          }
      }
     
    
      render(){  
        console.log(this.state.data)
        if ( !this.state.dataReady )
         return <div>загрузка данных...</div>;
        return  (
            <div className="wrapper">
            <div className="inner">
              <header className='page_header'>
              <NavLink to="/">
                  <div className={"header__logo"}>
                    <img width="38" height="43" src={logo} />
                      <div className='header__title'>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                      </div>
                    </div>
                    </NavLink>
                    <NavLink to="/basket">
                    <Basket price={this.props.startBasket.startPrice} totalProducts={this.props.startBasket.numberProducts}/>
                    </NavLink>
              </header>
              <div className='main__items'>
                  {this.state.data.map(elem=>(
                   <Pizza name={elem.name} key={elem.id} id={elem.id} url={elem.imageUrl} price={elem.price} sizes={elem.sizes}  cbAdd={this.cbAdd} dough={this.state.dough} rating={elem.rating} />
                  ) )}
                </div>
              </div>
              </div>
    )
      }
      }
      const mapStateToProps = function (state) {
        return { 
          startBasket: state.dataPizza.startBasket,
        }; 
      };
      const Page3 = connect (mapStateToProps)(intPage3);
      
      export default Page3