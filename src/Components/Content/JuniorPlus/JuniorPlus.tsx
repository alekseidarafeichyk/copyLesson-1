import React, {ChangeEvent, useEffect, useState} from 'react';
import Select from '../../common/Select';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/store';
import {changeThemeAC, themeStateType} from '../../../reducers/themeReducer';

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

    return(
        <div>
            <Select
            arr={arrColors}
            value={color}
            onChange={changeBackgroundDocument}
            />
        </div>
    )
}

export default  JuniorPlus;