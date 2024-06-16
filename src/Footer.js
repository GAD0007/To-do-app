export function Footer({ packed,unPacked,List,onCompleted,onActive,onAll,onClear }) {
  

console.log(unPacked)
  // console.log(copyArr)


  
  return (
    <div className="footer-box">
      <div className="items-left">{`${unPacked} items left`}</div>
      <div className="all" onClick={onAll}>All</div>
      <div className="active" onClick={onActive}>Active</div>
      <div className="completed" onClick={onCompleted}>Completed</div>
      <div className="clear-completed" onClick={()=> onClear(List.completed)}>Clear-Completed</div>
    </div>
  );
}
