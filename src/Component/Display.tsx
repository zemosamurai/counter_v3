import React from 'react';
import s from "./Counter.module.css";

type DisplayPropsType = {
    count: number
    maxValue: number
}

export const Display = ({count, maxValue}: DisplayPropsType) => {
    const style = s.count + (count === maxValue ? ' ' + s.error : '')
    return <div className={style}>{count}</div>
};

