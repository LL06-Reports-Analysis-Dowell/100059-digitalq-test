import React from "react";
import styled from "styled-components";
import "../components/drop.css";
import CupertinoFooter2 from "../components/CupertinoFooter2";
import { BsInfoCircle } from "react-icons/bs";
import { TbMessageCircle } from "react-icons/tb";

function TwentyOneScreen() {
  return (
    <Container>
      <RectStack2>
        <Dowell>
          <TextHead>My Order</TextHead>
          <hr
            style={{
              marginLeft: "0",
              width: "95%",
              height: "3px",
              marginTop: "5px",
              borderColor: "green",
            }}
          />
          <Image13 src={require("../assets/images/logo.png")}></Image13>
          <Rect>
            <TotalRow>
              <Total>Total</Total>
              <LoremIpsum>&lt;123 &gt;</LoremIpsum>
            </TotalRow>
            <PhoneOfCustomer>&lt;Phone of customer&gt;</PhoneOfCustomer>
          </Rect>
          <Rect2>
            <LoremIpsum2>Enter Membership number to continue</LoremIpsum2>
          </Rect2>
          <ConfirmStack>
            <Confirm>Confirm</Confirm>
            <LoremIpsum3>Receipt number from Bank</LoremIpsum3>
            <Rect4>
              <EnterOtp>Enter OTP</EnterOtp>
            </Rect4>
          </ConfirmStack>
          <ResendOtp>resend otp</ResendOtp>
          <Rect3>
            <Confirm2>Confirm</Confirm2>
          </Rect3>
          <IconRow>
            <BsInfoCircle
              style={{
                position: "absolute",
                top: "640px",
                right: "1px",
              }}
              color="red"
              size="20px"
            />
          </IconRow>
          <Icon2Row>
            <TbMessageCircle
              style={{
                position: "absolute",
                top: "640px",
                left: "1px",
              }}
              color="red"
              size="20px"
            />
          </Icon2Row>
          <CupertinoFooter2
            style={{
              height: 50,
              width: 327,
              position: "absolute",
              top: 680,
              left: 17,
            }}></CupertinoFooter2>
        </Dowell>
      </RectStack2>
    </Container>
  );
}

const Icon2Row = styled.div`
  height: 44px;
  flex-direction: row;
  display: flex;
  margin-top: 28px;
  margin-left: 9px;
  margin-right: 8px;
`;

const IconRow = styled.div`
  height: 56px;
  flex-direction: row;
  display: flex;
  margin-top: 9px;
  margin-left: 6px;
  margin-right: 4px;
`;
const Container = styled.div`
  display: flex;
  // border-width: 0px;
  // border-color: rgba(65, 117, 5, 1);
  // border-radius: 5px;
  // flex-direction: column;
  border-style: solid;
  left: 30%;
  position: absolute;

  height: fit-content;
`;
const RectStack2 = styled.div`
  width: 381px;
  height: 738px;
  margin-top: 50px;
  position: relative;
  border-radius: 10px;
`;

const TextHead = styled.div`
  padding-left: 10px;
  padding-top: 20px;
  font-size: 20px;
  font-style: italic;
`;

const Image13 = styled.img`
  top: 0px;
  left: 300px;
  width: 50px;
  height: 65px;
  position: absolute;
  object-fit: contain;
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
  border-radius: 5%;
`;

const Rect = styled.div`
  width: 265px;
  height: 110px;
  background-color: rgba(190, 244, 166, 1);
  flex-direction: column;
  display: flex;
  margin-top: 19px;
  margin-left: 40px;
`;

const Total = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 18px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 18px;
  margin-left: 15px;
`;

const TotalRow = styled.div`
  height: 21px;
  flex-direction: row;
  display: flex;
  margin-top: 22px;
  margin-left: 74px;
  margin-right: 73px;
`;

const PhoneOfCustomer = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 22px;
  margin-top: 18px;
  margin-left: 38px;
`;

const Rect2 = styled.div`
  width: 275px;
  border-left: 5px solid;
  border-left-color: green;
  border-right: 5px solid;
  border-right-color: green;
  height: 47px;
  background-color: rgba(255, 255, 255, 1);
  flex-direction: column;
  display: flex;
  margin-top: 219px;
  margin-left: 54px;
`;

const LoremIpsum2 = styled.span`
  font-family: Roboto;
  font-style: italic;
  font-weight: ;
  color: #121212;
  margin-top: 20px;
  margin-left: 11px;
`;

const Confirm = styled.span`
  font-family: Roboto;
  top: 20px;
  left: 74px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  text-decoration-line: underline;
`;

const LoremIpsum3 = styled.span`
  font-family: Roboto;
  top: 16px;
  left: 57px;

  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const Rect4 = styled.div`
  top: 0px;
  left: -20px;
  width: 275px;
  height: 37px;
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  flex-direction: column;
  display: flex;
  border-left: 5px solid;
  border-left-color: green;
  border-right: 5px solid;
  border-right-color: green;
`;

const EnterOtp = styled.span`
  font-family: Roboto;
  font-style: italic;
  font-weight: ;
  padding-bottom: 5px;
  color: #121212;
  padding-bottom: 5px;
  margin-top: 16px;
  margin-left: 37px;
`;

const ConfirmStack = styled.div`
  width: 275px;
  height: 47px;
  margin-top: 39px;
  margin-left: 75px;
  position: relative;
`;

const ResendOtp = styled.span`
  font-family: Roboto;
  font-style: italic;
  font-weight: ;
  color: #121212;
  margin-top: -70px;
  margin-left: 273px;
`;

const Rect3 = styled.div`
  width: 118px;
  height: 50px;
  background-color: rgba(65, 117, 5, 1);
  border-width: 0px;
  border-color: #000000;
  border-radius: 23px;
  flex-direction: column;
  display: flex;
  margin-top: 135px;
  margin-left: 143px;
  border-style: solid;
`;

const Confirm2 = styled.span`
  font-family: Roboto;
  font-style: italic;
  font-weight: ;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  text-decoration-line: underline;
  margin-top: 11px;
  margin-left: 26px;
`;

export default TwentyOneScreen;
