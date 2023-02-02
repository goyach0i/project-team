
import axios from 'axios';
import './CampingHistory.css';
import '../MyPage/MyPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground } from '@fortawesome/free-solid-svg-icons';
import MyPageMedia from '../MyPage/MyPageMedia';
import React, { useEffect, useState } from 'react';


const CampingHistory = () => {
  // 시작
  const [data, setData] = useState([]);

  const getReservationHistory = () => {
    axios.get('/myReservationHistory/' + localStorage.getItem('userId'), {}).then((response) => {
      setData(response.data);
      // console.log(response.data);
    });
  };
  useEffect(getReservationHistory, []);
  return (
    <div className="mediaWrapCampingHistoryDeskFlex">
      <div className="wholeWrapMyPageMedia">
        <MyPageMedia></MyPageMedia>
      </div>

      <div className="wholeWrapCampingHistory">
        <h1 className="titleFontCampingHistory">캠핑기록</h1>
        <div className="contentsCampingHistory">
          {data.map((v) => {
            return (
              <>
                <h1 className="contensNameCampingHistory">{v.campsite.campsiteName}</h1>
                <div className="contentsStoryCampingHistory">
                  <div className="contentsImgCampingHistory">
                    <img src={v.campsite.topImage}></img>
                  </div>
                  <table className="contentstableCampingHistory">
                    <tbody>
                      <tr key={v.campsite.campsiteIndex} onClick={() => {}}>
                        <td className="contentsHeadTitleCampingHistory">예약 날짜</td>
                        <td className="contentsHeadTitleCampingHistory">{v.reservationDate}</td>
                      </tr>

                      <tr key={v.campsite.campsiteIndex} onClick={() => {}}>
                        <td className="contentsHeadTitleCampingHistory">금액</td>
                        <td className="contentsHeadTitleCampingHistory">{v.campsite.campsitePrice}</td>
                      </tr>
                  

                    </tbody>
                    
                  </table>
                </div>
              </>
            );
          })}
        </div>
        <div className="contentsCampingHistory">
          <h1 className="contensNameCampingHistory">캠핑장명</h1>
          <div className="contentsStoryCampingHistory">
            <div className="contentsImgCampingHistory"></div>
            <table className="contentstableCampingHistory">
              <tr>
                <td className="contentsHeadTitleCampingHistory">캠핑날짜</td>
                <td></td>
              </tr>
              <tr>
                <td className="contentsHeadTitleCampingHistory">예약인원</td>
                <td></td>
              </tr>
              <tr>
                <td className="contentsHeadTitleCampingHistory">평 점</td>
                <td className="contentsIconCampingHistory">
                  <FontAwesomeIcon icon={faCampground} /> <FontAwesomeIcon icon={faCampground} /> <FontAwesomeIcon icon={faCampground} />{' '}
                  <FontAwesomeIcon icon={faCampground} /> <FontAwesomeIcon icon={faCampground} />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampingHistory;
