import React, {ChangeEvent} from 'react';
import s from "./SettingCounter.module.css";

type DisplayPropsType = {
    minValue: number
    setMinValue: (value: number) => void
    maxValue: number
    setMaxValue: (value: number) => void
}

export const DisplayMode = ({maxValue, minValue, setMinValue, setMaxValue}: DisplayPropsType) => {
    const errorMax = maxValue <= minValue
    const error = errorMax || minValue < 0

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => setMaxValue(e.currentTarget.valueAsNumber)
    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => setMinValue(e.currentTarget.valueAsNumber)

    return (
        <div className={s.count}>
            <div>
                <p>max value: </p>
                <input
                    value={maxValue}
                    className={errorMax ? s.errorInput : ''}
                    type={"number"}
                    onChange={onChangeMaxHandler}
                />
            </div>
            <div className={s.elemWrap}>
                <p>start value: </p>
                <input
                    value={minValue}
                    type={"number"}
                    onChange={onChangeStartHandler}
                    className={error ? s.errorInput : ''}
                />
            </div>
        </div>
    )



};