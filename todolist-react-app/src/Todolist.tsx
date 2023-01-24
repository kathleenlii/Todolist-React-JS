import React from 'react';

export type TaskType = {
  id: number
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  tasks: Array<TaskType>
}

export function Todolist(props: PropsType) {
  return (
    <div>
      <h3>{props.title} </h3>

      <div>
        <input />
        <button></button>
      </div>
      
      <ul>
        {
          props.tasks.map((elem) => {
            return <li><input type="checkbox" checked={elem.isDone} /> <span>{elem.title}</span></li>
          })
        }
      </ul>

      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>

    </div>
  );

}
