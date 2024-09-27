import AnswersItem from "./AnswersItem";
import PropTypes from "prop-types";

export default function AnswersList({submittedForms}) {
  console.log("Inside AnswersList: ", submittedForms);

  return (
    submittedForms && (
      <ul>
        {submittedForms.map((answerItem, i) => (
          <AnswersItem answerItem={answerItem} key={i} />
        )
        )}
      </ul>
    )
  );
}

AnswersList.propTypes = {
  submittedForms: PropTypes.array,
};