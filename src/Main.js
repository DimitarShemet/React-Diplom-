
import React from 'react'
import './Main.css';
import logo from "./img/logo.jpg"; 
import Basket from "./components/Basket.jsx"; 
import Category from "./components/Category"; 
import Sort from './components/Sort';
import Pizza from './components/Pizza';
import categoriesJson  from './categories.json'
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

  
class intMain extends React.Component{

  state = {
    price:"",
    totalProducts:"",
    dataReady: this.props.dataReady,
    data: this.props.data,
    startData:this.props.startData,
    newSelectedButton:1,
    size:"",
    dough:this.props.dough,
    sortArr:this.props.sortArr,
    sort:false,
    sortName:"",
    dataForSort:"",
    categoryName:"",
    currentPizzaData:"",
    pizzasCategoryName:"Все"

  
  
  }
  cbSelectedButton =(codeSelectedButton,categoryName)=>{ 
    this.setState({newSelectedButton:codeSelectedButton})
    if(categoryName==="Все")
    this.setState({data: this.state.startData,dataForSort:"",pizzasCategoryName:categoryName})
    if(categoryName==="Мясные"){
      let data=this.state.startData.filter(elem => elem.category===0)
    this.setState({data:data, dataForSort:data,categoryName:categoryName,pizzasCategoryName:categoryName})
    }
    if(categoryName==="Лёгкие"){
      let data=this.state.startData.filter(elem => elem.category===1)
    this.setState({data: data, dataForSort:data,categoryName:categoryName,pizzasCategoryName:categoryName})
    }
    if(categoryName==="Гриль"){
      let data=this.state.startData.filter(elem => elem.category===2)
    this.setState({data:data,dataForSort:data,categoryName:categoryName,pizzasCategoryName:categoryName})
    }
    if(categoryName==="Острые"){
      let data=this.state.startData.filter(elem => elem.category===3)
    this.setState({data: data, dataForSort:data,categoryName:categoryName,pizzasCategoryName:categoryName})

    }
    if(categoryName==="Новые"){
      let data=this.state.startData.filter(elem => elem.category===4)
    this.setState({data: data, dataForSort:data,categoryName:categoryName,pizzasCategoryName:categoryName})
    }
    this.setState({sortName:"", sort:false})
   }
 
  
   cbAdd =( newReduxObject)=>{ 

    this.setState({currentPizzaData:newReduxObject})
    this.props.dispatch( { type:"ADD", data:newReduxObject });
    // this.props.dispatch( { type:"STARTBASKETUPDATE", data:newReduxObject })
   }
   cbSort=(sortWord)=>{
    if(sortWord==="Цене"){
      if(!this.state.dataForSort)
      this.setState({data:this.state.startData.concat().sort(( a, b ) => a.price - b.price)})
      else
      this.setState({data:this.state.dataForSort.sort(( a, b ) => a.price - b.price)})
    }
    if(sortWord==="Спросу"){
      if(!this.state.dataForSort)
      this.setState({data:this.state.startData.concat().sort(( a, b ) => a.rating - b.rating)})
      else
      this.setState({data:this.state.dataForSort.sort(( a, b ) => a.rating - b.rating)})
    }
      this.setState({sortName:sortWord, sort:false})
   }
   sortShow =()=>{ 
    this.setState({sort: !this.state.sort})
   }


    render(){     
      return  <div className="wrapper">
    <div className="inner">
      <header className='header__main'>
      <NavLink to="/">
          <div className={"header__logo"}>
            <img width="38" height="43" src={logo} />
              <div className='header__main__title'>
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
      <main>
        <div className='main__top'> 
              <ul className='main__categories'>

                {categoriesJson.map( (elem)=>(
                <Category name={elem.name} key={elem.id} cbSelected={this.cbSelectedButton}
                code={elem.id} selectedButton={this.state.newSelectedButton} />
                ))}
              </ul>
              <div className=' main__sort'>
          <span className='sort__word' onClick={this.sortShow}>Сортировка по:</span> 
          <span onClick={this.sortShow} style={{color: "orange", borderBottom: 1+"px "+ "dashed " +"#FE5F1E", cursor:"pointer",marginLeft:7}}>{this.state.sortName}</span>
          <div className="sort__popup" style={{boxShadow:!this.state.sort?"none":""}}>
                <ul>
              {this.state.sortArr.map((elem,index)=>(
               <Sort  key={index }name={elem} cbSort={this.cbSort} valueSort={this.state.sort} ></Sort>
              ))}
              </ul>
              </div>
             </div>
              </div>
                <div className='main__title'>{this.state.pizzasCategoryName+" пиццы"}</div>
                <div className='main__items'>
                  {this.state.data.map(elem=>(
                   <Pizza name={elem.name} key={elem.id} id={elem.id} url={elem.imageUrl} price={elem.price} sizes={elem.sizes} cbAdd={this.cbAdd} dough={this.state.dough} rating={elem.rating} />
                  ) )}
                </div>
      </main>
    </div>
    </div> 
    }
    }
    const mapStateToProps = function (state) {
      return { 
        startBasket: state.dataPizza.startBasket,
      }; 
    };
    const Main = connect (mapStateToProps)(intMain);
    export default Main









