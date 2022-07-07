import React from "react";

const TodoList = (props) =>{
   const {completeTodo, deleteTodo} = props
   let todoArr = props.todoArr.length>0
   ? props.todoArr :JSON.parse(localStorage.getItem('todos'))


    return (
        <div className="todo-list">
            <ul>
               {todoArr && todoArr.length>0 ?
               todoArr.map((el, i) =>(
                  <li key={i}>
                  <div className={el["done"]? "line-through" : null}>{el.title}</div>
                  <div className="icon">
                  <i title="Complete" onClick={() => completeTodo(i)} className={`fas fa-check-circle ${el["done"] ? "green" : "blue"}`}></i>
                  <i title="Delete" className="fa fa-trash" onClick={() => deleteTodo(i)}></i>
                  </div>
               </li>

               )):null
            }
                
                 
            </ul>
        </div>
    )
}


export default TodoList;