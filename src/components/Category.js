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
    
      render(){  
        return  (
      <li className='category'>
        {this.props.name}
      </li>  
        )
      }
      
      }
      
      export default Category