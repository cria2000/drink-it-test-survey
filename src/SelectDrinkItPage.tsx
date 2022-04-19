import * as React from 'react';
import messages from "./Constant/messages";
import {resultPreset} from "./QuestionPreset";
import './Styles/css/SelectDrinkItPage.css';
import {useNavigate} from "react-router-dom";
import {HighlightSpan} from "./Component/HighlightSpan";
import strings from "./Constant/strings";
import {predictVar} from "./Cache/cache";

type Props = {

};
export const SelectDrinkItPage = (props: Props) => {
    const navigation = useNavigate()

    const shuffledList = resultPreset?.sort(() => Math.random() - 0.5)

    const onClickDrinkIt = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, selectedId: number) => {
        predictVar(selectedId)
        navigation('/question')
    }

    return (
        <div className="select_drink_it_page">
            <div className="select_drink_it_content">
                <HighlightSpan className="predict_message" originKeyword={messages.predictDrinkIt} highlightKeyword={strings.drinkItEng} />
            <div className="drink_it_list">
                {
                    shuffledList?.map((data, index) => (index % 2 == 0 && index != resultPreset?.length - 1) ?
                        <div className="drink_it_data_group" key={`${data?.id}_${index}`}>
                            <div className="drink_it_data" onClick={(e) => onClickDrinkIt(e, data?.id)}>
                                <img className="drink_it_image" alt='drink_it_image' src={require(`./Images/${data?.drinkImg}`)} />
                                <div className="drink_it_name">{`${data?.spaceName}에서의\n${data?.drinkName}`}</div>
                            </div>
                            <div className="drink_it_data" onClick={(e) => onClickDrinkIt(e, shuffledList[index + 1]?.id)}>
                                <img className="drink_it_image" alt='drink_it_image' src={require(`./Images/${shuffledList[index + 1]?.drinkImg}`)} />
                                <div className="drink_it_name">{`${shuffledList[index + 1]?.spaceName}에서의\n${shuffledList[index + 1]?.drinkName}`}</div>
                            </div>
                        </div> : <></>)
                }
            </div>
            </div>
        </div>
    );
};