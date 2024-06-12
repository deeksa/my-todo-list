import React, { useState } from "react";
import "./todoList.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import PopUpDisplay from "../PopUpComponet/popUp";
import { v4 as uuidv4 } from "uuid";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

let usersList = [
  {
    id: uuidv4(),
    description: "A",
    priority: "High",
    status: "Done",
  },
  {
    id: uuidv4(),
    description: "AB",
    priority: "Low",
    status: "In Progress",
  },
  {
    id: uuidv4(),
    description: "ABC",
    priority: "Medium",
    status: "To Do",
  },
];

const TodoList = () => {
  const [userList, setUserList] = useState(usersList); //initial set up for UserList

  //this funtion will help us to delete a todo item from the list
  const onTapDelete = (e) => {
    const updatedList = userList.filter((todo) => todo.id !== e.id);
    setUserList([...updatedList]);
  };

  //this funtion will help us to Add a todo item into the list
  const onTapAddTaskInPopUp = (a) => {
    const newObj = { id: uuidv4(), ...a, status: "To Do" };
    userList.push(newObj);
    setUserList([...userList]);
  };

  const onTapEditTaskInPopUp = (a) => {
    const newList = userList.map((e) => {
      if (e.id === a.id) {
        return { ...a };
      } else {
        return e;
      }
    });
    setUserList([...newList]);
  };

  //this funtion will help us to update the status for an item in the list
  const onTapStatus = (e) => {
    let updatedStatus;
    switch (e.status) {
      case "To Do":
        updatedStatus = "In Progress";
        break;
      case "In Progress":
        updatedStatus = "Done";
        break;
      case "Done":
        updatedStatus = "To Do";
        break;
      default:
        updatedStatus = "Invalid";
    }

    const updatedList = userList.map((a) => {
      if (e.id === a.id) {
        return { ...a, status: updatedStatus };
      } else {
        return a;
      }
    });
    setUserList([...updatedList]);
  };

  return (
    <div>
      <div className="Todo-Div-Heading">
        <div className="Todo-Text-Div">
          <p className="Todo-Text">Tasks ToDo....</p>
          <Popup trigger={<button>Add Task</button>} modal>
            {(close) => (
              <PopUpDisplay
                close={close}
                descriptionp=""
                priorityp="High"
                functionButton="Add"
                popUpHeading="Add Task"
                onTapAddTaskInPopUp={onTapAddTaskInPopUp}
              />
            )}
          </Popup>
        </div>
      </div>

      <div className="Todo-Div-Heading">
        {userList.map((e, index) => (
          <div className="Todo-Card" key={index}>
            <div
              style={{
                padding: "10px",
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div className="Todo-card-task">
                <p className="para1">task {index + 1}</p>

                <p>{e.description}</p>
              </div>
              <div className="Todo-Card-Priority">
                <p>Priority</p>
                <p>{e.priority}</p>
              </div>
              <div className="Todo-Card-Status-Button">
                <button onClick={() => onTapStatus(e)}> {e.status} </button>
              </div>
              <div className="Todo-Card-Status-Button">
                {(() => {
                  let percentage; // Use let to allow reassignment
                  switch (e.status) {
                    case "To Do":
                      percentage = 0;
                      return (
                        <div className="progressBarStyling">
                          <CircularProgressbar value={percentage} />
                        </div>
                      );

                    case "In Progress":
                      percentage = 50;
                      return (
                        <div className="progressBarStyling">
                          <CircularProgressbar value={percentage} />
                        </div>
                      );
                    case "Done":
                      percentage = 100;
                      return (
                        <div className="progressBarStyling">
                          <CircularProgressbar value={percentage} />
                        </div>
                      );
                    default:
                      percentage = null;
                      return percentage; // Assign null or any default value
                  }
                  // Return the percentage value
                })()}
              </div>
              <div className="Todo-Card-Status-Button">
                <Popup trigger={<button>Edit</button>} modal>
                  {(close) => (
                    <PopUpDisplay
                      close={close}
                      idp={e.id}
                      descriptionp={e.description}
                      priorityp={e.priority}
                      statusP={e.status}
                      functionButton="Edit"
                      popUpHeading="Edit Task"
                      onTapAddTaskInPopUp={onTapEditTaskInPopUp}
                    />
                  )}
                </Popup>
              </div>
              <div className="Todo-Card-Status-Button">
                <button onClick={() => onTapDelete(e)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TodoList;
