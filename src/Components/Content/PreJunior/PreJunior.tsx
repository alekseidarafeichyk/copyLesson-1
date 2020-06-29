import React from "react";
import Message from "../../Messages/Message/Message";
import Todolist, { TaskType } from "../../TodoList/Todolist";
import { filterValueType } from "../../../App";
import Form, {FormPropsType} from "../../LessonThree/Form";

type PreJuniorPropsType = {
    tasks: Array<TaskType>
    deleteTask: (id: number) => void,
    changeFilter: (value: filterValueType) => void
}

function PreJunior(props: PreJuniorPropsType & FormPropsType) {
    return(
        <div>
            <Message/>
            <Todolist   tasks={props.tasks}
                        deleteTask={props.deleteTask}
                        changeFilter={props.changeFilter}/>
            <Form sayHi={props.sayHi}
                  arr={props.arr}
                  error={props.error}
                  onEnter={props.onEnter}
            />
        </div>
    )
}

export default  PreJunior;