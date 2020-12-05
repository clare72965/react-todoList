import React, { useState } from 'react';
import './App.css';
import TodoList from './todoList/todoList'
import Todo from './todo/todo'

function App() {

  const [todoList, setTodoList] = useState([]);

  // 新增代辦
  const addTodoList = (list) => {
    if (!list.content || /^\s*$/.test(list.content)) {
      return
    }
    const newList = [list, ...todoList];
    setTodoList(newList);
  }

  // 編輯代辦
  const editTodoList = (id, content) => {
    const editList = [...todoList].map(todo => {
      if (todo.id === id) {
        todo.edit = !todo.edit;
        todo.content = content;
      }
      return todo
    });
    setTodoList(editList);
  }

  // 完成代辦
  const finishTodoList = (id) => {
    const finishedArr = [...todoList].map(todo => {
      if (todo.id === id) todo.finished = !todo.finished;
      return todo
    });
    setTodoList(finishedArr);
  }

  // 刪除代辦
  const deleteTodoList = (id) => {
    const removedArr = [...todoList].filter(todo => todo.id !== id);
    setTodoList(removedArr);
  }

  return (
    <div className="App">
      <div className="title">代辦事項</div>
      <TodoList addTodoList={addTodoList} ></TodoList>
      <Todo
        list={todoList}
        editTodoList={editTodoList}
        finishTodoList={finishTodoList}
        deleteTodoList={deleteTodoList}
      ></Todo>
    </div>
  );
}

export default App;
