import React, {useState} from 'react';
import s from "./Counter.module.css";
import {Button} from "./Button";
import {Display} from "./Display";
import {DisplayMode} from "./DisplayMode";

type CounterPropsType = {
    count: number
    setCount: (count: number) => void
    minValue: number
    setMinValue: (value: number) => void
    maxValue: number
    setMaxValue: (value: number) => void
    updateCounter: () => void
}

export const Counter = (props: CounterPropsType) => {
    const {count, setCount, minValue, maxValue, setMinValue, setMaxValue, updateCounter} = props
    const [settingMode, setSettingMode] = useState(false)

    const disableBtn = maxValue <= minValue || minValue < 0

    const onClickUp = () => count < maxValue && setCount(count + 1)
    const onClickReset = () => setCount(minValue)
    const onSaveSetting = () => {
        setSettingMode(false)
        updateCounter()
    }
    const onEditMode = () => setSettingMode(true)


    return (
        <div className={s.wrapper}>
            {settingMode ? (
                <DisplayMode minValue={minValue}
                             setMinValue={setMinValue}
                             maxValue={maxValue}
                             setMaxValue={setMaxValue}/>
            ) : (
                <Display
                    count={count}
                    maxValue={maxValue}/>
            )}

            <div className={s.btnWrapper}>
                {settingMode ? (
                    <Button name={'set'} callback={onSaveSetting} disable={disableBtn} style={s.btn}/>
                ) : (
                    <>
                        <Button name={'inc'} callback={onClickUp} disable={count === maxValue} style={s.btn}/>
                        <Button name={'reset'} callback={onClickReset} disable={false} style={s.btn}/>
                        <Button name={'set'} callback={onEditMode} disable={false} style={s.btn}/>
                    </>
                )}

            </div>
        </div>
    )
};



