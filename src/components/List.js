import "./List.css";

export default function List({ activities, isGoodWeather }) {
  return (
    <ul>
      {activities.length > 0 && (
        <h3>
          {isGoodWeather
            ? "The weather is awesome! Go outside and:"
            : "Bad weather outside! Here`s what you can do now."}
        </h3>
      )}
      {activities.map((activity) => (
        <li key={activity.id}>{activity.name}</li>
      ))}
    </ul>
  );
}
