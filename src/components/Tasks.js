import React from 'react'

const Tasks = ({ taskList, editTask, deleteTask, removeAllTask }) => {
    return (
        <>
            <div className="task_lists">
                <ol>
                    {
                        taskList.map((curVal) => {
                            return (
                                <div className="task" key={curVal.id}>
                                    <li>{curVal.task}</li>
                                    <div className="crud_items">
                                        <i className="fa-solid fa-trash trash" onClick={() => deleteTask(curVal.id)}></i>
                                        <i className="fa-solid fa-pen-to-square task_edit" onClick={()=>editTask(curVal.id)}></i>
                                    </div>
                                </div>
                            )
                        })
                    }
                </ol>

                {
                    taskList.length >0 ? <div className="remove_all">
                    <button className='remove_btn' onClick={removeAllTask}>Remove All</button>
                </div> : null
                }
            </div>
        </>
    )
}

export default Tasks