import { Container } from "react-bootstrap"
import CupertinoFooter2 from "../components/CupertinoFooter3";
import "../assets/css/elevenscreen.css";
import "../assets/css/utilities.css";
import logo from "../assets/images/logo.png";
import { TbPower, TbShieldCheck } from "react-icons/tb";
import { BsEyeSlash } from "react-icons/bs";
import rightcircle from "../assets/images/rightcircle.png"
import newupdate from "../assets/images/newupdate.png"

export const ElevenScreen = () => {
    return (
        <div className="background">
            <br />
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
            {/* Data safety  */}
            <div className="datasafety">
                <div className="d-flex justify-content-left">
                    <div><TbShieldCheck size="30px" color="green" /></div>
                    <div>Data Safety</div>
                </div>
                <div className="boxx">
                    <div className="">
                        <p>
                            Dowell may collect certain personally identifiable information (“personal information”) about you when you visit our App. Examples of personal information we may collect include your name, address, telephone number, fax number, and e-mail address.
                            We also automatically collect certain non-personally identifiable information when you visit our App, including, but not limited to, the location, the type of browser you are using, the type of operating system you are using, and the domain name of your Internet service provider.
                            <span className="righttext">
                                <a className="">More</a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <br />

            {/* Personal Privacy */}
            <div className="personalPrivacy">
                <div className="d-flex justify-content-left">
                    <div><BsEyeSlash size="30px" color="green" /></div>
                    <div>Personal Privacy</div>
                </div>
                <div className="boxx">
                    <div className="">
                        <p>
                            You provide your personal information (first name, last name, email, phone number, company name, etc.) to us while creating an account with us. We store this information reliably. We use this information to serve you better. This information is only available to the employees, contractors, and subcontractors of DOWELL WIFI QR CODE REVIEWS and is never shared for commercial gains to unauthorized personnel or businesses.
                            <span className="righttext">
                                <a className="">More</a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <br />

            {/* Disclaimer */}
            <div className="personalPrivacy">
                <div className="boxx">
                    <div className="">
                        <p>
                            <b>Disclaimer -</b>  We may process your user Information where: you have given your consent; the processing is necessary for a contract between you and us; the processing is required by applicable law; the processing is necessary to protect the vital interests of any individual; or where we have a valid legitimate interest in the processing.
                            <span className="righttext">
                                <a className="">More</a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <br />

            <div className="personalPrivacy">
                <div className="boxx">
                    <div className="row">
                        <div className="col-4">
                            <p>App details</p>
                            <img src={rightcircle} alt="img" className="lastimage"/>
                        </div>
                        <div className="col-4">
                            <b>Installation ID</b>
                            <p>1234567890</p>
                            <b>Installed version</b>
                            <b>8.00.00</b>
                        </div>
                        <div className="col-4">
                            <div>
                            <img src={newupdate} alt="img" className="lastimage"/>
                            </div>
                            <div className="btn btn-outline-success">
                            Install
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <CupertinoFooter2 />
        </div>
    )
}
