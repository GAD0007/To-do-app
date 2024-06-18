import { ItemsOnList } from "./ItemsOnList";
import { Footer } from "./Footer";

export function ListComp({ filter,packed,unPacked,List, Theme, onToggle,onAll, onDelete,onCompleted,onActive,onClear }) {
  return (
    <>
      <ul
        className="no-bullet"
        style={{
          backgroundColor: Theme ? "hsl(237, 14%, 26%)" : "hsl(236, 33%, 92%)",
        }}
      >
        {List.map((item) => (
          <ItemsOnList
            listObj={item}
            key={item.id}
            List={List}
            Theme={Theme}
            onToggle={onToggle}
            onDelete={onDelete}

          />
        ))}
        <Footer 
        Theme={Theme}
        filter={filter}
          packed={packed}
        unPacked={unPacked}
        List={List} onClear={onClear}onAll={onAll}onActive={onActive} onCompleted={onCompleted}/>
      </ul>
    </>
  );
}
