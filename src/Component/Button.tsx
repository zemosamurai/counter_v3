import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
    disable: boolean
    style: string
}

export const Button = ({name, callback, disable, style}: ButtonPropsType) => {
    return (
        <button className={style} disabled={disable} onClick={callback}>{name}</button>
    );
};
