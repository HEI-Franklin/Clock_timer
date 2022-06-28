import { useState, useEffect } from 'react';
import './styles.css';

export default function Timer({toggle}){
    const [hour , setHour] = useState(0);
    const [seconde , setSecond] = useState(10);
    const [minute , setMinute] = useState(0);
    
    let timerId ;
  
    function padStartDigit(digit){
        return digit.toString().padStart(2 , "0") ;
    }
  
  useEffect(() => {
    timerId = setInterval(() => {
      (async function(){

        if(seconde === 0 && hour === 0 && minute === 0 ){
          alert("Time is out")
        }

        if(hour === 0 && minute === 0 && seconde === 0 ){
          setMinute(0)  
          setHour(0)
          setSecond(0)
          toggle()
        }

        if(seconde === padStartDigit(0)){
          setMinute(minute - 1) 
          setSecond(59)
        }else{
          setSecond(seconde -1) ;
        }
      })()
  } , 1000) ;
  return () => clearInterval(timerId) ;
  })
  
    return (
        <div className="clock">
            <span>{padStartDigit(hour)} : </span>
            <span>{padStartDigit(minute)} : </span>
            <span>{padStartDigit(seconde)}</span>
        </div>
    );
}