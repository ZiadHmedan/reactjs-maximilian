import { useState, useCallback, useMemo } from "react";
import DemoList from "./Demo/DemoList";
import "./App.css";
import Button from "./component/UI/Button";
function App() {
  const [listTitle, setListTitle] = useState("My List");
  console.log("APP");
  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}> Change List Title</Button>
    </div>
  );
}

export default App;
