const initState={
  dataPizza: [],
  startBasket:{
  startPrice: 0,
  numberProducts:""}
};

// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

function dataPizzaReducer(state=initState,action) {

  switch (action.type) {

case "ADD": {
  
      let newState={...state};
      let currentPrice=Number(newState.startBasket.startPrice)
      currentPrice+=Number(action.data.price)
      newState.startBasket.startPrice=currentPrice
      if(newState.startBasket.numberProducts)
      {if(action.from){
        newState.startBasket.numberProducts+=Number(action.data.numberSelectedPizza)
      }
        else
      newState.startBasket.numberProducts++
      }
      else {
        console.log(action.data)
        console.log(action.data.numberSelectedPizza)
      newState.startBasket.numberProducts=action.data.numberSelectedPizza
      }
      let startPrice=action.data.price
      let index = newState.dataPizza.findIndex((elem) => elem.id === action.data.id);
       if(index>=0){
       newState.dataPizza[index].numberSelectedPizza++ 
        let currentPrice=startPrice*newState.dataPizza[index].numberSelectedPizza  //Получаем итоговую цену за n кол-во пицц
        newState.dataPizza[index].price=currentPrice
      
       }
       else
       newState.dataPizza.push(action.data)
      return newState;
    }
    case "DEL": {
      let newState={...state};
     newState.dataPizza.length=0
     newState.startBasket.startPrice=""
     newState.startBasket.numberProducts=""
      return newState;
    }
    case "DELETEITEM": {
      let newState={...state};
      let index = newState.dataPizza.findIndex((elem) => elem.id === action.deleteId);
      newState.startBasket.numberProducts-=newState.dataPizza[index].numberSelectedPizza         //Убираем кол-во пицц
       let filter= newState.dataPizza.filter(elem=>elem.id!==action.deleteId)                      // Фильтруем массив 
       newState.dataPizza=filter
       let startPrice=Number(newState.startBasket.startPrice)                                        // Ставим новую цену
        let currentPrice=startPrice-Number(action.deletePrice)                                   
        newState.startBasket.startPrice=currentPrice
      return newState;
    }
    
    
    default:
      return state;
  }
}

export default dataPizzaReducer;
