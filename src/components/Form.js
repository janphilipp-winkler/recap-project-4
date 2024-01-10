import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const data = {
      name: form.elements.name.value,
      isForGoodWeather: form.elements.isForGoodWeather.checked,
    };
    onAddActivity(data);

    form.reset();
    form.elements.name.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new activity</h2>
      <label htmlFor="name">
        Name:
        <input type="text" id="name" name="name" />
      </label>
      <label htmlFor="isForGoodWeather">
        Good-weather activity:
        <input type="checkbox" id="isForGoodWeather" name="isForGoodWeather" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
