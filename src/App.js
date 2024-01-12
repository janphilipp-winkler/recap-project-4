import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [weather, setWeather] = useState(null);
  const [activities, setActivities] = useLocalStorageState("activities", []);

  if (!activities) {
    setActivities([]);
  }

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        if (response.ok) {
          const data = await response.json();
          setWeather(data);
        } else {
          console.error("Network Error");
        }
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };
    fetchWeather();
  }, []);

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather?.isGoodWeather
  );

  return (
    <div className="app">
      {weather === null ? (
        <h2>loading weather...</h2>
      ) : (
        <h1>
          <span>{weather.condition}</span> <span>{weather.temperature}</span>
        </h1>
      )}
      <List
        onDeleteActivity={handleDeleteActivity}
        activities={filteredActivities}
        isGoodWeather={weather?.isGoodWeather}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
