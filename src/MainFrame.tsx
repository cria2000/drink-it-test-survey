import * as React from 'react';
import './Styles/css/MainPage.css'
import {MainPage} from "./MainPage";
import {HashRouter,  Route, Routes} from "react-router-dom";
import {QuestionPage} from "./QuestionPage";
import {ResultPage} from "./ResultPage";

type Props = {

};
export const MainFrame = (props: Props) => {
    return <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/question" element={<QuestionPage />} />
                <Route path="/result" element={<ResultPage />} />
            </Routes>

};