import * as React from 'react';
import {MainPage} from "./MainPage";
import { Route, Routes} from "react-router-dom";
import {ResultPage} from "./ResultPage";
import {QuestionContainer, SelectedOptionsType} from "./QuestionContainer";
import {useState} from "react";

type Props = {

};
export const MainFrame = (props: Props) => {
    const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsType>({
        first: {e: 0, i: 0},
        second: {n: 0, s: 0},
        third: {f: 0,t: 0},
        fourth: { j: 0, p: 0}
    })

    const handleSelectedOptions = (newSelectedOptions: SelectedOptionsType) => {
        setSelectedOptions(newSelectedOptions)
    }

    return (<MainPage />)

    // return <Routes>
    //             <Route path="/" element={<MainPage />} />
    //             <Route path="/question" element={<QuestionContainer selectedOptions={selectedOptions} handleSelectedOptions={handleSelectedOptions}/>} />
    //             <Route path="/result" element={<ResultPage selectedOptions={selectedOptions}/>} />
    //         </Routes>
};