import "./displayPriorityList.css";

const myPriorityList = [
  {
    priority: "High",
    color: "red",
  },
  {
    priority: "Medium",
    color: "Orange",
  },
  {
    priority: "Low",
    color: "yellow",
  },
];

const DisplayPriorityList = (props) => {
  const { onSetPriority,priorityProp } = props;
console.log(priorityProp,"colorpriority")
  const onTapPriority = (e) => {
    myPriorityList.map((item) => {
      if (item.priority === e.priority) {
        document.getElementById(e.priority).style.backgroundColor = item.color;
        document.getElementById(e.priority).style.color = "white";
      } else {
        document.getElementById(item.priority).style.backgroundColor = "white";
        document.getElementById(item.priority).style.color = item.color;
      }
      return null;
    });
    onSetPriority(e.priority);
  };

  return (
    <>
      <p>Priority</p>
      {myPriorityList.map((e, index) => (
        <button
          className="priorityButtonStyle"
          id={e.priority}
          key={index}
          onClick={() => onTapPriority(e)}
          style={{ color: priorityProp===e.priority? "white":e.color, borderColor: e.color, borderRadius: "1px",backgroundColor:priorityProp===e.priority? e.color:null}}
        >
          {e.priority}
        </button>
      ))}
    </>
  );
};
export default DisplayPriorityList;
