import CupertinoFooter2 from "../components/CupertinoFooter2";
import { Headerr } from "../components/Headrr";
import logo from "../assets/images/logo.png";

import "../assets/css/twelvescreen.css";
import "../assets/css/utilities.css";

export const TwelveScreen = () => {
    return (
        <div className="background">
            {/* Header component  */}
            <Headerr text='Security Policy' />
            {/* <div >
                <div>
                    <div className="d-flex justify-content-between">
                        <div><p className="texthead">Security Policy</p></div>
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
                <b>Security Policy</b>
                <br />
                <br />
                <p>
                    Are QR Codes secure?

                    QR Codes are secure. Static QR Codes are machine-readable and the content inside them cannot be changed once generated. The content inside a Dynamic QR Code, however, can be changed, but you would need access to the user account that created them in the first place.

                    Can QR Codes be hacked?

                    The actual QR Codes themselves can’t be hacked. This is because they are built using a square matrix with pixelated dots so these dots would have to be changed in order to be “hacked.”

                    WiFi QR Code technology is not a security risk alone. Security issues arise from the information connected to the QR Code.

                    Potential WiFi QR Code security issues

                    There are some associated security risks with scanning QR Codes if they don’t come from a trusted sender. There are three types of security risks related to QR Codes, but keep in mind that these security risks have nothing to do with the technology of QR Codes themselves.

                    Phishing

                    Phishing is a common way that hackers break into websites. Usually, they start by sending a fake login page for the website via email. An unsuspecting person may find this email quite convincing as they can include company logos and similar graphics styles so it does look like a real company. Once this login information is sent, this allows the attacker easy access to the website.

                    Where this comes into play with QR Codes is during the scanning process.
                </p>
            </div>


            <br />
            <CupertinoFooter2 />
        </div>
    )
}
