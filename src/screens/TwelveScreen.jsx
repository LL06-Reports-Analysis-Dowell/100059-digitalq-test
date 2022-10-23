import React, { useState } from "react";
import styled from "styled-components";
import "../components/drop.css";
import CupertinoFooter2 from "../components/CupertinoFooter2";
import { Headerr } from "../components/Headrr";

import "../assets/css/twelvescreen.css";
import "../assets/css/utilities.css";

export const TwelveScreen = () => {
    React.useEffect(() => {
        // console.log(ProdCode, "kkkkkkkkkkkkkkkk");
    }, []);

    return (
        <Container>
            <RectStack>
                <Dowell>
                    <Headerr text='Security Policy' className="text-primary"/>
                    <div className="contain px-3 pt-3">
                        <p className="headd">Security Policy</p>
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

                            Where this comes into play with QR Codes is during the scanning process. Ads for websites often contain QR Codes that direct users to a specific landing page. What can happen is that the link created for this website has been redirected to a new website with security issues. The key is that the website looks professional and like a real company so that users feel comfortable with providing personal information. Particularly on mobile, most users also don’t take the time to check if the URL looks strange.

                            The digital sphere is not the only space this happens. Hackers can also place print QR Codes in public places so that people scanning them end up entering a type of login information. It can be especially dangerous if this login is for websites such as online banking or other sensitive data. Though this type of scam is limited in scope, case studies have shown that it is nonetheless effective.

                            Malicious software

                            The security risk related to malicious software comes with downloads, many of which are directed at Android users due to open-source software. Known as a “drive-by download attack”, the process invol
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
