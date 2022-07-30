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
       this.props.cbSelected(this.props.code)
    }
    
      render(){  
        return  (
          
      <li className='category' onClick={this.buttonClicked} style={{backgroundColor:(this.props.selectedButton===this.props.code)?'orange':'white'}}>
        {this.props.name}
      </li>  
        )
      }
      
      }
      
      export default Category