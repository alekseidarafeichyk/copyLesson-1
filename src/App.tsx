import React, {KeyboardEvent, useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {BrowserRouter, Route} from "react-router-dom";
import PreJunior from "./Components/Content/PreJunior/PreJunior";
import Junior from "./Components/Content/Junior/Junior";
import JuniorPlus from "./Components/Content/JuniorPlus/JuniorPlus";
import Accordion from './Components/Accordion/Accordion';


export type filterValueType = 'all' | 'high' | 'middle' | 'low'


 export type arrType = {
    id: string,
    name: string
}

function App () {

    let [tasks, setTasks] = useState([
        {deal: 'learn react', priority: 'high', id: 1},
        {deal: 'learn javascript', priority: 'high', id: 2},
        {deal: 'learn html', priority: 'middle', id: 3},
        {deal: 'learn css', priority: 'middle', id: 4},
        {deal: 'learn redux', priority: 'middle', id: 5},
        {deal: 'cook food', priority: 'low', id: 6},
        {deal: 'call friends', priority: 'low', id: 7},
    ]);
    let [sortTask, setSortTask] = useState<filterValueType>('all');
    let [error, setError] = useState<string>('');

    function deleteTask(id: number) {
        tasks = tasks.filter(task => task.id != id);
        setTasks(tasks);
    }

    function changeFilter(value: filterValueType) {
        setSortTask(value);
    }

    let filterTask = tasks;
    if (sortTask === 'high') {
        filterTask = tasks.filter(task => task.priority === 'high')
    }
    if (sortTask === 'middle') {
        filterTask = tasks.filter(task => task.priority === 'middle')
    }
    if (sortTask === 'low') {
        filterTask = tasks.filter(task => task.priority === 'low')
    }



    const [arr, setArr] = useState<Array<arrType>>([])


    function sayHi(name: string) {
        if (name.trim()) {
            alert(`Hello: ${name}`);
            setArr([...arr, {name: name, id: v1()}])
            setError('')
        } else {
            setError('Input value is empty')
        }


    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.charCode === 13) {
            sayHi(e.currentTarget.value)
        }
    }

    let [collapsed,setCollapsed] = useState(false)

    return (
            <BrowserRouter>
                <div>
                    <Accordion name={'menu'}
                               collapsed={collapsed}
                               onClick={setCollapsed}
                    />

                </div>
                <div>
                    <Route path={'/prejunior'} render={() => <PreJunior
                        tasks={filterTask}
                        deleteTask={deleteTask}
                        changeFilter={changeFilter}
                        sayHi={sayHi}
                        arr={arr}
                        error={error}
                        onEnter={onEnter}
                    />} />
                    <Route path={'/junior'} render={() => <Junior/>}/>
                    <Route path={'/juniorplus'} render={() => <JuniorPlus/>}/>
                </div>
            </BrowserRouter>
    );

}

export default App;
