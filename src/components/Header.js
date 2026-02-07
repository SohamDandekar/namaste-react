import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {

    const [loginBtnText, setLoginBtnText] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                     src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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