import React, { useState } from "react";
import "../../common/init.css";
import "../../common/sizes.css";
import "../../App.css";
import "./InquiryHistory.css";
import "../MyReservation/MyReservation.css";
import ShowMyInquiryHistory from "./ShowInquiryHistory";
import ShowInquiryAnswerHistory from "./ShowInquiryAnswerHistory";
import MyPageMedia from "../MyPage/MyPageMedia";

const InquiryHistory = () => {
  const [ShowInquiryHistory, ShowInquiryHistoryset] = useState(false);
  return (
    <div className="mediaWrapCampingHistoryDeskFlex">
      <div className="campingHistoryMypageWrap">
        <MyPageMedia></MyPageMedia>
      </div>
      <div className="wholeWrapCampingHistory">
        <h1 className="titleFontMyReservation">문의내역</h1>
        <ShowMyInquiryHistory />
      </div>
    </div>
  );
};

export default InquiryHistory;
