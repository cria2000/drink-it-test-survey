import * as React from 'react';

type Props = {
    question?: string
};
export const SurveyQuestionTemplate = ({question} : Props) => {
    return (
        <div className="survey_question_template">
            <div>{question}</div>
        </div>
    );
};