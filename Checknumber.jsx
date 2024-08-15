import React, { useEffect } from "react";
import {useState} from "react";
import './Number.css';
function Checknumber(){
    const [number1, setNumber1] =useState('') 
    const [number2, setNumber2] =useState('')
    const [total, setTotal] =useState(0)
       
    function getValue(e){
        setNumber1(+e.target.value)

    }
    function setValue(n){
        setNumber2(+n.target.value)
    }

    function addNumber(){
        
        setTotal(number1+number2)
        console.log(number1+number2)
    }

    useEffect(()=>{
        if(total%2==0){
          return setTotal(number1+number2)
           
        }
        else{
            return setTotal("result not found")
        }
    },[total])
    


    return (
        <>
        <div id="container">
        <h1>Check a Number is Even Or Odd</h1>
       <input type="number" onChange={getValue}></input>
        <input type="number" onChange={setValue}></input>
      
        <p>{total}</p>
        <button className="demo" onClick={addNumber}>submit</button>
        </div>
        
        
        </>
    )
}

export default Checknumber;