import React from "react";
import "./Header.css";
import logoImg from "../../images/campingonLogo.jpg";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import Mynotification from "../MyNotification/Mynotification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const Header = () => {
  const [notification, setNotification] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const navigate = useNavigate();
  const Logincheck = localStorage.getItem("isLogin", true);
  const [userGrade, setuserGrade] = useState(1);
  // loading.js 에서 Header 삭제
  if (window.location.pathname === "/loading") return null;
  axios.get("/user/" + localStorage.getItem("userId")).then((response) => {
    setuserGrade(response.data.userGrade);
  });
  const login = () => {
    navigate("/login");
  };
  const mypage = () => {
    userGrade === 2
      ? (window.location.href = "http://13.209.73.138:8080/admin")
      : navigate("/mypage");
  };

  return (
    <div className="headerWrap">
      <div className="header">
        <div className="headerLogo">
          <Link to="/">
            <img src={logoImg} alt="캠핑온로고"></img>
          </Link>
        </div>
        <div className="headerNavigation">
          {Logincheck ? (
            <>
              <div className="PageButton" onClick={mypage}>
                MY
              </div>
              <div
                className="MenuButton"
                onClick={() => setNotification(!notification)}
              >
                <FontAwesomeIcon icon={faBell} />
              </div>
            </>
          ) : (
            <span
              onClick={login}
              className="LoginButton"
              style={{
                "font-size": "20px;",
                color: "white",
                width: "50px",
                "margi-right": "5px",
              }}
            >
              로그인
            </span>
          )}
        </div>

        <div className="mynotificationWrap">
          {notification ? <Mynotification /> : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
