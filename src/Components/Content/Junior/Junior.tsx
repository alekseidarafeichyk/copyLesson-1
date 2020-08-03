import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import EditableSpan from '../../common/EditableSpan';
import ButtonNya from '../../ButtonNya/ButtonNya';
import {restoreState, saveState, StateType} from '../../LocalStorage/localstorage';
import Select from '../../common/Select';
import Radio from '../../common/Radio';
import s from './Junior.module.css'
import ArrayPerson from '../../ArrayPerson/ArrayPerson';
import Time from '../../Time/Time';

type JuniorPropsType = {
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void,
    error: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    setValue: (value: string) => void
}

function Junior(props: JuniorPropsType) {
    let arr = ['1', '2', '3']
    let arrRadio = ['vasya', 'petya', 'serega']


    let [selectValue, SetSelectValue] = useState<string>(arr[0])
    let [checkedRadio, SetCheckedRadio] = useState<string>(arrRadio[0])

    const onCLickSaveState = () => {
        saveState<StateType>("test", {inputValue: props.value});
    }

    const onCLickRestoreState = () => {
        const state: StateType = restoreState<StateType>("test", {inputValue: ""});
        props.setValue(state.inputValue)
    }

    const onChangeOptionValue = (e: ChangeEvent<HTMLSelectElement>) => {
        SetSelectValue(e.currentTarget.value)
    }

    const onChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        SetCheckedRadio(e.currentTarget.value)
    }

    return (<div>
            <EditableSpan
                onEnter={props.onEnter}
                error={props.error}
                value={props.value}
                setValue={props.setValue}
                onChange={props.onChange}
            />
            <div className={s.container}>
                <ButtonNya onClick={onCLickSaveState}>save</ButtonNya>
                <ButtonNya onClick={onCLickRestoreState}>restore</ButtonNya>
            </div>
            <div className={s.container}>
                <Select
                    arr={arr}
                    value={selectValue}
                    onChange={onChangeOptionValue}
                />
            </div>
            <div className={s.container}>
                <Radio
                    arr={arrRadio}
                    name={'Ignat'}
                    value={checkedRadio}
                    onChangeRadio={onChangeRadio}
                />
            </div>
            <div><ArrayPerson/></div>
                <Time/>
        </div>
    )
}

export default Junior;