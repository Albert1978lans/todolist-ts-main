import React, {ChangeEvent, KeyboardEvent, useState} from "react";
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

    const onNewTitleChangeInputHandler=(e: ChangeEvent<HTMLInputElement>) =>  {setNewTaskTitle(e.currentTarget.value)}
    const onKeyPressAddTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.addTask(newTaskTitle)
            setNewTaskTitle('')
        }
    }
    const onClickAddTaskHandler = () => {
        props.addTask(newTaskTitle)
        setNewTaskTitle('')
    }

    const changeFilterAll = () => {props.changeFilter('all')}
    const changeFilterActive = () => {props.changeFilter('active')}
    const changeFilterCompleted = () => {props.changeFilter('completed')}



    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input type="text"
                       value={newTaskTitle}
                       onChange={onNewTitleChangeInputHandler}
                       onKeyPress={onKeyPressAddTaskHandler}/>

                <button onClick={onClickAddTaskHandler}>+</button>
            </div>
            {props.tasks.map((el) => {
                const onClickRemoveTaskHandler = () => {props.removeTask(el.id)}
                return (

                    <li key={el.id}><input type="checkbox" checked={el.isDone}/><span>{el.title}</span>

                        <button onClick={onClickRemoveTaskHandler}>x</button>

                    </li>

                )
            })}
            <div>
                <button onClick={changeFilterAll}>All</button>
                <button onClick={changeFilterActive}>Active</button>
                <button onClick={changeFilterCompleted}>Completed</button>
            </div>

        </div>
    )
}

// nClick={() => props.changeFilter('completed')}