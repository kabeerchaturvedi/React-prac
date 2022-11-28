const deReducer = (state={deCount:0},action)=>{
    var currentState = state.deCount;
    switch(action.type){
        case "DEC": 
        return Object.assign({},state,{deCount:currentState+parseInt(action.step)});
        default: 
        return state;
    }
}

export default deReducer;