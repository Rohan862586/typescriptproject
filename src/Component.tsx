import React, { useEffect, useState } from 'react';

interface Ival {
    initialvalue: number
  }
  
  
  function Component(props: Ival) {
  
    const [count, setCount] = useState(props.initialvalue)
  
    // useEffect(() => {
    //     console.log("one time useEffect")
    // },[])

    // useEffect(() => {
    //     console.log("one time useEffect")
    // }, [count])


    const setCountValue = () => {
      setCount(count + 1)
    }
  
    return (
      <div className="App">
        <h1>count : {count} </h1>
        <button onClick={setCountValue}> click </button>
      </div>
    );
  }
  
  export default Component;
  