import React from "react";
import tick_icon from "../assets/tick.png";
import delete_icon from "../assets/delete.png";
import not_tick_icon from "../assets/not_tick.png";

const TodoItems = ({ text, id, deleteTodo, toggle, isComplete }) => {
  return (
    <div onClick={() => toggle(id)} className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer">
        <img
          src={isComplete ? tick_icon : not_tick_icon}
          alt=""
          className="w-7"
        />
        <p
          className={`text-slate-700 ml-4 text-[17px] ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <div>
        <img
          src={delete_icon}
          onClick={() => deleteTodo(id)}
          alt=""
          className="w-3.5 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TodoItems;
