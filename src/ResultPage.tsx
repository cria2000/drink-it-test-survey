import * as React from 'react';
import {EResult, resultEngPreset, resultMap, resultPreset} from "./QuestionPreset";
import messages from "./Constant/messages";
import './Styles/css/ResultPage.css'
import {useEffect} from "react";
import {SelectedOptionsType} from "./QuestionContainer";
import { useReactiveVar } from '@apollo/client';
import {ELangauge, languageVar } from './Cache/cache';

type Props = {
    selectedOptions: SelectedOptionsType
};
export const ResultPage = ({selectedOptions}: Props) => {

    const isKorean = useReactiveVar(languageVar) === ELangauge.KOREAN

    const selectedFirst = selectedOptions?.first?.i > selectedOptions?.first?.e ? EResult.I : EResult.E
    const selectedSecond = selectedOptions?.second?.s > selectedOptions?.second?.n ? EResult.S : EResult.N
    const selectedThird = selectedOptions?.third?.t > selectedOptions?.third?.f ? EResult.T : EResult.F
    const selectedFourth = selectedOptions?.fourth?.j > selectedOptions?.fourth?.p ? EResult.J : EResult.P

    const resultPresetValue = isKorean ? resultPreset : resultEngPreset
    const resultIndex = Array.from(resultMap?.keys())?.findIndex(value => value?.first === selectedFirst && value?.second === selectedSecond
    && value?.third === selectedThird && value?.fourth === selectedFourth)
    const result = resultPresetValue[resultIndex ?? 0]


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
                <div className="result_page_notifier_message">{isKorean ? messages.resultSentence({result: result?.drinkName, decorativeSentence: result?.spaceName}) :  messages.resultSentenceEng({result: result?.drinkName, decorativeSentence: result?.spaceName})}</div>
                <div className="result_page_background">{result?.drinkEnName}</div>
            </div>
            { result?.drinkImg && <img className="result_page_drink_image" alt='drink' src={require(`./Images/${result?.drinkImg}`)} /> }
            <div className="result_page_main_content">{result?.content}</div>
            <div className='result_page_recommend'>
                <div className="recommend_message">{isKorean ? messages.recommend : messages.recommendEng}</div>
                <div className="recommend_space_drink">{`<${result?.recommendSpace}>${isKorean ? '의' : `'s`} ${result?.recommendDrink}`}</div>
                <div className="recommend_space_address">{result?.spaceAddress}</div>
                { result?.spaceImg && <img className="result_page_space_image" alt='space' src={require(`./Images/${result?.spaceImg}`)} /> }
            </div>
            <div className="result_page_drink_it_link_container">
                <div className="result_page_news_letter">
                    <span>{isKorean ? messages.noticeNewsLetter({result: result?.recommendSpace}) : messages.noticeNewsLetterEng({result: result?.recommendSpace})}</span>
                    <a className="result_page_links" href={result?.relevantLink}>{isKorean ? messages.linkToNewsLetterSentence({result: result?.recommendSpace}) : messages.linkToNewsLetterSentenceEng({result: result?.recommendSpace}) }</a>
                </div>
                <div className="result_page_subscribe_link">
                    <span>{isKorean ? messages.interestInMore : messages.interestInMoreEng}</span>
                    <a className="result_page_links" href={`https://page.stibee.com/subscriptions/148567`}>{isKorean ? messages?.goToSubscribe : messages.goToSubscribeEng}</a>
                </div>
            </div>
            <button className='result_page_share_button' id='kakao-link-btn'>{isKorean ? '카카오톡으로 공유하기' : 'share with kakaoTalk'}</button>
            </div>
        </div>
    );
};