import React, {ChangeEvent, useEffect, useState} from 'react';
import Select from '../../common/Select';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/store';
import {changeThemeAC, themeStateType} from '../../../reducers/themeReducer';
import ButtonNya from '../../ButtonNya/ButtonNya';
import {requestAPI} from '../../../RequestAPI/api';

function JuniorPlus() {
      const dispatch = useDispatch();
      const theme = useSelector<AppRootStateType, themeStateType>(state => state.theme);
      const arrColors = ['green','yellow','grey','pink'];
      const [color,setColor] = useState('green');


    useEffect(() => {
        document.body.style.backgroundColor = theme.color
    }, [theme.color]);


    const changeBackgroundDocument = (e: ChangeEvent<HTMLSelectElement>) => {
          dispatch(changeThemeAC(e.currentTarget.value));
          setColor(e.currentTarget.value);
      }


    //  checkbox value
    const [checkBoxValue, setCheckBoxValue] = useState(false);
    const handleCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckBoxValue(e.target.checked)
    }

    let [errorText,setErrorText] = useState()
    let [info, setInfo] = useState()

    //request
    const request = () => {
        requestAPI.postTest(checkBoxValue)
            .then(res => {
                setErrorText(res.data.errorText)
                setInfo(res.data.info)
            })
            .catch(err => {
                setErrorText(err.response.data.errorText)
                setInfo(err.response.data.info)
            })
    }

    return(
        <>
            <Select
            arr={arrColors}
            value={color}
            onChange={changeBackgroundDocument}
            />
            <div>
            <ButtonNya onClick={request}>request</ButtonNya>
                <input type="checkbox"
                       checked={checkBoxValue}
                       onChange={handleCheckBox}
                />
            </div>
            <div>
                {errorText && info && <div>
                    <div>ErrorText: {errorText}</div>
                    <div>Info: {info}</div>
                </div>}
            </div>
        </>
    )
}

export default  JuniorPlus;