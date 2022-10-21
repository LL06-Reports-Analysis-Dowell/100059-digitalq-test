import CupertinoFooter2 from "../components/CupertinoFooter2";

import "../assets/css/sixteenscreen.css";
import "../assets/css/utilities.css";
import info from "../assets/images/info.png"
import { AiOutlineMessage, AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export const SixteenScreen = () => {
    return (
        <div className="background">
            <div className="row ht">
                <span className="logintext">Login</span>
                {/* <br /> */}
                <span className="talk">Payments after full <br /> login/join us</span>

            </div>

            <div className="row text-center">
                <div className="loginmain">
                    {/* <Link to="/ninescreen">nn</Link> */}
                    <div className="loginbtn" type="button">Logged in</div>
                </div>
            </div>

            <div className="ht d-flex justify-content-between pb-3">
                <div>
                    <AiOutlineMessage size="20px" color="rgb(255, 57, 57)" />
                </div>
                <div>
                    <AiOutlineInfoCircle size={"20px"} color="rgb(255, 57, 57)" />
                </div>
            </div>
            <CupertinoFooter2 />
        </div>
    )
}