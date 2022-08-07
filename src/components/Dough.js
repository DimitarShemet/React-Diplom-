import React from 'react'
import './Dough.css';


class Dough extends React.Component{
         
    state = {
     selectedItem:this.props.selectedItem,
     code: this.props.code,
      }
      buttonDoughClicked=(EO)=>{
        EO.stopPropagation()
        this.props.cbSelected(this.props.code)
        this.props.cbSelectedPizza(false)
    }
    
      render(){  
        return  (
 
   <li  className={this.props.selectedButton===this.props.code?"active":""} onClick={this.buttonDoughClicked} >{this.props.dough} </li> 
    )
      }
      
      }
      
      export default Dough