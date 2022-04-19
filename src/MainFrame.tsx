import * as React from 'react';
import {MainPage} from "./MainPage";
import { Route, Routes} from "react-router-dom";
import {ResultPage} from "./ResultPage";
import {QuestionContainer, SelectedOptionsType} from "./QuestionContainer";
import {useEffect, useState} from "react";
import ReactGA from "react-ga";
import {SelectDrinkItPage} from "./SelectDrinkItPage";

type Props = {

};
export const MainFrame = (props: Props) => {
    // const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID ?? ''

    const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsType>({
        first: {e: 0, i: 0},
        second: {n: 0, s: 0},
        third: {f: 0,t: 0},
        fourth: { j: 0, p: 0}
    })

    const handleSelectedOptions = (newSelectedOptions: SelectedOptionsType) => {
        setSelectedOptions(newSelectedOptions)
    }

    // useEffect(() => {
    //     const script = document.createElement('script')
    //     script.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`
    //     script.async = true
    //     script.innerHTML=`window.dataLayer = window.dataLayer || [];
    //     function gtag(){dataLayer.push(arguments);}
    //     gtag('js', new Date());
    //
    //     gtag('config', ${TRACKING_ID});`
    //
    //     document.body.appendChild(script)
    //
    //     return () => {
    //         document.body.removeChild(script)
    //     }
    // }, []);
    return <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path='/predict' element={<SelectDrinkItPage />} />
                <Route path="/question" element={<QuestionContainer selectedOptions={selectedOptions} handleSelectedOptions={handleSelectedOptions}/>} />
                <Route path="/result" element={<ResultPage selectedOptions={selectedOptions}/>} />
            </Routes>
};