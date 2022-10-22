import React, {useState} from 'react';
import './App.css';
import {Todolist, TypeTasks} from "./Todolist";
import {v1} from "uuid";

export type FilterType = 'all' | 'active' | 'completed'

function App() {

    const title = 'What to learn - 1'

    let [tasks, setTasks] = useState<Array<TypeTasks>>([
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },
        { id: v1(), title: "Redux", isDone: false },
        { id: v1(), title: "RestApi", isDone: false }
    ])

    let [filter,setFilter] = useState<FilterType>('all')

    function addTask(newTitle: string)  {
        let newTask = {id: v1(), title: newTitle, isDone: false}
        let addedTasks = [newTask, ...tasks]
        console.log(addedTasks)
        setTasks(addedTasks)
    }

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(task => task.id !== id )
        setTasks(filteredTasks)
    }

    function changeFilter(value: FilterType) {
        setFilter(value)
    }

    let taskForTodo = tasks

    if (filter === "completed") {
        taskForTodo = taskForTodo.filter((t) => t.isDone )
    }
    if (filter === "active") {
        taskForTodo = taskForTodo.filter((t) => !t.isDone )
    }


    return (
        <div className="App">
            <Todolist
                title={title}
                tasks={taskForTodo}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
