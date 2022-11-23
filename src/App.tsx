import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Component/Counter";

function App() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [count, setCount] = useState<number>(minValue)

    const updateCounter = () => {
        setCount(minValue)
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }
    useEffect(() => {
        let newMinValue = localStorage.getItem('minValue')
        let newMaxValue = localStorage.getItem('maxValue')
        if (newMinValue) {
            setMinValue(JSON.parse(newMinValue))
            setCount(JSON.parse(newMinValue))
        }
        if (newMaxValue) setMaxValue(JSON.parse(newMaxValue))
    },[])

    return (
        <div>
            <Counter
                count={count}
                setCount={setCount}
                minValue={minValue}
                setMinValue={setMinValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                updateCounter={updateCounter}
            />
        </div>
    );
}

export default App;
