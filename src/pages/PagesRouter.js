import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Page_Basket from './Page_Basket';
import App from '../App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import dataPizzaReducer from "./dataPizzaReducer";
let combinedReducer=combineReducers({
  // редьюсер dataBasketReducer отвечает за раздел state под именем dataPizza
  dataPizza: dataPizzaReducer, 
  // + другие редьюсеры
});
let store=createStore(combinedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class PagesRouter extends React.Component {
          
  render() {

    return (
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/basket" element={<Page_Basket/>} />
      </Routes>
      </Provider>
    );
    
  }

}
    
export default PagesRouter;
    