import React from 'react';
import './Category.css';

class Category extends React.Component{
         
    state = {
     price: "520 ₽",
     sum:1,
     balance:this.props.balance,
     selectedItem:this.props.selectedItem,
     code: this.props.code,
      }
      buttonClicked=(EO)=>{
        EO.stopPropagation()
       this.props.cbSelected(this.props.code,this.props.name)
    }
    
      render(){  
        return  (
          
      <li className='category' onClick={this.buttonClicked} style={{backgroundColor:(this.props.selectedButton===this.props.code)?'orange':'#F9F9F9'}}>
        {this.props.name}
      </li>  
        )
      }
      
      }
      
      export default Category