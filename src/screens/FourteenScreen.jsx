import React, { useState } from "react";
import styled from "styled-components";
import "../components/drop.css";
import CupertinoFooter2 from "../components/CupertinoFooter2";
import { Headerr } from "../components/Headrr";

import "../assets/css/twelvescreen.css";
import "../assets/css/utilities.css";

export const FourteenScreen = () => {
    React.useEffect(() => {
        // console.log(ProdCode, "kkkkkkkkkkkkkkkk");
    }, []);

    return (
        <Container>
            <RectStack>
                <Dowell>
                    <Headerr text='Disclaimer' />
                    <div className="contain px-3 pt-3">
                        <p className="headd">Disclaimer</p>
                        <p>
                            The information contained in this App is for general information purposes only. The materials on this App may contain inaccuracies and typographical errors and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the App or the information, products, services, or related graphics contained on the App for any purpose. Any reliance you place on such information is therefore strictly at your own risk. Dowell reserves the right, in its sole discretion, to correct any error or omission in any portion of the site. Dowell may make any other changes to the site, the materials, and the products, programs, services, or prices described in this App at any time without notice. The information, materials, and the software made available on this App, are provided "As Is" without any representation or warranty, express or implied, of any kind, including, but not limited to, warranties of merchantability, non-infringement, or fitness for any particular purpose, some jurisdictions do not allow for the exclusion of implied warranties, so the above exclusions may not apply to you. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this App. Through this App, you are able to link to other Apps which are not under the control of Dowell. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them. Every effort is made to keep the App up and running smoothly. However, Dowell takes no responsibility for, and will not be liable for, the App being temporarily unavailable due to technical issues beyond our control.



                            <br /><br /> You are solely responsible for any consequences, losses, or damages that we may directly or indirectly incur or suffer due to any unauthorized activities conducted by you, as explained above, and may incur criminal or civil liability.


                        </p>
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
