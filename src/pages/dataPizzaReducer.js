const initState={
  dataPizza: [],
};

// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

function dataPizzaReducer(state=initState,action) {

  switch (action.type) {

    case "ADD": {
      console.log(action.data)
      // хотелось бы просто увеличить state.cnt
      // но редьюсер ВСЕГДА должен возвращаеть новый state а не изменять старый!
      console.log('state до обработки редьюсером:',state);
      let newState={...state};
      newState.dataPizza.push(action.data);
      console.log('state после обработки редьюсером:',newState);
      return newState;
    }
    
    default:
      return state;
  }
}

export default dataPizzaReducer;
