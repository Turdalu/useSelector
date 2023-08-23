import { createStore } from "redux"


const initlState={
    sun:10,
    isValid:true,
    arr:[{input: "TURDALY"},{input:"test"}],
}
console.log([{input: "TURDALY"},{input:"test"}]);


const reducerCalculator=(state=initlState,action)=>{
    console.log(action);
    if(action.type === 'red'){
        return{
            ...state,
            sun:state.sun + 5,
            isValid:false   
        } 
    }
    if(action.type === 'redd'){
        return{
            ...state,
            sun:state.sun * 5,
            isValid:false   
        } 
    }
    if(action.type === 'turdaly'){
        return{
            ...state,
            sun:state.sun / 5,
            isValid:false   
        } 
    }
    if(action.type === 'turdaly.com'){
        return{
            ...state,
            sun:state.sun - 5,
            isValid:false   
        } 
    }
  
 
    return state

} 


export const store = createStore(reducerCalculator)

