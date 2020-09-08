import React, {ChangeEvent, memo} from 'react';
import style from './Range.module.css'


type RangePropsType = {
    minValue: number
    maxValue: number
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Range =  React.memo(  (props: RangePropsType) => {
    return (
        <div className={style.wrap}>
            <span className={style.spanValue}>{props.value}</span>
            <input  type='range' value={props.value} onChange={props.onChange}/>
            <span className={style.span}>min value: {props.minValue}</span>
            <span className={style.span}> max value: {props.maxValue}</span>
        </div>
    )
})