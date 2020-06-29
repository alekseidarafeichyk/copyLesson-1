import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {arrType} from "../../App";
import s from './Form.module.css'
import InputNya from "../InputNya/InputNya";
import ButtonNya from "../ButtonNya/ButtonNya";

export type FormPropsType = {
    arr: Array<arrType>,
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void,
    error: string,
    sayHi: (name : string) => void
}

function Form(props: FormPropsType) {
    let [valueInput, setValueInput] = useState('')

    const  onClickHandler = () => {
        debugger
      props.sayHi(valueInput);
        setValueInput('')
  }

  let  onEnterHandler = (e : KeyboardEvent<HTMLInputElement>) => {
      props.onEnter(e)
      setValueInput('')
  }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.currentTarget.value);
    }

    return (
        <div className={s.wrapper}>
            <InputNya onEnter={onEnterHandler}
                      error={props.error}
                      onChange={onChangeHandler}
                      value={valueInput}
            />
            <ButtonNya onClick={onClickHandler} >add</ButtonNya>
            <span className={s.span}>{props.arr.length}</span>
        </div>
    );
}

export default Form;