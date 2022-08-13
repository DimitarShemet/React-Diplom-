import React from 'react'
import Basket from '../components/Basket'
import { NavLink } from 'react-router-dom';
import Pizza from '../components/Pizza';
import './Page1.css';
import {connect} from 'react-redux';
import logo from "../img/logo.jpg"; 

class intPage3 extends React.Component{
         
    state = {
      data: this.props.dataPage3,
      dough:this.props.dough,
      currentPizzaData:"",
      }
      cbAdd =( newReduxObject)=>{ 
        this.setState({currentPizzaData:newReduxObject})
        this.props.dispatch( { type:"ADD", data:newReduxObject });
       }
      
      render(){  
        console.log(this.state.data)
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
                    <div className='header_pages'>
             <NavLink to="/pizzas/1">
            <div className='header__page'>1</div>
            </NavLink>
            <NavLink to="/pizzas/2">
            <div className='header__page'>2</div>
            </NavLink>
            <NavLink to="/pizzas/3">
            <div className='header__page'>3</div>
            </NavLink>
            </div>
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