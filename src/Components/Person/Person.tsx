import React from "react";
import s from './Person.module.css'

type PersonPropsType = {
    firstname: string,
    lastname: string,
    patronymic: string,
}

function Person(props: PersonPropsType) {
    return (
        <div>
            <span className={s.firstname}>{props.firstname} </span>
            <span className={s.lastname}>{props.lastname} </span>
            <span className={s.patronymic}>{props.patronymic}</span>
        </div>
    );
}

export default Person;