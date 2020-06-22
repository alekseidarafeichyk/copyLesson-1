import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent,} from "react";
import s from './InputNya.module.css'

export type InputNyaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & {
    onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void,
    error?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
};

function InputNya(props: InputNyaPropsType) {
    const {onEnter, error, ...restProps} = props;

    const style = error ? `${s.inputNya} ${s.error}` : `${s.inputNya}`
    return (
        <>
            <input className={`${s.inp} ${style}`} {...restProps}
                   type="text"
                   onKeyPress={onEnter}
                   onChange={props.onChange}
            />
            <span>{error}</span>
        </>
    );
};

export default InputNya;