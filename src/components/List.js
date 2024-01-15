import "./List.css";

export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      {activities.length > 0 && (
        <ul className="list">
          <h3 className="list__heading">
            {isGoodWeather
              ? "The weather is awesome! Go outside and:"
              : "Bad weather outside! Here`s what you can do now."}
          </h3>
          {activities.map((activity) => (
            <li className="list__item" key={activity.id}>
              {activity.name}
              <button
                className="list__item-button"
                type="button"
                onClick={() => onDeleteActivity(activity.id)}
              >
                &#10005;
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
