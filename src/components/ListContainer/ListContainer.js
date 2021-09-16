import React from "react";

const ListContainer = ({ data, doneFunc }) => {
  return (
    <div className="list-container mt-lg-3">
      <ul>
        {console.log("render")}
        {data?.map((item, i) => (
          //    Check if isDone us true change the className to completed
          //    onClick attribute call the props that is a Function and pass the element id to it
          <li
            className={item.isDone ? "completed " : ""}
            key={i}
            id={item.id}
            onClick={(e) => doneFunc(e.target.id)}
          >
            {item.value}
            <input
              type="checkbox"
              id={item.id}
              name={`item${item.id}`}
              checked={item.isDone ? "checked" : null}
            />
            <label id={item.id} htmlFor={`item${item.id}`}></label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListContainer;
