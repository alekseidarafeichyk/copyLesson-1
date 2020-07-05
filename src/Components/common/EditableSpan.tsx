import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import InputNya from "../InputNya/InputNya";
import s from './EditableSpan.module.css'
import ButtonNya from "../ButtonNya/ButtonNya";
import {restoreState, saveState, StateType} from "../LocalStorage/localstorage";

type EditableSpan = {
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    setValue: (value: string) => void
}

function EditableSpan(props: EditableSpan) {
    let [editMode, setEditMode] = useState<boolean>(true)

    const changeEditMode = () => setEditMode(!editMode)

    const onCLickSaveState = () => {
        saveState<StateType>("test", {inputValue: props.value});
    }

    const onCLickRestoreState = () => {
        const state: StateType = restoreState<StateType>("test", {inputValue: ""});
        props.setValue(state.inputValue)
    }

    return (
        <div className={s.container}>
            {
                editMode ?
                    <span onClick={changeEditMode}>{props.value}</span> :
                    <InputNya
                        onEnter={props.onEnter}
                        error={props.error}
                        autoFocus onBlur={changeEditMode}
                        value={props.value}
                        onChange={props.onChange}/>}
            <div>
                <ButtonNya onClick={onCLickSaveState}>save</ButtonNya>
                <ButtonNya onClick={onCLickRestoreState}>restore</ButtonNya>
            </div>
        </div>
    );
}

export default EditableSpan;