import React from 'react'
import './Pizza_Item.css';
import del  from '../img/del.svg';


class Pizza_Item extends React.Component{
         

    state = {
      dough:this.props.dough===1?"Тонкое тесто":"Традиционное тесто",
      size: this.props.size===0?26:(this.props.size===1?30:40)
      }
     deleteItem=()=>{
      this.props.cbDeleteItem(this.props.id,this.props.price)
     }
    
      render(){ 
        return  (
      <div className='pizza_item'>
         <div className='pizza_item_left'>
            <img width={80} height={80} src={this.props.img}/>
            <div>
             <h2>{this.props.name}</h2>
             <div>
             <span>{this.state.dough+", "}</span> <span>{this.state.size+" см"}</span>
             </div>
            </div>
         </div>
         <div className='pizza_item_number'>
          {this.props.number}
         </div>
         <div className='pizza_item_price'>
           {this.props.price+" ₽"}
         </div>
         <div onClick={this.deleteItem} className='pizza_item_delete'>
         <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M8.74791 6.95572L6.49931 4.70712L8.74791 2.45852C9.16184 2.04459 9.16184 1.37338 8.74791 0.959454C8.33398 0.545525 7.66277 0.545525 7.24884 0.959454L5.00024 3.20805L2.75164 0.959454C2.33771 0.545525 1.66651 0.545525 1.25258 0.959454C0.838648 1.37338 0.838648 2.04459 1.25258 2.45852L3.50118 4.70712L1.25258 6.95572C0.838648 7.36965 0.838648 8.04086 1.25258 8.45479C1.66651 8.86872 2.33771 8.86872 2.75164 8.45479L5.00024 6.20619L7.24884 8.45479C7.66277 8.86872 8.33398 8.86872 8.74791 8.45479C9.16184 8.04086 9.16184 7.36965 8.74791 6.95572Z" fill="#D0D0D0"/>
        </svg>
         </div>
         
         
      </div>
    )
      }
      
      }
      
      export default Pizza_Item