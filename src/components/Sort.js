import React, { Fragment } from 'react'
import './Sort.css';


class Sort extends React.Component{
         
    state = {
     sort:""
   
      }
      sort=()=>{ 
       this.props.cbSort(this.props.name)
       }
      render(){  
        return  ( 
        <Fragment>
          {this.props.valueSort?  
          <li onClick={this.sort} >{this.props.name}</li>:""}
        </Fragment>
               
                  
              
             
     
          
        )
      }
      
      }
      
      export default Sort