import React from 'react'
import './Pizza_Item.css';


class Pizza_Item extends React.Component{
         
    state = {
  
      }
     
    
      render(){  
        return  (
      <div className='pizza_item'>
         <div className='pizza_item_left'>
            <img width={80} height={80} src={this.props.img}/>
            <div>
             <h2>{this.props.name}</h2>
             <div>
             <span>{this.props.dough+" ,"}</span> <span>{this.props.size+" см"}</span>
             </div>
            </div>
         </div>
      </div>
    )
      }
      
      }
      
      export default Pizza_Item