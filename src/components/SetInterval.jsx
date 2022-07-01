import React, { useEffect, useState } from 'react'

const SetInterval = () => {
    const [count, setCount] = useState(0);

    const startTimer = () => {
        setInterval (() => {
            setCount((prev) => prev+1);
        },1000);
    };

    useEffect (() => {
        startTimer();
    }, []);
  return (
    <div>
        <div>
            <h3>Timer: {count}</h3>
        </div>
    </div>
  )
}

export default SetInterval