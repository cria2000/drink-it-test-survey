import * as React from 'react';
import {MainPage} from "./MainPage";
import { Route, Routes} from "react-router-dom";
import {ResultPage} from "./ResultPage";
import {QuestionContainer} from "./QuestionContainer";

type Props = {

};
export const MainFrame = (props: Props) => {
    return <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/question" element={<QuestionContainer />} />
                <Route path="/result" element={<ResultPage />} />
            </Routes>

};