import * as React from 'react';
import messages from "./messages";

type Props = {
    questionMessage?: string
    firstChoiceMessage?: string
    secondChoiceMessage?: string
};
export const QuestionFrame = ({questionMessage, firstChoiceMessage, secondChoiceMessage}: Props) => {
    return (
        <div className="question_frame">
            <div>{questionMessage}</div>
            <button className="question_frame_choice_button">{firstChoiceMessage}</button>
            <button className="question_frame_choice_button">{secondChoiceMessage}</button>
            <button><div>{messages.prevPage}</div></button>
        </div>
    );
};