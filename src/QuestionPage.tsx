import * as React from 'react';
import messages from "./Constant/messages";
import './Styles/css/QuestionPage.css'

type Props = {
    questionMessage?: string
    firstChoiceMessage?: string
    secondChoiceMessage?: string
};
export const QuestionPage = ({questionMessage, firstChoiceMessage, secondChoiceMessage}: Props) => {
    return (
        <div className="question_page">
            <div className="question_page_question_message">{questionMessage}</div>
            <button className="question_page_choice_button">{firstChoiceMessage}</button>
            <button className="question_page_choice_button">{secondChoiceMessage}</button>
        </div>
    );
};