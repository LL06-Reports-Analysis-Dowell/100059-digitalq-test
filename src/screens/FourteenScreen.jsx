import CupertinoFooter2 from "../components/CupertinoFooter2";
import { Headerr } from "../components/Headrr";
import logo from "../assets/images/logo.png";

import "../assets/css/twelvescreen.css";
import "../assets/css/utilities.css";

export const FourteenScreen = () => {
    return (
        <div className="background">
            <div >
                <div>
                    <div className="d-flex justify-content-between">
                        <div><p className="texthead">Disclaimer</p></div>
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

            <div className="ps-2 pt-3">
                <b>Disclaimer</b>
                <p>
                    The information contained in this App is for general information purposes only. The materials on this App may contain inaccuracies and typographical errors and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the App or the information, products, services, or related graphics contained on the App for any purpose. Any reliance you place on such information is therefore strictly at your own risk. Dowell reserves the right, in its sole discretion, to correct any error or omission in any portion of the site. Dowell may make any other changes to the site, the materials, and the products, programs, services, or prices described in this App at any time without notice. The information, materials, and the software made available on this App, are provided "As Is" without any representation or warranty, express or implied, of any kind, including, but not limited to, warranties of merchantability, non-infringement, or fitness for any particular purpose, some jurisdictions do not allow for the exclusion of implied warranties, so the above exclusions may not apply to you. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this App. Through this App, you are able to link to other Apps which are not under the control of Dowell.

                </p>
            </div>


            <br />
            <CupertinoFooter2 />
        </div>
    )
}
