import React from 'react';
import s from "./Counter.module.css";
import {Button} from "./Button";
import {Display} from "./Display";

type CounterPropsType = {
    count: number
    setCount: (count: number) => void
    minValue: number
    maxValue: number
}

export const Counter = (props: CounterPropsType) => {
    const {count, setCount, minValue, maxValue} = props

    const onClickUp = () => count < maxValue && setCount(count + 1)
    const onClickReset = () => setCount(minValue)
    const onClickSetHandler = () => {

    }

    return (
        <div className={s.wrapper}>
            <Display count={count} maxValue={maxValue}/>
            <div className={s.btnWrapper}>
                <Button
                    name={'inc'}
                    callback={onClickUp}
                    disable={count === maxValue}
                    style={s.btn}
                />
                <Button
                    name={'reset'}
                    callback={onClickReset}
                    disable={count === minValue}
                    style={s.btn}
                />
                <Button
                    name={'set'}
                    callback={onClickSetHandler}
                    disable={false}
                    style={s.btn}
                />
            </div>
        </div>
    )
};



