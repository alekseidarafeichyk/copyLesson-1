import React from "react";
import d from './Message.module.css'
import Person from "../../Person/Person";
import Text from "../Text/Text";
import Time from "../Informathion/Time";


function Message() {
    return (
        <div className={d.message}>
            <Person firstname={'Дорофейчик'} lastname={'Алексей'} patronymic={'Анатольевич'} />
            <Text text={'Hi, my name is Alex'} />
            <Time time={'7:30'} />
        </div>
    );
}

export default Message;