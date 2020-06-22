import React from "react";
import {filterValueType} from "../../App";
import s from './Todolist.module.css'
import ButtonNya from "../ButtonNya/ButtonNya";

type TaskType = {
    deal: string,
    priority: string,
    id: number,
}

type TodolistPropsType = {
    tasks: Array<TaskType>
    deleteTask: (id: number) => void,
    changeFilter: (value: filterValueType) => void
}

function Todolist(props: TodolistPropsType) {
    return (
        <div className={s.wrapperTodo}>
            <ul>
                {props.tasks.map(task => {
                        return <li key={task.id}>
                            <span>{task.deal} : </span>
                            <span>{task.priority} </span>
                            <ButtonNya className={s.btnRemove} name={'remove'} onClick={() => {
                                props.deleteTask(task.id)
                            }}/>

                        </li>
                    }
                )
                }
            </ul>
            <div className={s.btnPanel}>
                <ButtonNya className={s.btnHigh} name={'High'} onClick={() => {
                    props.changeFilter('high')
                }}/>

                <ButtonNya className={s.btnMiddle} name={'Middle'} onClick={() => {
                    props.changeFilter('middle')
                }}/>
                <ButtonNya className={s.btnLow} name={'Low'} onClick={() => {
                    props.changeFilter('low')
                }}/>
                <ButtonNya name={'All'} onClick={() => {
                    props.changeFilter('all')
                }}/>
            </div>
        </div>
    );
}

export default Todolist;