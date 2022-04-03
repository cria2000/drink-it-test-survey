import * as React from 'react';
import {EResult, resultMap, resultPreset} from "./QuestionPreset";
import messages from "./Constant/messages";
import './Styles/css/ResultPage.css'
import {useEffect} from "react";
import {SelectedOptionsType} from "./QuestionContainer";

type Props = {
    selectedOptions: SelectedOptionsType
};
export const ResultPage = ({selectedOptions}: Props) => {
    const selectedFirst = selectedOptions?.first?.i > selectedOptions?.first?.e ? EResult.I : EResult.E
    const selectedSecond = selectedOptions?.second?.s > selectedOptions?.second?.n ? EResult.S : EResult.N
    const selectedThird = selectedOptions?.third?.t > selectedOptions?.third?.f ? EResult.T : EResult.F
    const selectedFourth = selectedOptions?.fourth?.j > selectedOptions?.fourth?.p ? EResult.J : EResult.P

    const resultIndex = Array.from(resultMap?.keys())?.findIndex(value => value?.first === selectedFirst && value?.second === selectedSecond
    && value?.third === selectedThird && value?.fourth === selectedFourth)
    const result = resultPreset[resultIndex ?? 0]


    useEffect(() => {
        if(!window?.Kakao?.isInitialized) window?.Kakao?.init?.(process.env["REACT_APP_KAKAO"])
        window?.Kakao?.Link?.createDefaultButton({
            container: '#kakao-link-btn',
            objectType: 'feed',
            content: {
                title: '나의 DrinkIt은 무엇일까?',
                description: '당신과 잘 어울리는 공간과 술을 알아보세요!',
                imageUrl: './Images/drinkIt.png',
                link:{
                    webUrl: 'http://localhost:3000',
                }
            },
            buttons: [
                {
                    title: '알아보러가자!',
                    link: {
                        webUrl: 'http://localhost:3000',
                    }
                }
            ]
        })

    }, [])


    return (
        <div className="result_page">
            <div className="result_page_content">
            <div className="result_page_notifier">
                <div className="result_page_notifier_message">{messages.resultSentence({result: result?.drinkName, decorativeSentence: result?.spaceName})}</div>
                <div className="result_page_background">{result?.drinkEnName}</div>
            </div>
            { result?.drinkImg && <img className="result_page_drink_image" alt='drink' src={require(`./Images/${result?.drinkImg}`)} /> }
            <div className="result_page_main_content">{result?.content}</div>
            <div className='result_page_recommend'>
                <div className="recommend_message">{messages.recommend}</div>
                <div>{`<${result?.recommendSpace}>의 ${result?.recommendDrink}`}</div>
                { result?.spaceImg && <img className="result_page_space_image" alt='space' src={require(`./Images/${result?.spaceImg}`)} /> }
            </div>
            <div className="result_page_drink_it_link_container">
                <div className="result_page_news_letter">
                    <span>{messages.noticeNewsLetter({result: result?.recommendSpace})}</span>
                    <a className="result_page_links" href={result?.relevantLink}>{messages.linkToNewsLetterSentence({result: result?.recommendSpace})}</a>
                </div>
                <div className="result_page_subscribe_link">
                    <span>{messages.interestInMore}</span>
                    <a className="result_page_links" href={`https://page.stibee.com/subscriptions/148567`}>{messages?.goToSubscribe}</a>
                </div>
            </div>
            <button className='result_page_share_button' id='kakao-link-btn'>카카오톡으로 공유하기</button>
            </div>
        </div>
    );
};