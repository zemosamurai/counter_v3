import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Component/Counter";

function App() {
    const minValue = 0
    const maxValue = 5
    const [count, setCount] = useState<number>(minValue)

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCount(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(count))
    }, [count])

    return (
        <div>
            <Counter count={count} setCount={setCount} minValue={minValue} maxValue={maxValue}/>
        </div>
    );
}

export default App;
