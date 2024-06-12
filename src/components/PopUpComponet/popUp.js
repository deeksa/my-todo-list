import "./popUp.css";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import DisplayPriorityList from "../DisplayPriorityComponent/displayPriorityList";

const PopUpDisplay = (props) => {
  const { close, onTapAddTaskInPopUp,descriptionp,priorityp,idp,statusP,functionButton,popUpHeading} = props;
  const [description, setDescription] = useState(descriptionp);
  const [priority, setPriority] = useState(priorityp);

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onClickAdd = () => {
    onTapAddTaskInPopUp({
      id:idp,
      description: description,
      priority: priority,
      status:statusP
    });
    close();
  };

  const onSetPriority = (e) => {
    setPriority(e);
  };
  
  return (
    <div>
      <div className="Pop-Up-heading">
        <p>{popUpHeading}</p>
        <RxCross2 onClick={() => close()} />
      </div>
      <p>Task</p>
      <div>
        <input
          placeholder="type your text here"
          value={description}
          onChange={onChangeDescription}
        />
        <DisplayPriorityList onSetPriority={onSetPriority} priorityProp={priority}/>
      </div>
      <button onClick={onClickAdd}>{functionButton}</button>
    </div>
  );
};
export default PopUpDisplay;
