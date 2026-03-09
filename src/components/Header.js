import { LOGO_URL } from "../utils/constant";
import { use, useState } from "react";
import { Link } from "react-router-dom";
import useOfflineStatus from "../utils/useOfflineStatus";

const Header = () => {

    const [loginBtnText, setLoginBtnText] = useState("Login");
    const offlineStatus = useOfflineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                     src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Offine Status: {offlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        loginBtnText === "Login" ? setLoginBtnText("Logout"): 
                        setLoginBtnText("Login");
                    }}>{loginBtnText}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;