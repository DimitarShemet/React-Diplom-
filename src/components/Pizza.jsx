
import React from 'react';
import './Pizza.css';
import Dough from './Dough';
import Size from './Size';
import added from '../img/added.png';
class Pizza extends React.Component{
         
    state = {
     price: this.props.price ,
     productAdded:false,
     code: this.props.code,
     arrDough:this.props.dough,
     sizes:this.props.sizes,
     newSelectedDough:1,
     newSelectedSize:0
      }
      
    
   
      
      add=()=>{
       this.props.cbAdd(this.state.price,{pizza:this.props.name,img:this.props.url, price:this.state.price,dough:this.state.newSelectedDough,size:this.state.newSelectedSize})
       this.setState({productAdded:true})

      }
      cbSelectedDough =(codeSelectedButton)=>{ 
        this.setState({newSelectedDough:codeSelectedButton, productAdded:false})
       }
       cbSelectedSize =(codeSelectedSize)=>{          
       if(codeSelectedSize===0)               // 0-маленький размер 
       this.setState({price:this.props.price*1})
       if(codeSelectedSize===1)  // 1-средний размер 
       this.setState({price: Math.floor(this.props.price*1.5)})  
       if(codeSelectedSize===2)                   // 2-большой размер 
       this.setState({price: Math.floor(this.props.price*2)})
       this.setState({newSelectedSize:codeSelectedSize, productAdded:false})   

       }
      render(){  
        return  (
      <div className='pizza__block' style={{position:"relative"}}>
        {this.state.productAdded?<img   src={added}className='productAdded'/>:""}
        <div className='pizza__img'><img src={this.props.url}  width={260+"px"} height={260+"px"}/></div>
        <div className='pizza__title'>{this.props.name}</div>
        <div className='pizza__option'>
        <ul >
        {this.state.arrDough.map((elem)=>(
    <Dough key={elem.code} dough={elem.name}  code={elem.code} cbSelected={this.cbSelectedDough} selectedButton={this.state.newSelectedDough}></Dough>
     ))} 
    </ul>
    <ul>
      {this.state.sizes.map((elem,index)=>(
        <Size size={this.state.sizes} key={index} code={index} cbSelected={this.cbSelectedSize} selectedButton={this.state.newSelectedSize}/>
      )
      
      )}
    </ul>
        </div>


          

        <div className='pizza__footer'>
          <div className='pizza__footer__price'>{this.state.price +" ₽"}</div> 
          <div className='pizza__footer__button' onClick={this.add}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E"/>
          </svg>
         <span > Добавить</span></div> 
        </div>
      </div>
        
      
      
      )
      }
      
      }
      
      export default Pizza