import "./List.css";
import { useEffect, useState } from "react";

export default function List({
  activities,
  isGoodWeather,
  onDeleteActivity,
  currentPage,
  totalPages,
}) {
  const [highlightedItem, setHighlightedItem] = useState(null);

  useEffect(() => {
    if (activities.length > 0) {
      setHighlightedItem(activities[activities.length - 1].id);

      const timeoutId = setTimeout(() => {
        setHighlightedItem(null);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [activities]);

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
            <li
              className={`list__item ${
                activity.isForGoodWeather !== isGoodWeather ? "disabled" : ""
              } ${
                activity.id === highlightedItem && currentPage === totalPages
                  ? "highlight"
                  : ""
              }`}
              key={activity.id}
            >
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
