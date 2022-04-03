import * as React from 'react';
import {useState} from "react";
import {QuestionPage} from "./QuestionPage";
import {questionPreset} from "./QuestionPreset";
import messages from "./Constant/messages";
import './Styles/css/QuestionContainer.css'
import {useNavigate} from "react-router-dom";

export type SelectedOptionsType = {
    first: { e: number, i: number},
    second: { s: number, n: number},
    third: {f: number, t: number},
    fourth: {p: number, j: number}

}

type Props = {
    selectedOptions: SelectedOptionsType
    handleSelectedOptions: (newSelectedOptions: SelectedOptionsType) => void
};
export const QuestionContainer = ({selectedOptions, handleSelectedOptions}: Props) => {
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
                <div className="current_progress_container" style={{width: currentQuestion * 40 + 25}}>
                    <div style={{width: currentQuestion * 40}} className="current_progress"/>
                    <div className="current_progress_icon">🥂</div>
                </div>
            </div>
            <QuestionPage
                questionMessage={currentQuestionContent?.question}
                firstOptionMessage={currentQuestionContent?.firstOption}
                secondOptionMessage={currentQuestionContent?.secondOption}
                onClickOption={handleClickOption}
                onClickFirstOption={currentQuestionContent?.onClickFirstOption?.({selectedOptions: selectedOptions, setSelectedOptions: handleSelectedOptions})}
                onClickSecondOption={currentQuestionContent?.onClickSecondOption?.({selectedOptions: selectedOptions, setSelectedOptions: handleSelectedOptions})}
            />
            <div className="question_container_bottom_content">
                {currentQuestion > 1 && <button className="question_container_prev_page" onClick={handleClickPrevPageButton}><div className="button_prev"/><div>{messages.prevPage}</div></button> }
                <img className="question_container_bottom_logo" alt='drink' src={require('./Images/drinkItHeader.png')} />
            </div>
        </div>
    );
};