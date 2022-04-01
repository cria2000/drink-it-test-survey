import * as React from 'react';
import messages from "./Constant/messages";
import './Styles/css/QuestionPage.css'

type Props = {
    questionMessage?: string
    firstOptionMessage?: string
    secondOptionMessage?: string
};
export const QuestionPage = ({questionMessage, firstOptionMessage, secondOptionMessage}: Props) => {
    return (
        <div className="question_page">
            <div className="question_page_question_message">{questionMessage}</div>
            <button className="question_page_choice_button">{firstOptionMessage}</button>
            <button className="question_page_choice_button">{secondOptionMessage}</button>
        </div>
    );
};