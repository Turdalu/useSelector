import React from 'react'
import { useSelector } from 'react-redux'

function Dispaht() {

    const data = useSelector((state)=>state)
    console.log(data.arr);

  return (
    <div>
        {
            data.arr.map((el)=>(
                <h1>{el.input}</h1>
            ))
        }
    </div>
  )
}

export default Dispaht