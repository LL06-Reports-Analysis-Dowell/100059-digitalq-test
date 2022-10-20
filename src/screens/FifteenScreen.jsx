// import CupertinoFooter2 from "../components/CupertinoFooter2";
import { Headerr } from "../components/Headrr";

import thankyou from "../assets/images/thank_you.png"
import logo from "../assets/images/logo.png"
import info from "../assets/images/info.png"
import think from "../assets/images/think.png"
import motion from "../assets/images/motion.gif"

import "../assets/css/fifteenscreen.css";
import "../assets/css/utilities.css";
import { FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";

export const FifteenScreen = () => {
    return (
        <div className="background">
            {/* Header component  */}
            <Headerr text='Your Comments' />

            {/* comment pic  */}
            <div className="">
                <div className="boxx">
                    <div className="row">
                        <div className="col-6">
                            <img src={think} alt="" width={"140px"} height={"150px"} style={{marginTop:"20px"}}/>
                        </div>
                        <div className="col-6">
                            <div className="comment p-2">
                                <img src={motion} alt="" width={"70px"} height={"80px"} style={{position: 'relative', marginLeft: "85px", zIndex:2, bottom:"-10px" }} />
                                <p style={{marginTop:"-30px"}}>
                                    Contribute your comments and suggestions about DoWell UX Live App in 2 minutes and get rewarded
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <br />

            {/* icon sections  */}
            <div className="">
                <div className="boxx">
                    <div className="">
                        <p><b>Do you recommend this App to your friends and colleagues</b></p>
                    </div>

                    <div className="icon">
                        <div className="row d-flex justify-content-center">
                            <div className="col-4 btn">
                                <div className="btnicon">
                                    🙁No
                                </div>
                            </div>

                            <div className="col-4 btn">
                                <div className="btnicon ">
                                    🙂May be
                                </div>
                            </div>

                            <div className="col-4 btn">
                                <div className="btnicon ">
                                    😄Yes
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br /> <br />
            <br />

            <div className="d-flex justify-content-center ">
                <img src={thankyou} alt="image" className="thankyou" />
            </div>

            <div >
                <div className="d-flex justify-content-between p-4">
                    <div className="">
                        <img src={logo} alt="img" height="40px" className="ps-4" /> <br />
                        <p><span style={{ color: "gray" }}>DoWell</span> <span style={{ color: "green" }}>Digital Q</span></p>
                    </div>

                    <div className="exit">
                        Do you want to exit?
                    </div>
                </div>

                <div className="d-flex justify-content-between" style={{ marginTop: '-50px' }}>
                    <div className="pt-5">
                        <img src={info} alt="" height="35px" />
                    </div>
                    <div className="">
                        <Link to="/">
                            <FaPowerOff size="53px" color="gray" style={{ transform: 'rotate(90deg)' }} /> <br />
                        </Link>
                        Close App

                    </div>
                </div>

            </div>
        </div>
    )
}
