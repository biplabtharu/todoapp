import React from 'react'

const Input = ({handleTask, handleInput, inputData, crudToggle}) => {
    return (
        <>
            <div className="input_div">
                <input type="text" placeholder='Add tasks' className='input' name="task" onChange={handleTask} value={inputData}/>
                {
                    crudToggle ? <i className="fa-solid fa-plus add" onClick={handleInput}></i> : <i className="fa-regular fa-pen-to-square edit" onClick={handleInput}></i>
                }
            </div>
        </>
    )
}

export default Input