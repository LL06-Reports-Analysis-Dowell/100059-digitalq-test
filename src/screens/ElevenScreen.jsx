// import CupertinoFooter2 from "../components/CupertinoFooter2";
// import { Headerr } from "../components/Headrr";

// import "../assets/css/elevenscreen.css";
// import "../assets/css/utilities.css";
// import { TbPower, TbShieldCheck } from "react-icons/tb";
// import { BsEyeSlash } from "react-icons/bs";
// import rightcircle from "../assets/images/rightcircle.png"
// import newupdate from "../assets/images/newupdate.png"
// import { Link } from "react-router-dom";

// export const ElevenScreen = () => {
//     return (
//         <div className="background">
//             {/* Header component  */}
//             <Headerr text='Data Safety and Personal Privacy'/>
//             {/* Data safety  */}
//             <div className="datasafety">
//                 <div className="d-flex justify-content-left">
//                     <div><TbShieldCheck size="30px" color="green" /></div>
//                     <div className="ps-1">Data Safety</div>
//                 </div>
//                 <div className="boxx">
//                     <div className="">
//                         <p>
//                             Dowell may collect certain personally identifiable information (“personal information”) about you when you visit our App. Examples of personal information we may collect include your name, address, telephone number, fax number, and e-mail address.
//                             We also automatically collect certain non-personally identifiable information when you visit our App, including, but not limited to, the location, the type of browser you are using, the type of operating system you are using, and the domain name of your Internet service provider.
//                             <span className="righttext">
//                                 <Link to="/TwelveScreen">More</Link>
//                             </span>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <br />

//             {/* Personal Privacy */}
//             <div className="personalPrivacy">
//                 <div className="d-flex justify-content-left">
//                     <div><BsEyeSlash size="30px" color="green" /></div>
//                     <div className="ps-1">Personal Privacy</div>
//                 </div>
//                 <div className="boxx">
//                     <div className="">
//                         <p>
//                             You provide your personal information (first name, last name, email, phone number, company name, etc.) to us while creating an account with us. We store this information reliably. We use this information to serve you better. This information is only available to the employees, contractors, and subcontractors of DOWELL WIFI QR CODE REVIEWS and is never shared for commercial gains to unauthorized personnel or businesses.
//                             <span className="righttext">
//                                 <Link to="/ThirteenScreen">More</Link>
//                             </span>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <br />

// {/* Disclaimer */}
// <div className="personalPrivacy">
//     <div className="boxx">
//         <div className="">
//             <p>
//                 <b>Disclaimer -</b>  We may process your user Information where: you have given your consent; the processing is necessary for a contract between you and us; the processing is required by applicable law; the processing is necessary to protect the vital interests of any individual; or where we have a valid legitimate interest in the processing.
//                 <span className="righttext">
//                     <Link to="/FourteenScreen">More</Link>
//                 </span>
//             </p>
//         </div>
//     </div>
// </div>
// <br />

// {/* app details  */}
// <div className="appdetails">
//     <div className="boxx p-2">
//         <div className="row">
//             <div className="col-4">
//                 <p>App details</p>
//                 <img src={rightcircle} alt="img" className="lastimage" />
//             </div>
//             <div className="col-4">
//                 <b>Installation ID</b>
//                 <p>1234567890</p>
//                 <b>Installed version</b>
//                 <b>8.00.00</b>
//             </div>
//             <div className="col-4">
//                 <div>
//                     <img src={newupdate} alt="img" className="lastimage" />
//                 </div>
//                 <div className="btn btn-outline-success">
//                     Install
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>

// <br />

//             <CupertinoFooter2 />
//         </div>
//     )
// }

import React, { useState } from "react";
import styled from "styled-components";
import "../components/drop.css";
import CupertinoFooter2 from "../components/CupertinoFooter2";
import { Headerr } from "../components/Headrr";

// import "../assets/css/twelvescreen.css";
import "../assets/css/elevenscreen.css";
import "../assets/css/utilities.css";

