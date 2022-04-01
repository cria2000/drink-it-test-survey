import * as React from 'react';
import {resultPreset} from "./QuestionPreset";
import messages from "./Constant/messages";
import './Styles/css/ResultPage.css'

type Props = {

};
export const ResultPage = (props: Props) => {
    // 임시 결과
    const result = resultPreset[0]

    return (
        <div className="result_page">
            <div className="result_page_notifier">
                <div className="result_page_notifier_message">{messages.resultSentence({result: result?.drinkName, decorativeSentence: result?.decorativeSentence})}</div>
                <div className="result_page_background">{result?.drinkEnName}</div>
            </div>
            <img className="result_page_drink_image" alt='drink' src={require(`./Images/${result.img}`)} />
            <div className="result_page_main_content">{result?.content}</div>
            <div className="result_page_drink_it_link_container">
                <div className="result_page_news_letter">
                    <span>{messages.noticeNewsLetter({result: result?.drinkName})}</span>
                    <a className="result_page_links" href={result?.relevantLink}>{messages.linkToNewsLetterSentence({result: result?.drinkName})}</a>
                </div>
                <div className="result_page_subscribe_link">
                    <span>{messages.interestInMore}</span>
                    <a className="result_page_links" href={`https://page.stibee.com/subscriptions/148567`}>{messages?.goToSubscribe}</a>
                </div>
            </div>
        </div>
    );
};