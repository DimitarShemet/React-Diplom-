import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Page_Basket from './Page_Basket';
import App from '../App';

class PagesRouter extends React.Component {
          
  render() {

    return (
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/basket" element={<Page_Basket/>} />
      </Routes>
    );
    
  }

}
    
export default PagesRouter;
    