import * as React from 'react';
import './Styles/css/QuestionPage.css'

type Props = {
    questionMessage?: string
    firstOptionMessage?: string
    secondOptionMessage?: string
    onClickOption?: () => void
};
export const QuestionPage = ({questionMessage, firstOptionMessage, secondOptionMessage, onClickOption}: Props) => {
    return (
        <div className="question_page">
            <div className="question_page_question_message">{questionMessage}</div>
            <button className="question_page_choice_button" onClick={onClickOption}>{firstOptionMessage}</button>
            <button className="question_page_choice_button" onClick={onClickOption}>{secondOptionMessage}</button>
        </div>
    );
};