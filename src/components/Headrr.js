import logo from "../assets/images/logo.png";

import "../assets/css/header.css";

export const Headerr = ({ text }) => {
  return (
    <div>
      <div>
        <div className="d-flex justify-content-between">
          <div>
            <p className="TextHead">{text}</p>
          </div>
          <div>
            <img className="pic" src={logo} alt="" />
          </div>
        </div>
        <hr
          style={{
            marginLeft: "0",
            width: "95%",
            marginTop: "-11px",
            borderColor: "green",
          }}
        />
      </div>
    </div>
  );
};
