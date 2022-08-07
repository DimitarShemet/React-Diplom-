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
      newState.dataPizza.push(action.data);
      let currentPrice=Number(newState.startBasket.startPrice)
      currentPrice+=Number(action.data.price)
      newState.startBasket.startPrice=currentPrice
       newState.startBasket.numberProducts=newState.dataPizza.length

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
      console.log(action.deleteId)
      let newState={...state};
       let filter= newState.dataPizza.filter(elem=>elem.id!==action.deleteId)
       newState.dataPizza=filter
       let currentPrice=Number(newState.startBasket.startPrice)
       currentPrice-=Number(action.deletePrice)
        newState.startBasket.startPrice=currentPrice
        newState.startBasket.numberProducts--
      return newState;
    }
    
    
    default:
      return state;
  }
}

export default dataPizzaReducer;
