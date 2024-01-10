import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  return (
    <div className="app">
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
