import logo from "../assets/images/logo.png";
import "../assets/css/elevenscreen.css";
import "../assets/css/utilities.css";

export const Headerr = () => {
    return (
        <div>
            <div>
                <div className="d-flex justify-content-between">
                    <div><p className="texthead">Data Safety and Personal Privacy</p></div>
                    <div><img className="logo" src={logo} alt="image" /></div>
                </div>
            </div>
            <hr
                style={{
                    width: "95%",
                    borderColor: "green",
                    marginTop: "-10px",
                }}
            />
        </div>
    )
}