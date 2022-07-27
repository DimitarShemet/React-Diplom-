
import React from 'react'
import './App.css';
import logo from "./img/logo.jpg"; 
import Basket from "./components/Basket.jsx"; 
import Category from "./components/Category"; 
import Sort from './components/Sort';
import Pizza from './components/Pizza';
import categoriesJson  from './categories.json'
import pizzaJson  from './pizza.json'
import isoFetch from 'isomorphic-fetch';

  //let data=fetch("http://localhost:3001/pizzas").then(arg=>arg.json()).then(data=>console.log(data))


class App extends React.Component{

         
  state = {
    price:301,
  //  arr1: data,
   arr: pizzaJson['pizzas'],
   sum:1,
   balance:this.props.balance,
   selectedItem:this.props.selectedItem,
   code: this.props.code,
    }
  
    render(){  
      return  <div className="wrapper">
    <div className="inner">
      <header>
          <div className={"header__logo"}>
            <img width="38" height="43" src={logo} />
              <div className='header__title'>
                <h1>React Pizza</h1>
                <p>самая вкусная пицца во вселенной</p>
              </div>
            </div>
            <Basket price={this.state.price} sum={this.state.sum}/>
      </header>
      <main>
        <div className='main__top'> 
              <ul className='main__categories'>

                {categoriesJson.map( (elem)=>(
                <Category name={elem.name} key={elem.id}/>
                ))}

              </ul>
              <div className=' main__sort'>
              <span className='sort__word'>Сортировка по:</span>
              <Sort/>
              </div>
              </div>
                <div className='main__title'>Все пиццы</div>
                <div className='main__items'>
                  {this.state.arr.map(elem=>(
                   <Pizza name={elem.name} key={elem.id} url={elem.imageUrl} price={elem.price} sizes={elem.sizes}/>
                  ) )}
                </div>
    

      </main>
    </div>
    </div> 
  

    }
    
    }
    
    export default App
    








