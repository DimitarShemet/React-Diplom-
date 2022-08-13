import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Page_Basket from './Page_Basket';
import Main from '../Main';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import dataPizzaReducer from "./dataPizzaReducer";
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
let combinedReducer=combineReducers({
  // редьюсер dataBasketReducer отвечает за раздел state под именем dataPizza
  dataPizza: dataPizzaReducer,
  // + другие редьюсеры
});
let store=createStore(combinedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class PagesRouter extends React.Component {
  state={
    newSelectedButton:""
  }
  cbSelectedButton =(codeSelectedButton)=>{ 
    this.setState({newSelectedButton:codeSelectedButton})
  }
          
  render() {

    return (
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<Main dataReady={this.props.dataReady} 
        data={this.props.data} startData={this.props.startData} dough={this.props.dough} sortArr={this.props.sortArr}/>} />
        <Route path="/basket" element={<Page_Basket/>} />
        <Route path="/pizzas/1" element={<Page1 dataPage1={this.props.dataPage1}  dough={this.props.dough}/>}/>
        <Route path="/pizzas/2" element={<Page2 dataPage2={this.props.dataPage2} dough={this.props.dough} />} />
        <Route path="/pizzas/3" element={<Page3 dataPage3={this.props.dataPage3} dough={this.props.dough}/>} />
      </Routes>
      </Provider>
    );
    
  }

}
    
export default PagesRouter;
    