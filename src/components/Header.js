import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOfflineStatus from "../utils/useOfflineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [loginBtnText, setLoginBtnText] = useState("Login");
    const offlineStatus = useOfflineStatus();

    const { loggedInUser } = useContext(UserContext);

    const items = useSelector((store) => store.cart.items);

    return (
        <div className="flex p-4 items-center justify-between bg-green-200 shadow-lg h-32">
            <div className="w-28">
                <img className="m-1"
                     src={LOGO_URL}/>
            </div>
            <div className="flex m-4 p-4 items-center">
                <ul className="flex">
                    <li className="m-4 p-4">Offine Status: {offlineStatus ? "🟢" : "🔴"}</li>
                    <li className="m-4 p-4"><Link to="/">Home</Link></li>
                    <li className="m-4 p-4"><Link to="/about">About Us</Link></li>
                    <li className="m-4 p-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="m-4 p-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="m-4 p-4 font-bold text-2xl"><Link to="/cart">🛒 ({items.length} items)</Link></li>
                    <button className="p-4 m-4" onClick={() => {
                        loginBtnText === "Login" ? setLoginBtnText("Logout"): 
                        setLoginBtnText("Login");
                    }}>{loginBtnText}</button>
                    <li className="m-4 p-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;