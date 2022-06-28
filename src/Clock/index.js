import { useState, useEffect } from 'react';
import './styles.css';
import Timer from "./timer";

export default function Clock() {
  const [date, setDate] = useState(new Date());
  const [switched , setSwitched] = useState(0);
  
  let timerId;
  function padStartDigit(digit) {
    return digit.toString().padStart(2, "0");
  }

  useEffect(() => {
    timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  });

  function toggle (){
    if(switched == 0)
    setSwitched(1) ;
    else if(switched == 1)
    setSwitched(0) ;
  }

  return (
    <>
      <div className="clock-container">
          {
            (switched==0) ?  
            <div className='clock'>
              <span>{padStartDigit(date.getHours())}: </span>
              <span>{padStartDigit(date.getMinutes())}: </span>
              <span>{padStartDigit(date.getSeconds())}</span>
            </div> : <Timer toggle={toggle}/>
          }
          <button className="btn"onClick={toggle}>Timer</button>
      </div>
    </>
  );
}