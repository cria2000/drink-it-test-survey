import * as React from 'react';
import strings from "./strings";
import {HighlightSpan} from "./Component/HighlightSpan";
import messages from "./messages";
import './Styles/css/MainFrame.css'

type Props = {

};
export const MainFrame = (props: Props) => {
    return (
        <div className="main_frame">
            <div className="change_language">
                <button className="button_change" />
                <div>{strings.eng}</div>
            </div>
            <div className="main_title">
                <div>{strings.mainTitle}</div>
                <HighlightSpan originKeyword={messages.whatIsMyDrinkIt} highlightKeyword={strings.drinkIt} />
            </div>
            <div className="main_start_button">
                <button className="button_start">{messages.startTest}</button>
            </div>
            <div className="main_enquiry_information">
                <div>{messages.enquiryInformation}</div>
                <div>{messages.testEnquiry}</div>
                <div>{messages.drinkItEnquiry}</div>
            </div>
        </div>
    );
};