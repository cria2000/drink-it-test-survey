import * as React from 'react';
import {useState} from "react";
import {QuestionPage} from "./QuestionPage";
import {questionPreset} from "./QuestionPreset";
import messages from "./Constant/messages";
import './Styles/css/QuestionContainer.css'
import {useNavigate} from "react-router-dom";

type Props = {

};
export const QuestionContainer = (props: Props) => {
    const totalQuestionNumber = 10
    const [currentQuestion, setCurrentQuestion] = useState<number>(1)
    const currentQuestionContent = questionPreset[currentQuestion]

    const navigation = useNavigate()

    const handleClickOption = () => {
        if(currentQuestion + 1 === totalQuestionNumber){
            navigation('/result')
        }
        setCurrentQuestion(currentQuestion + 1)
    }

    const handleClickPrevPageButton = () => {
        setCurrentQuestion(currentQuestion - 1)
    }

    return (
        <div className="question_container">
            <div className="question_container_progress_number">
                <div className="current_question">{currentQuestion}</div>
                /
                <div className="total_question">{totalQuestionNumber}</div>
            </div>
            <div className="question_container_progress_bar">
                <div style={{width: currentQuestion * 40}} className="current_progress"/>
            </div>
            <QuestionPage
                questionMessage={currentQuestionContent?.question}
                firstOptionMessage={currentQuestionContent?.firstOption}
                secondOptionMessage={currentQuestionContent?.secondOption}
                onClickOption={handleClickOption}
            />
            <button className="question_container_prev_page" onClick={handleClickPrevPageButton}><div className="button_prev"/><div>{messages.prevPage}</div></button>

        </div>
    );
};