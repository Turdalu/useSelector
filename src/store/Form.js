import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  const [input,setInput] = useState('')
  console.log(input);

  const nameValue = (el) =>{
    setInput(el.target.value)
  }

  const ClickMee = () =>{
    const obj = {
      input:input
    }
    dispatch({type: "TURDALY", payload: obj})
  }


  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(data);

  const clickHandler = () => {
    dispatch({type: "red" });
  };
  const clickHandlerr = () => {
    dispatch({type: "redd" });
  };
  const clickHandlerrr = () => {
    dispatch({type: "turdaly" });
  };
  const clickHandlerrrrr = () => {
    dispatch({type: "turdaly.com" });
  };

  return (
    <div>
      <button onClick={clickHandler}>+5</button>
      <button onClick={clickHandlerr}>*5</button>
      <button onClick={clickHandlerrr} >/5</button>
      <button onClick={clickHandlerrrrr}>-5</button>
      <h1>{data.sun}</h1>
      <input onChange={nameValue} type=""/>
      <button onClick={ClickMee}>ADD</button>
    </div>
  );
};

export default Form;
