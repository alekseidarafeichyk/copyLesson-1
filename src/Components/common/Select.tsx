import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from "react";
import s from './Select.module.css'

type SelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
    & {
    arr: Array<string>
    value: string
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

function Select(props: SelectPropsType) {
    let options = props.arr.map(el => {
        return <option value={el} key={el}>{el}</option>
    })

    return (
        <select className={s.container}
                value={props.value}
                onChange={props.onChange}
                {...props}
        >
            {options}
        </select>
    )
}

export default Select;