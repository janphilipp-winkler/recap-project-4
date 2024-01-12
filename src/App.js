import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
//import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const isGoodWeather = true;
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [{ id: "123", name: "Read a book" }],
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  return (
    <div className="app">
      <List activities={filteredActivities} isGoodWeather={isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
