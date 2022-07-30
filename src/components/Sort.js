import React from 'react'
import './Sort.css';


class Sort extends React.Component{
         
    state = {
     price: "520 ₽",
     sum:1,
     balance:this.props.balance,
     selectedItem:this.props.selectedItem,
     code: this.props.code,
   
      }
    
      render(){  
        return  ( 
          <div className=' main__sort'>
          <span className='sort__word'>Сортировка по:</span> <span>популярности</span>
          <div className="sort__popup">
                <ul>
                  <li className="active">популярности</li>
                  <li>цене</li>
                  <li>алфавиту</li>
                </ul>
              </div>
          </div>
     
          
        )
      }
      
      }
      
      export default Sort