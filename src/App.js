import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom';
import PagesRouter from './pages/PagesRouter';
import PagesLinks from './pages/PagesLinks';

class App extends React.Component{
         
    state = {
     number:"",
     data: "",
     startData:"",
     dataReady: false,
     dough:"",
     sortArr:"",
     dataPage1:"",
     dataPage2:"",
     dataPage3:"",
     pagesArr:[1,2,3]
      }
      componentDidMount() {
        this.loadData();
      }
        loadData = async () =>  {
          var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
          // отдельно создаём набор POST-параметров запроса
          let sp = new URLSearchParams();
          sp.append('f', 'READ');
          sp.append('n', 'SHEMET_DZMITRY_ARR');
      
          try {
              let response=await fetch(ajaxHandlerScript,{ method: 'post', body: sp });
              let data=await response.json();
              let dataItem=data.result
              var obj = JSON.parse(dataItem);
           
              this.setState({dataReady:true, data:obj, startData:obj, dough:obj[0].arrDough, sortArr:obj[0].sortArr,
                 dataPage1:[...obj].splice(0,20), dataPage2:[...obj].splice(21,20), dataPage3:[...obj].splice(41)});
          }
          catch ( error ) {
              console.error(error);
          }
      }
      cbClickNumber=()=>{
        this.setState({number:Number(this.state.number)+1})
      }
    
      render(){  
        if ( !this.state.dataReady )
        return <div>загрузка данных...</div>;
        return  (
   <Fragment>
 <BrowserRouter>
     <PagesLinks />
     <PagesRouter dataReady={this.state.dataReady} data={this.state.data} startData={this.state.startData} dough={this.state.dough} 
     sortArr={this.state.sortArr} dataPage1={this.state.dataPage1} dataPage2={this.state.dataPage2} dataPage3={this.state.dataPage3} pagesArr={this.state.PagesArr}/>
  </BrowserRouter>

   </Fragment>
    )
      }
      
      }
      
      export default App