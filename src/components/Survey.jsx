import { useState } from "react";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const initialState = {
    timeSpend: [],
    color: 0,
    consistency: 0,
    logo: 0,
    username: "",
    review: "",
    email: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialState);
  };

  const [formData, setFormData] = useState(initialState);

  const onChange = (e) => {
    let timeSpendArray = formData.timeSpend;
    if (e.target.name === "timeSpend") {
      if (e.target.checked) {
        timeSpendArray.push(e.target.value);
      } else {
        timeSpendArray.splice(timeSpendArray.indexOf(e.target.value), 1);
      }
      console.log(timeSpendArray);
      setFormData({ ...formData, [e.target.name]: timeSpendArray });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="survey__form">
        {
          <form onSubmit={handleSubmit} className="form">
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group">
              <h3>How do you like to spend time with your rubber duck?</h3>
              <ul>
                <li>
                  <label>
                    <input
                      id="1"
                      type="checkbox"
                      value="yellow"
                      name="timeSpend"
                      checked={formData.timeSpend.includes("yellow")}
                      onChange={(e) => onChange(e)}
                    />
                    It's Yellow!
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      id="2"
                      type="checkbox"
                      value="squeaks"
                      name="timeSpend"
                      checked={formData.timeSpend.includes("squeaks")}
                      onChange={(e) => onChange(e)}
                    />
                    It squeaks!
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      id="3"
                      type="checkbox"
                      value="logo"
                      name="timeSpend"
                      checked={formData.timeSpend.includes("logo")}
                      onChange={(e) => onChange(e)}
                    />
                    It has a logo!
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      id="4"
                      type="checkbox"
                      value="big"
                      name="timeSpend"
                      checked={formData.timeSpend.includes("big")}
                      onChange={(e) => onChange(e)}
                    />
                    It's big!
                  </label>
                </li>
              </ul>
            </div>
            <div className="form__group radio">
              <h3>How do you rate your rubber duck colour?</h3>
              <ul>
                <li>
                  <input
                    id="color-one"
                    type="radio"
                    name="color"
                    value="1"
                    checked={formData.color === "1"}
                    onChange={(e) => onChange(e)}
                  />
                  <label htmlFor="color-one">1</label>
                </li>
                <li>
                  <input
                    id="color-two"
                    type="radio"
                    name="color"
                    value={"2"}
                    checked={formData.color === "2"}
                  />
                  <label htmlFor="color-two">2</label>
                </li>
                <li>
                  <input
                    id="color-three"
                    type="radio"
                    name="color"
                    value={"3"}
                    checked={formData.color === "3"}
                    onChange={(e) => onChange(e)}
                  />
                  <label htmlFor="color-three">3</label>
                </li>
                <li>
                  <input
                    id="color-four"
                    type="radio"
                    name="color"
                    value={"4"}
                    checked={formData.color === "4"}
                    onChange={(e) => onChange(e)}
                  />
                  <label htmlFor="color-four">4</label>
                </li>
              </ul>
            </div>
            <div className="form__group radio">
              <h3>How do you rate your rubber duck consistency?</h3>
              <ul>
                <li>
                  <input
                    id="consistency-one"
                    type="radio"
                    name="consistency"
                    value="1"
                    checked={formData.consistency === "1"}
                    onChange={(e) => onChange(e)}
                  />
                  <label htmlFor="consistency-one">1</label>
                </li>
                <li>
                  <input
                    id="consistency-two"
                    type="radio"
                    name="consistency"
                    value="2"
                    checked={formData.consistency === "2"}
                    onChange={(e) => onChange(e)}
                  />
                  <label htmlFor="consistency-two">2</label>
                </li>
                <li>
                  <input
                    id="consistency-three"
                    type="radio"
                    name="consistency"
                    value="3"
                    checked={formData.consistency === "3"}
                    onChange={(e) => onChange(e)}
                  />
                  <label htmlFor="consistency-three">3</label>
                </li>
                <li>
                  <input
                    id="consistency-four"
                    type="radio"
                    name="consistency"
                    value="4"
                    checked={formData.consistency === "4"}
                    onChange={(e) => onChange(e)}
                  />
                  <label htmlFor="consistency-four">4</label>
                </li>
              </ul>
            </div>
            <div className="form__group radio">
              <h3>How do you rate your rubber duck logo?</h3>
              <ul>
                <li>
                  <input
                    id="logo-one"
                    type="radio"
                    name="logo"
                    value="1"
                    checked={formData.logo === "1"}
                    onChange={(e) => onChange(e)}
                  />
                  <label htmlFor="logo-one">1</label>
                </li>
                <li>
                  <input
                    id="logo-two"
                    type="radio"
                    name="logo"
                    value="2"
                    checked={formData.logo === "2"}
                    onChange={(e) => onChange(e)}
                  />
                  <label htmlFor="logo-two">2</label>
                </li>
                <li>
                  <input
                    id="logo-three"
                    type="radio"
                    name="logo"
                    value="3"
                    checked={formData.logo === "3"}
                    onChange={(e) => onChange(e)}
                  />
                  <label htmlFor="logo-three">3</label>
                </li>
                <li>
                  <input
                    id="logo-four"
                    type="radio"
                    name="logo"
                    value="4"
                    checked={formData.logo === "4"}
                    onChange={(e) => onChange(e)}
                  />
                  <label htmlFor="logo-four">4</label>
                </li>
              </ul>
            </div>
            <label>
              What else have you got to say about your rubber duck?
              <textarea
                name="review"
                cols="30"
                rows="10"
                value={formData.review}
                onChange={(e) => onChange(e)}
              ></textarea>
            </label>

            <label>
              Put your name here (if you feel like it):
              <input
                name="username"
                type="text"
                value={formData.username}
                onChange={(e) => onChange(e)}
              ></input>
            </label>

            <label>
              Put your name email here pretty please??
              <input
                name="email"
                type="text"
                value={formData.email}
                onChange={(e) => onChange(e)}
              ></input>
            </label>
            <button onClick={handleSubmit}>Submit</button>
          </form>
        }
      </section>
    </main>
  );
}

function MyInput(id, label, type, val, name, onChange) {
  return (
    <label>
      <input id={id} type={type} value={val} name={name} onChange={onChange} />
      {label}
    </label>
  );
}

export default Survey;
