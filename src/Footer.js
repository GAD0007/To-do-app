export function Footer({
  Theme,
  filter,
  packed,
  unPacked,
  List,
  onCompleted,
  onActive,
  onAll,
  onClear,
}) {
  console.log(unPacked);
  // console.log(copyArr)
  const pluralMarker = unPacked > 1 ? "s" : "";
  const pluralMarker2 = packed > 1 ? "s" : "";


  return (
    <>
      <div className="block">
        <div className={Theme ? "ItemsLeft" : "items-left"}>
          {filter === "Completed"
            ? `${packed} Item${pluralMarker2} completed `
            : `${unPacked} Item${pluralMarker} left`}
        </div>
      </div>
      <div className="footer-box">
        <button
          className={`${Theme ? "light-mode" : "dark-mode"} ${
            filter === "All" ? "all" : "allClicked"
          }`}
          onClick={onAll}
        >
          All
        </button>
        <button
          className={`${Theme ? "light-mode" : "dark-mode"} ${
            filter === "Active" ? "all" : "allClicked"
          }`}
          onClick={onActive}
        >
          Active
        </button>
        <button
          className={`${Theme ? "light-mode" : "dark-mode"}
      ${filter === "Completed" ? "all" : "allClicked"}`}
          onClick={onCompleted}
        >
          Completed
        </button>
        <button
          className={`
          ${Theme ? "light-mode" : "dark-mode"}
          ${"allClicked clear-completed"}`}
          onClick={() => onClear(List.completed)}
        >
          Clear-Completed
        </button>
      </div>
    </>
  );
}
