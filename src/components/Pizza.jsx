
import React from 'react';
import './Pizza.css';
import plus from "../img/plus.svg"
class Pizza extends React.Component{
         
    state = {
     price: "520 ₽",
     sum:1,
     balance:this.props.balance,
     selectedItem:this.props.selectedItem,
     code: this.props.code,
   
      }
    
      render(){  
        return  (
      <div className='pizza__block'>
        <div className='pizza__img'><img src={this.props.url}  width={260+"px"} height={260+"px"}/></div>
        <div className='pizza__title'>{this.props.name}</div>
        <div className='pizza__option'>
        <ul >
      <li className="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li className="active">{this.props.sizes[0]+" см"}</li>
      <li>{this.props.sizes[1] +" см"}</li>
      <li>{this.props.sizes[2]+" см"}</li>
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