import React, {useState} from "react";
import {FilterType} from "./App";

type TodolistPropsType = {
    title: string
    tasks: Array<TypeTasks>
    removeTask: (id: string) => void
    changeFilter: (value: FilterType) => void;
    addTask: (newTitle: string) => void
}

export type TypeTasks = {
    id: string,
    title: string,
    isDone: boolean
}

export function Todolist(props: TodolistPropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState('')

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input type="text"
                       value={newTaskTitle}

                       onChange={(e) => setNewTaskTitle(e.currentTarget.value)}
                       onKeyPress={(e) => {
                           if (e.charCode === 13) {
                               props.addTask(newTaskTitle)
                               setNewTaskTitle('')
                           }
                       }}


                />
                <button
                    onClick={() => {
                        props.addTask(newTaskTitle)
                        setNewTaskTitle('')
                    }
                    }>
                    +
                </button>
            </div>
            {props.tasks.map((el) => {
                return (

                    <li key={el.id}><input type="checkbox" checked={el.isDone}/><span>{el.title}</span>

                        <button onClick={() => {
                            props.removeTask(el.id)
                        }}>x
                        </button>

                    </li>

                )
            })}
            {/*<ul>*/}
            {/*<li><input type="checkbox" checked={props.tasks[0].isDone}/><span>{props.tasks[0].title}</span></li>*/}
            {/*<li><input type="checkbox" checked={props.tasks[1].isDone}/><span>{props.tasks[1].title}</span></li>*/}
            {/*<li><input type="checkbox" checked={props.tasks[2].isDone}/><span>{props.tasks[2].title}</span></li>*/}
            {/*</ul>*/}
            <div>
                <button onClick={() => props.changeFilter('all')}>All</button>
                <button onClick={() => props.changeFilter('active')}>Active</button>
                <button onClick={() => props.changeFilter('completed')}>Completed</button>
            </div>
        </div>
    )
}

