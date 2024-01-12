import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
//import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() 
  const [activities, setActivities] = useLocalStorageState("activities", []);

  if (!activities) {
    setActivities([]);
  }

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
