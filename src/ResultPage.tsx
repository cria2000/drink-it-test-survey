import * as React from 'react';
import {resultPreset} from "./QuestionPreset";
import messages from "./Constant/messages";

type Props = {

};
export const ResultPage = (props: Props) => {
    // 임시 결과
    const result = resultPreset[0]

    return (
        <div className="result_page">
            <div>{messages.resultSentence({result: result?.drinkName, decorativeSentence: result?.decorativeSentence})}</div>
        </div>
    );
};