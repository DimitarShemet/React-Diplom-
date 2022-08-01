
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
    totalProducts:"",
    dataReady: false,
    data: "",
    startData:"",
    newSelectedButton:"",
    size:"",
    dough:"",
    sortArr:["Спросу","Цене"],
    sort:false,
    sortName:""
  }
  cbSelectedButton =(codeSelectedButton,categoryName)=>{ 
    this.setState({newSelectedButton:codeSelectedButton})
    if(categoryName==="Все")
    this.setState({data: this.state.startData})
    if(categoryName==="Мясные")
    this.setState({data: this.state.startData.filter(elem => elem.category===0)})
    if(categoryName==="Лёгкие")
    this.setState({data: this.state.startData.filter(elem => elem.category===1)})
    if(categoryName==="Гриль")
    this.setState({data: this.state.startData.filter(elem => elem.category===2)})
    if(categoryName==="Острые")
    this.setState({data: this.state.startData.filter(elem => elem.category===3)})
    if(categoryName==="Новые")
    this.setState({data: this.state.startData.filter(elem => elem.category===4)})
   }
   
  
   cbAdd =(newPrice)=>{ 
    this.setState({price: Number(this.state.price)+Number(newPrice),totalProducts:Number(this.state.totalProducts)+1})
   }
   cbSort=(sortWord)=>{
    if(sortWord==="Цене")
      this.setState({data:this.state.startData.sort(( a, b ) => a.price - b.price)})
      if(sortWord==="Спросу")
      this.setState({data:this.state.startData})
      this.setState({sortName:sortWord, sort:false})
   }
   sort =()=>{ 
    this.setState({sort: !this.state.sort})
   }

  componentDidMount() {
    this.loadData();
  }
    loadData = async () =>  {
      var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
      // отдельно создаём набор POST-параметров запроса
      let sp = new URLSearchParams();
      sp.append('f', 'READ');
      sp.append('n', 'SHEMET_REACT_PIZZAS');
  
      try {
          let response=await fetch(ajaxHandlerScript,{ method: 'post', body: sp });
          let data=await response.json();
          let dataItem=data.result
          var obj = JSON.parse(dataItem);
          this.setState({
            dataReady:true,
            data:obj,
            startData:obj,
            dough:obj[0].arrDough
            
          });
        
      }
      catch ( error ) {
          console.error(error);
      }
  }
  
    render(){     
      console.log(this.state.startData)
    if ( !this.state.dataReady )
    return <div>загрузка данных...</div>;
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
            <Basket price={this.state.price} totalProducts={this.state.totalProducts}/>
      </header>
      <main>
        <div className='main__top'> 
              <ul className='main__categories'>

                {categoriesJson.map( (elem)=>(
                <Category name={elem.name} key={elem.id} cbSelected={this.cbSelectedButton}
                code={elem.id} selectedButton={this.state.newSelectedButton} />
                ))}
              </ul>
              <div className=' main__sort'>
          <span className='sort__word' onClick={this.sort}>Сортировка по:</span> <span style={{color: "orange",borderBottom: 1+"px "+ "dashed " +"#FE5F1E"}}>{this.state.sortName}</span>
          <div className="sort__popup" style={{boxShadow:!this.state.sort?"none":""}}>
                <ul>
              {this.state.sortArr.map((elem,index)=>(
               <Sort  key={index }name={elem} cbSort={this.cbSort} valueSort={this.state.sort}></Sort>
              ))}
              </ul>
              </div>
             </div>
              </div>
                <div className='main__title'>Все пиццы</div>
                <div className='main__items'>
                  {this.state.data.map(elem=>(
                   <Pizza name={elem.name} key={elem.id} url={elem.imageUrl} price={elem.price} sizes={elem.sizes} cbAdd={this.cbAdd} dough={this.state.dough} />
                  ) )}
                   

                   
                </div>
    

      </main>
    </div>
    </div> 
  

    }
    
    }
    
    export default App
    








