import React, { useEffect, useState } from "react";
import heartOn from "../../images/heart.png";
import heartOff from "../../images/noneheart.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CampingList = ({ camping }) => {
  const navigate = useNavigate();
  const [pick, setPick] = useState();
  const [campingdata, setcampingdata] = useState();
  let campLength = camping.length;
  // 주소주기
  const getcapingNumber = (e) => {
    navigate("/viewdetail/" + e);
  };
  // 하나만 찜
  const [isBoxSelect, setBoxSelect] = useState([]);
  isBoxSelect.fill(false, 0, campLength);
  // camping.length.fill(false);
  const handleIDX = (campIdx) => {
    const newArr = isBoxSelect;
    // const newArr;
    // const newArr = Array(campIdx.length).fill(false);
    // // const newArr;
    isBoxSelect[campIdx] ? (newArr[campIdx] = false) : (newArr[campIdx] = true);
    setBoxSelect(newArr);
  };
  const doClick = (campIdx) => {
    // if (campIdx in indexList)
    setPick(pick ? false : true);
    if (!pick) {
      axios
        .post("/pick", {
          user: {
            userNumber: localStorage.getItem("userId"),
          },
          campsite: {
            campsiteIndex: campIdx,
          },
        })
        .then((response) => {});
    }
    if (pick) {
      axios
        .delete("/pick/" + campIdx + "&" + localStorage.getItem("userId"), {})
        .then((response) => {});
    }
  };

  // useEffect(pick.push(camping), []);
  return (
    //여기 지우고
    <div className="companyContentsList">
      <div className="companyContentsUnderBar">
        <span className="companyContentsTitle">캠핑장 목록</span>
      </div>
      <div className="companyContentsCampingListAll">
        {camping.map((camping) => {
          return (
            <div
              key={camping.campsiteIndex}
              value={camping.campsiteIndex}
              className="companyContents"
            >
              <div
                className="companyContentsImg"
                onClick={() => getcapingNumber(camping.campsiteIndex)}
              >
                <img src={camping.topImage} alt="대표사진"></img>
              </div>
              <div className="companyContentsText">
                <div className="companyContentsRowFlex">
                  <h2 className="companyContentsInfoH2">
                    {camping.campsiteName}
                  </h2>
                  {isBoxSelect[camping.campsiteIndex] ? (
                    <img
                      key={camping.campsiteIndex}
                      onClick={() => {
                        handleIDX(camping.campsiteIndex);
                        // setPick(!pick);
                        doClick(camping.campsiteIndex);
                      }}
                      src={heartOn}
                      alt="찜아이콘"
                      className="contentsHeartLikeCamping"
                      value={camping.campsiteIndex}
                    ></img>
                  ) : (
                    <img
                      onClick={() => {
                        handleIDX(camping.campsiteIndex);
                        // setPick(!pick);
                        doClick(camping.campsiteIndex);
                      }}
                      src={heartOff}
                      alt="찜아이콘"
                      className="contentsHeartLikeCamping"
                      value={camping.campsiteIndex}
                    ></img>
                  )}
                </div>
                <p className="companyContentsInfoP">
                  {camping.campsiteIntroduction}
                </p>
                <p className="companyContentsInfoP">
                  대표옵션 :{camping.barbecue ? "바베큐 " : null}
                  {camping.store ? "편의점 " : null}
                  {camping.parking ? "주차장 " : null}
                  {camping.pet ? "반려동물 " : null}
                  {camping.bathroom ? "화장실 " : null}
                  {camping.wifi ? "WI-FI " : null}
                  {camping.shower ? "샤워 시설 " : null}
                  {camping.pool ? "수영장" : null} <br></br>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CampingList;
