export function Footer({ filter,packed,unPacked,List,onCompleted,onActive,onAll,onClear }) {
  

console.log(unPacked)
  // console.log(copyArr)


  
  return (
    <div className="footer-box">
      <button className="allClicked items-left">{`${unPacked} items left`}</button>
      <button className={filter === "All" ? "all":"allClicked"} onClick={onAll}>All</button>
      <button className={filter === "Active" ? "all":"allClicked"} onClick={onActive}>Active</button>
      <button className={filter === "Completed" ? "all":"allClicked"} onClick={onCompleted}>Completed</button>
      <button className="allClicked clear-completed" onClick={()=> onClear(List.completed)}>Clear-Completed</button>
    </div>
  );
}
