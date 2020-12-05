import React, { useState } from 'react'
import './todo.css'
import { FaEdit, FaCheck, FaCheckDouble, FaRegTrashAlt } from "react-icons/fa";

function Todo(props) {

    const [updateContent, setupdateContent] = useState(null);

    const handleInput = (e) => {
        setupdateContent(e.target.value)
    }

    const handleUpdate = (id, updateContent) => {
        props.editTodoList(id, updateContent);
        setupdateContent(null);
    }

    return (
        <div className="list">
            {props.list.map((item, index) =>
                <div key={item.id} className="list-item-box">

                    {item.edit ? (
                        <div className="list-item-edit">
                            <input type="text" onInput={(e) => handleInput(e)} value={updateContent ? updateContent : item.content} />
                            <FaCheck onClick={() => handleUpdate(item.id, updateContent ? updateContent : item.content)}></FaCheck>
                        </div>
                    ) : (
                            <div className="list-item">
                                <div className={item.finished ? 'list-item-content todo-finished' : 'list-item-content todo-unfinished'}>{item.content}</div>
                                <div className="list-item-operate">
                                    <FaEdit onClick={() => props.editTodoList(item.id, item.content)}></FaEdit>
                                    <FaCheckDouble onClick={() => props.finishTodoList(item.id)}></FaCheckDouble>
                                    <FaRegTrashAlt onClick={() => props.deleteTodoList(item.id)}></FaRegTrashAlt>
                                </div>
                            </div>
                        )}
                </div>
            )}
        </div>
    );
}

export default Todo
