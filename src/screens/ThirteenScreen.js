import React from "react";
import styled from "styled-components";
import "../components/drop.css";
import CupertinoFooter2 from "../components/CupertinoFooter2";
import { Headerr } from "../components/Headrr";

import "../assets/css/twelvescreen.css";
import "../assets/css/utilities.css";

export const ThirteenScreen = () => {
  return (
    <Container>
      <RectStack>
        <Dowell>
          <Headerr text="Privacy Policy" />
          <div className="contain px-2 pt-3">
            <p className="headd">Privacy policy</p>
            <p>
              Introduction <br /> <br />
              This Privacy Policy is part of DOWELL WIFI QR CODE REVIEWS Terms
              of Use and describes the privacy practices of DOWELL WIFI QR CODE
              REVIEWS. It explains when and how DOWELL collects end user and
              client information, how we use such information, and the
              circumstances under which we may disclose such information to
              others. This Privacy Policy includes the policies that DOWELL WIFI
              QR CODE REVIEWS observe for compliance with laws in Singapore.
              Your privacy is of paramount importance to DOWELL WIFI QR CODE
              REVIEWS. This policy applies to all products and services offered
              by DOWELL WIFI QR CODE REVIEWS.
              <br />
              <br /> What type of Information We Gather <br />
              <br />
              Because DOWELL allows you to add its outputs (QR Codes, URLs) on
              your promotional material (Print advertisements, Websites, Online
              Ads, Packaging etc.), you must register for an account for the
              desired services. The registration process asks for your personal
              information such as but not limited to: First Name, Last Name
              Email Address Password By the nature of our Service, DOWELL will
              gather non-personally identifiable statistics about the usage of
              our outputs in your promotions and store that information.
              <br />
              <br />
              How do we use this Information <br />
              <br />
              When you log into the Service, our servers automatically record
              information that you enter in the app. These server logs may
              include information such as your web request, Internet Protocol
              address, browser type, browser language, the date and time of your
              request, browser user agent, and one or more cookies that may
              uniquely identify your browser.
              <br />
              <br /> When you send email or other communication to DOWELL, we
              may retain those communications in order to process your
              inquiries, respond to your requests and improve our services.
              DOWELL will not share your personal information without your
              consent or unless required by law. DOWELL will not share your
              website/app statistics without your consent.
            </p>
          </div>
          <CupertinoFooter2
            style={{
              height: 50,
              width: 327,
              position: "absolute",
              top: 680,
              left: 17,
            }}
          />
        </Dowell>
      </RectStack>
    </Container>
  );
};
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
