import { useState, useEffect } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [weather, setWeather] = useState(null);
  const [activities, setActivities] = useLocalStorageState("activities", []);
  const [checkbox, setCheckbox] = useLocalStorageState("checkbox", false);

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
    const timer = setInterval(() => {
      fetchWeather();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  // const filteredActivities = activities.filter(
  //   (activity) => activity.isForGoodWeather === weather?.isGoodWeather
  // );

  return (
    <div className="app">
      {weather === null ? (
        <h2 className="align-center">loading weather...</h2>
      ) : (
        <h1 className="app__heading align-center">
          <span className="app__heading-emoji">{weather.condition}</span>
          <span>{weather.temperature}°C</span>
        </h1>
      )}
      <List
        onDeleteActivity={handleDeleteActivity}
        activities={activities}
        isGoodWeather={weather?.isGoodWeather}
      />
      <Form
        onAddActivity={handleAddActivity}
        checkbox={checkbox}
        setCheckbox={setCheckbox}
      />
    </div>
  );
}

export default App;
