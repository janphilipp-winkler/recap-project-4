import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
//import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [{ id: "123", name: "Read a book" }],
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  // if (!activities) {
  //   return null;
  // }

  return (
    <div className="app">
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
