
import React from 'react'
import './App.css';
import logo from "./img/logo.jpg"; 
import Basket from "./components/Basket.jsx"; 
import Category from "./components/Category"; 
import Sort from './components/Sort';
import Pizza from './components/Pizza';
import categoriesJson  from './categories.json'
  


class App extends React.Component{

  state = {
    price:"",
    dataReady: false,
    data: "",
    newSelectedButton:"",
    size:""
  }
  cbSelectedButton =(codeSelectedButton,categoryName)=>{ 
    this.setState({newSelectedButton:codeSelectedButton})
   }
  
   cbAdd =(newPrice)=>{ 
    this.setState({price: Number(this.state.price)+Number(newPrice)})
   }
  componentDidMount() {
    this.loadData();
  }
    loadData = async () =>  {
      var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
      // отдельно создаём набор POST-параметров запроса
      let sp = new URLSearchParams();
      sp.append('f', 'READ');
      sp.append('n', 'SHEMET_PIZZAS_REACT');
  
      try {
          let response=await fetch(ajaxHandlerScript,{ method: 'post', body: sp });
          let data=await response.json();
          let dataItem=data.result
          var obj = JSON.parse(dataItem);
          this.setState({
            dataReady:true,
            data:obj,
          });
        
      }
      catch ( error ) {
          console.error(error);
      }
  }
  
    render(){     
    if ( !this.state.dataReady )
    return <div>загрузка данных...</div>;
  console.log(this.state.size)
      return  <div className="wrapper">
    <div className="inner">
      <header>
          <div className={"header__logo"}>
            <img width="38" height="43" src={logo} />
              <div className='header__title'>
                <h1>React Pizza</h1>
                <p>самая вкусная пицца во вселенной</p>
              </div>
            </div>
            <Basket price={this.state.price} sum={this.state.sum}/>
      </header>
      <main>
        <div className='main__top'> 
              <ul className='main__categories'>

                {categoriesJson.map( (elem)=>(
                <Category name={elem.name} key={elem.id} cbSelected={this.cbSelectedButton}
                code={elem.id} selectedButton={this.state.newSelectedButton} />
                ))}
              </ul>
              <Sort/>
              </div>
                <div className='main__title'>Все пиццы</div>
                <div className='main__items'>
                  {this.state.data.map(elem=>(
                   <Pizza name={elem.name} key={elem.id} url={elem.imageUrl} price={elem.price} sizes={elem.sizes} cbAdd={this.cbAdd}/>
                  ) )}
                   

                   
                </div>
    

      </main>
    </div>
    </div> 
  

    }
    
    }
    
    export default App
    








