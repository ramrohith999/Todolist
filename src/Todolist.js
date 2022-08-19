import React, { useState } from "react";
import "./App.css";

const Todolist = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handler = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false
      };
      setTaskList([...taskList, taskDetails]);
    }
  };

  const deleteTask = (e, id) => {
    e.preventDefault();
    setTaskList(taskList.filter((t) => t.id !== id));
  };

  const taskCompleted = (e, id) => {
    e.preventDefault();
    const element = taskList.findIndex((ele) => ele.id === id);
    const newList = [...taskList];
    newList[element] = {
      ...newList[element],
      isCompleted: true
    };
    setTaskList(newList);
  };

  return (
    <div className="todo">
      <input
        type="text"
        id="text"
        placeholder="Add a task..."
        onChange={(word) => handler(word)}
      />
      <button className="add" onClick={AddTask}>
        Add
      </button>
      {taskList !== [] ? (
        <ul>
          {taskList.map((t) => (
            <li className={t.isCompleted ? "crossText" : "listItem"}>
              {t.value}
              <button
                className="completed"
                onClick={(e) => taskCompleted(e, t.id)}
              >
                Completed
              </button>
              <button className="delete" onClick={(e) => deleteTask(e, t.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Todolist;
