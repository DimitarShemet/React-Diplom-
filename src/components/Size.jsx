import React from 'react'
import './Size.css';


class Size extends React.Component{
         
    state = {
     selectedItem:this.props.selectedItem,
     code: this.props.code,
      }
      buttonSizeClicked=(EO)=>{
        EO.stopPropagation()
        this.props.cbSelected(this.props.code)
        
      
    }
    
      render(){  
        return  (
       <li className={this.props.selectedButton===this.props.code?"active":""} onClick={this.buttonSizeClicked}> { this.props.size[this.props.code]+" см"}</li>
    )
      }
      
      }
      
      export default Size