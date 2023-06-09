import React, { useEffect, useState } from 'react'
import Input from './Input'
import Tasks from './Tasks'

const getLocalItems = () => {
    const list = localStorage.getItem('tasks');
    if (list) {
        return JSON.parse(list);
    } else {
        return [];
    }
}

const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [taskList, setTaskList] = useState(getLocalItems);
    const [crudToggle, setCrudToggle] = useState(true);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(taskList));
    }, [taskList])

    const handleTask = (e) => {
        const task = e.target.value;
        setInputData(task);
    }

    const handleInput = () => {
        if (!inputData || inputData.match(/^\s+$/) !== null) {
            alert("Plz provide one task")
        } else if (inputData && !crudToggle) {
            setTaskList(
                taskList.map((curVal) => {
                    if (curVal.id === editId) {
                        return ({ ...curVal, task: inputData })

                    }
                    console.log(curVal);
                    return curVal;
                })
            )

            setCrudToggle(true);
            setEditId(null);
            setInputData("");
        }
        else {
            setTaskList((preVal) => {
                const id = new Date().getTime().toString();
                return [...preVal, { id: id, task: inputData }];
            })
            setInputData("");
        }
    }

    const deleteTask = (id) => {
        const updatedTask = taskList.filter((curVal) => {
            return curVal.id !== id;
        })
        setTaskList(updatedTask);
    }

    const editTask = (id) => {
        const toEditTask = taskList.filter((curVal) => {
            return curVal.id === id;
        })
        setEditId(id);
        setInputData(toEditTask[0].task);
        setCrudToggle(false);
    }

    const removeAllTask = () => {
        setTaskList([]);
    }

    return (
        <>
                <div className="small_wrapper">
                    <div className='heading'><h2>Add your tasks</h2> <img className="book_img" src="images/book.png" alt="" /></div>
                    <Input handleTask={handleTask} handleInput={handleInput} inputData={inputData} crudToggle={crudToggle} />

                    <Tasks taskList={taskList} editTask={editTask} deleteTask={deleteTask} removeAllTask={removeAllTask} />

                </div>
        </>
    )
}

export default Todo