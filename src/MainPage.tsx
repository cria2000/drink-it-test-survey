import * as React from 'react';
import strings from "./Constant/strings";
import {HighlightSpan} from "./Component/HighlightSpan";
import messages from "./Constant/messages";
import './Styles/css/MainPage.css'
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import {ELangauge, languageVar } from './Cache/cache';
import { useReactiveVar } from '@apollo/client';

type Props = {

};
export const MainPage = (props: Props) => {
    const isKorean = useReactiveVar(languageVar) === ELangauge.KOREAN
    const navigation = useNavigate()

    const handleClickChangeLanguageButton = () => {
        if (languageVar() === ELangauge.KOREAN )
            languageVar(ELangauge.ENGLISH)
        else
            languageVar(ELangauge.KOREAN)
    }

    const handleClickStartButton = () => {
        navigation('/predict')
    }

    return (
        <div className="main_page">
            <div className="change_language">
                <button onClick={handleClickChangeLanguageButton}><div className="button_change"/>
                    <div>{isKorean ? strings.eng : strings.ko}</div>
                </button>
            </div>
            <img className="main_page_header_logo" alt='drink_it_header' src={require('./Images/drinkItHeader.png')} />
            <div className="main_title">
                <div>{isKorean ? messages.mainTitle : messages.mainTitleEng}</div>
                <HighlightSpan originKeyword={isKorean ? messages.whatIsMyDrinkIt : messages.whatIsMyDrinkItEng} highlightKeyword={isKorean ? strings.drinkIt: strings.drinkItEng} />
            </div>
            <button className="button_start" onClick={handleClickStartButton}>{isKorean ? messages.startTest : messages.startTestEng}</button>

            <div className="main_enquiry_information">
                <div>{isKorean ? messages.enquiryInformation : messages.enquiryInformationEng}</div>
                <div>{isKorean ? messages.testEnquiry : messages.testEnquiryEng}</div>
                <div>{isKorean ? messages.drinkItEnquiry : messages.drinkItEnquiryEng}</div>
            </div>
        </div>
    );
};