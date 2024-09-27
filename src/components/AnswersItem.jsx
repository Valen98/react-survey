import PropTypes from "prop-types"

// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  big: "It's big",
  yellow: "It's Yellow",
  logo: "It's the logo",
  squeaks: "It squeaks"
};

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <li>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: { username, color, consistency, logo, timeSpend, review }
}) {

  console.log("This is item: " + timeSpend)

  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck color?</em>
          <span className="answer__line">{color}</span>
        </p>
        <p>
          <em>How do you rate the consistency?</em>
          <span className="answer__line">{consistency}</span>
        </p>
        <p>
          <em>How do you rate the logo?</em>
          <span className="answer__line">{logo}</span>
        </p>
        <p>
          <em>Why do you like your rubber duck so much?</em>
          <ItemsList list={timeSpend} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
      </article>
    </li>
  );
}

AnswersItem.propTypes = {
  answerItem: PropTypes.shape({
    username: PropTypes.string,
    colour: PropTypes.string,
    timeSpend: PropTypes.array,
    review: PropTypes.string
  })
};