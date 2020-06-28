import React from "react";
import {filterValueType} from "../../App";
import s from './Todolist.module.css'
import ButtonNya from "../ButtonNya/ButtonNya";

export type TaskType = {
    deal: string,
    priority: string,
    id: number,
}

export type TodolistPropsType = {
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
                            <ButtonNya className={s.btnRemove} onClick={() => {
    props.deleteTask(task.id)
                            }}>delete</ButtonNya>
                        </li>
                    }
                )
                }
            </ul>
            <div className={s.btnPanel}>
                <ButtonNya className={s.btnHigh}  onClick={() => {
                    props.changeFilter('high')
                }}>High</ButtonNya>

                <ButtonNya className={s.btnMiddle}  onClick={() => {
                    props.changeFilter('middle')
                }}>Middle</ButtonNya>
                <ButtonNya className={s.btnLow}  onClick={() => {
                    props.changeFilter('low')
                }}>Low</ButtonNya>
                <ButtonNya  onClick={() => {
                    props.changeFilter('all')
                }}>All</ButtonNya>
            </div>
        </div>
    );
}

export default Todolist;