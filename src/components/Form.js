import "./Form.css";

export default function Form({ onAddActivity, checkbox, setCheckbox }) {
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
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form__heading">Add new activity</h2>
      <label className="form__label" htmlFor="name">
        Name:
        <input
          className="form__input"
          type="text"
          id="name"
          name="name"
          required
        />
      </label>
      <label className="form__label" htmlFor="isForGoodWeather">
        Good-weather activity:
        <input
          className="form__checkbox"
          type="checkbox"
          id="isForGoodWeather"
          name="isForGoodWeather"
          checked={checkbox}
          onChange={(event) => setCheckbox(event.target.checked)}
        />
        <div className="form__slider"></div>
      </label>
      <button className="form__button" type="submit">
        Submit
      </button>
    </form>
  );
}
