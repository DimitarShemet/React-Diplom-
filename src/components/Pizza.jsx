
import React from 'react';
import './Pizza.css';
import plus from "../img/plus.svg"
import Dough from './Dough';
import Size from './Size';
class Pizza extends React.Component{
         
    state = {
     price: "520 ₽",
     sum:1,
     balance:this.props.balance,
     selectedItem:this.props.selectedItem,
     code: this.props.code,
     arrDough:[{"name":"тонкое","code":1},
     {"name":"традиционное","code":2} ],
     size:[26,30,40],
     newSelectedDough:1,
     newSelectedSize:0
      }
      cbSelectedDough =(codeSelectedButton)=>{ 
        this.setState({newSelectedDough:codeSelectedButton})
       }
       cbSelectedSize =(codeSelectedSize)=>{ 
        this.setState({newSelectedSize:codeSelectedSize})
        this.props.cbSize(codeSelectedSize)
       }
      render(){  
        return  (
      <div className='pizza__block'>
        <div className='pizza__img'><img src={this.props.url}  width={260+"px"} height={260+"px"}/></div>
        <div className='pizza__title'>{this.props.name}</div>
        <div className='pizza__option'>
        <ul >
        {this.state.arrDough.map((elem)=>(
    <Dough key={elem.code} dough={elem.name}  code={elem.code} cbSelected={this.cbSelectedDough} selectedButton={this.state.newSelectedDough}></Dough>
     ))} 
    </ul>
    <ul>
      {this.state.size.map((elem,index)=>(
        <Size size={this.props.sizes} key={index} code={index} cbSelected={this.cbSelectedSize} selectedButton={this.state.newSelectedSize}/>
      )
      
      )}
    </ul>
        </div>


          

        <div className='pizza__footer'>
          <div className='pizza__footer__price'>{this.props.price +" ₽"}</div> 
          <div className='pizza__footer__button'>
          <img src={plus}></img>
      <span> Добавить</span></div> 
          
          
          </div>
      </div>
        
      
      
      )
      }
      
      }
      
      export default Pizza