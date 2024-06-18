export function ItemsOnList({ listObj, List, Theme, onToggle, onDelete }) {
  // const icon = (
  //   <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11">
  //     <path
  //       fill="none"
  //       stroke="#FFF"
  //       strokeWidth="2"
  //       d="M1 4.304L3.696 7l6-6"
  //     />
  //   </svg>
  // );
  const icon= <img src="check.png" alt="check" className="check-img"/>
  const iconCross = (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25">
      <path
        fill="#494C6B"
        fillRule="evenodd"
        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
      />
    </svg>
  );

  return (
    // <img src={icon} alt="icon" width="20" height="20" />
    <li className="list-container">
      <button
        onClick={() => onToggle(listObj.id)}
        className={listObj.completed ? "checker" : "not-checked"}
      >
        {listObj.completed ? icon : null}
      </button>
      <span
        className={listObj.completed ? "list-text" : "list-text-completed"}
        style={{
          color: Theme ? "white" : "hsl(235, 19%, 35%)",
          textDecoration: listObj.completed ? "Line-through" : "",
        }}
      >
        {listObj.text}
      </span>
      <button onClick={() => onDelete(listObj.id)} className="x-btn">
        {iconCross}
      </button>
    </li>
  );
}
