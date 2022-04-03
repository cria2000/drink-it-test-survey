import * as React from 'react';
import './Styles/css/QuestionPage.css'

type Props = {
    questionMessage?: string
    firstOptionMessage?: string
    secondOptionMessage?: string
    onClickOption?: () => void
    onClickFirstOption?: () => void
    onClickSecondOption?: () => void
};
export const QuestionPage = ({questionMessage, firstOptionMessage, secondOptionMessage, onClickOption, onClickFirstOption, onClickSecondOption}: Props) => {
    const handleClickFirstOption = () => {
        onClickFirstOption?.()
        onClickOption?.()
    }

    const handleClickSecondOption = () => {
        onClickSecondOption?.()
        onClickOption?.()
    }

    return (
        <div className="question_page">
            <div className="question_page_question_message">{questionMessage}</div>
            <button className="question_page_choice_button" onClick={handleClickFirstOption}>{firstOptionMessage}</button>
            <button className="question_page_choice_button" onClick={handleClickSecondOption}>{secondOptionMessage}</button>
        </div>
    );
};