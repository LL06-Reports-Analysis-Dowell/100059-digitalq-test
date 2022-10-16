import CupertinoFooter2 from "../components/CupertinoFooter2";
import { Headerr } from "../components/Headrr";
import logo from "../assets/images/logo.png";

import "../assets/css/twelvescreen.css";
import "../assets/css/utilities.css";

export const ThirteenScreen = () => {
    return (
        <div className="background">
            {/* Header component  */}
            <Headerr text='Privacy Policy' />
            {/* <div >
                <div>
                    <div className="d-flex justify-content-between">
                        <div><p className="texthead">Privacy Policy</p></div>
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
            </div> */}

            <div className="ps-2 pt-3">
                <b>Privacy policy</b>
                <br />
                <br />


                <p>Introduction</p>
                <br />
                <p>
                    This Privacy Policy is part of DOWELL WIFI QR CODE REVIEWS Terms of Use and describes the privacy practices of DOWELL WIFI QR CODE REVIEWS. It explains when and how DOWELL collects end user and client information, how we use such information, and the circumstances under which we may disclose such information to others. This Privacy Policy includes the policies that DOWELL WIFI QR CODE REVIEWS observe for compliance with laws in Singapore. Your privacy is of paramount importance to DOWELL WIFI QR CODE REVIEWS. This policy applies to all products and services offered by DOWELL WIFI QR CODE REVIEWS.
                </p>
                <br />


                <p>
                    What type of Information We Gather
                </p>
                <br />
                <p>Because DOWELL allows you to add its outputs (QR Codes, URLs) on your promotional material (Print advertisements, Websites, Online Ads, Packaging etc.), you must register for an account for the desired services. The registration process asks for your personal information such as but not limited to:

                </p>
            </div>


            <br />
            <CupertinoFooter2 />
        </div>
    )
}