import { TbPower, TbShieldCheck } from "react-icons/tb";
import { BsEyeSlash } from "react-icons/bs";
import rightcircle from "../assets/images/rightcircle.png"
import newupdate from "../assets/images/newupdate.png"
import { Link } from "react-router-dom";


export const ElevenScreen = () => {
    React.useEffect(() => {
        // console.log(ProdCode, "kkkkkkkkkkkkkkkk");
    }, []);

    return (
        <Container>
            <RectStack>
                <Dowell>
                    <Headerr text='Data Safety and Personal Privacy' />
                    <div className="contain px-1">
                        {/* Data safety  */}
                        <div className="datasafety">
                            <div className="d-flex justify-content-left">
                                <div><TbShieldCheck size="50px" color="green" /></div>
                                <div className="texthead ps-1">Data Safety</div>
                            </div>
                            <div className="boxx">
                                <div className="text">
                                    <p>
                                        &emsp; &emsp; Dowell may collect certain personally identifiable information (“personal information”) about you when you visit our App. Examples of personal information we may collect include your name, address, telephone number, fax number, and e-mail address.

                                        We also automatically collect certain non-personally identifiable information when you visit our App, including, but not limited to, the location, the type of browser you are using, the type of operating system you are using, and the domain name of your Internet service provider.
                                        <span className="righttext">
                                            <Link to="/TwelveScreen">More</Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <br /> */}

                        {/* Personal Privacy */}
                        <div className="personalPrivacy">
                            <div className="d-flex justify-content-left">
                                <div><BsEyeSlash size="50px" color="green" /></div>
                                <div className="texthead ps-1">Personal Privacy</div>
                            </div>
                            <div className="boxx">
                                <div className="text">
                                    <p>
                                        &emsp; &emsp; You provide your personal information (first name, last name, email, phone number, company name, etc.) to us while creating an account with us. We store this information reliably. We use this information to serve you better. This information is only available to the employees, contractors, and subcontractors of DOWELL WIFI QR CODE REVIEWS and is never shared for commercial gains to unauthorized personnel or businesses.
                                        <span className="righttext">
                                            <Link to="/ThirteenScreen">More</Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <br /> <br />

                        {/* Disclaimer */}
                        <div className="Disclaimer">
                            <div className="boxx">
                                <div className="text">
                                    <p>
                                        <b>Disclaimer -</b> We may process your user Information where: you have given your consent; the processing is necessary for a contract between you and us; the processing is required by applicable law; the processing is necessary to protect the vital interests of any individual; or where we have a valid legitimate interest in the processing.
                                        <span className="righttext">
                                            <Link to="/ThirteenScreen">More</Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <br /> <br />

                        {/* app details  */}
                        <div className="appdetails">
                            <div className="boxx p-2">
                                <div className="row">
                                    <div className="col-4">
                                        <p>App details</p>
                                        <img src={rightcircle} alt="img" className="lastimage" />
                                    </div>
                                    <div className="col-4">
                                        <b>Installation ID</b>
                                        <p>1234567890</p>
                                        <b>Installed version</b>
                                        <b>8.00.00</b>
                                    </div>
                                    <div className="col-4">
                                        <div>
                                            <img src={newupdate} alt="img" className="lastimage" />
                                        </div>
                                        <div className="btn btn-outline-success">
                                            Install
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br />


                    </div>
                    <CupertinoFooter2
                        style={{
                            height: 50,
                            width: 327,
                            position: "absolute",
                            top: 680,
                            left: 17,
                        }} />
                </Dowell>
            </RectStack>
        </Container>
    );
}
const Container = styled.div`
  display: flex;
  border-style: solid;
  left: 30%;
  position: absolute;
  height: fit-content;
`;
const RectStack = styled.div`
  width: 381px;
  height: 738px;
  margin-top: 50px;
  position: relative;
  border-radius: 10px;
`;
const Dowell = styled.div`
  top: -25px;
  left: 13px;
  width: 357px;
  height: 740px;
  position: absolute;
  background-color: rgba(212, 253, 194, 0.91);
  border-width: 1px;
  border-color: rgba(0, 0, 0, 1);
  flex-direction: column;
  display: flex;
  border-style: solid;
  border-radius: 25px;
`;
