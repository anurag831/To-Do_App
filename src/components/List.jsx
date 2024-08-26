import React, { useState } from "react";
import Todo from "./Todo";
const List = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState(["First todo", "second todo"])
  function add() {
    list.push(todo);
    setList(list)
    setTodo("")
  }

  return (
    <div className="bg-blue-200 min-h-[80vh] w-[80vw] m-auto mt-4 rounded-xl px-6 py-4 flex flex-col gap-6">
      <div className="add  flex flex-col gap-2">
        <h1 className="font-bold text-xl">Add a todo :</h1>
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Type a todo"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
            className="min-w-[30vw] rounded-md font-lg px-2"
          />
          <button
            className="bg-blue-700 text-white px-3 py-1 rounded-md"
            onClick={add}
          >
            Add
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-xl">Your Todos :</h1>
        {list.map((item)=>{
            return <Todo text={item}/>
        })}
      </div>
    </div>
  );
};

export default List;
