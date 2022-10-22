import React from "react";
import styled from "styled-components";
import "../components/drop.css";
import CupertinoFooter2 from "../components/CupertinoFooter2";
import { BsInfoCircle } from "react-icons/bs";
import { TbMessageCircle } from "react-icons/tb";

function Test() {
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
          <A2>&lt;Account Number of{"\n"} shop&gt;</A2>
          <IfscCodeOfShop>&lt;IFSC code of shop&gt;</IfscCodeOfShop>
          <GstOfShop>&lt;GST of Shop&gt;</GstOfShop>
          <NameOfShop>&lt;Name of Shop&gt;</NameOfShop>
          <Rect>
            <TotalRow>
              <Total>Total</Total>
              <LoremIpsum>&lt;123 $&gt;</LoremIpsum>
            </TotalRow>
            <PhoneOfCustomer>&lt;Phone of customer&gt;</PhoneOfCustomer>
            <PhoneOfCustomer2>
              Open your bank{"\n"} account page and do{"\n"} online transfer
            </PhoneOfCustomer2>
          </Rect>
          <Rect2>
            <LoremIpsum2>Receipt number from Bank</LoremIpsum2>
          </Rect2>
          <Rect3>
            <Confirm>Confirm</Confirm>
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

const A2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(65, 117, 5, 1);
  font-size: 22px;
  margin-top: 83px;
  align-self: center;
`;

const IfscCodeOfShop = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(65, 117, 5, 1);
  font-size: 22px;
  margin-top: 24px;
  margin-left: 88px;
`;

const GstOfShop = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(65, 117, 5, 1);
  font-size: 22px;
  margin-top: 83px;
  margin-left: 110px;
`;

const NameOfShop = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(65, 117, 5, 1);
  font-size: 22px;
  margin-top: -67px;
  margin-left: 108px;
`;

const Rect = styled.div`
  width: 275px;
  height: 234px;
  background-color: rgba(190, 244, 166, 1);
  flex-direction: column;
  display: flex;
  margin-top: 60px;
  margin-left: 49px;
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
  margin-left: 14px;
`;

const TotalRow = styled.div`
  height: 21px;
  flex-direction: row;
  display: flex;
  margin-top: 28px;
  margin-left: 79px;
  margin-right: 79px;
`;

const PhoneOfCustomer = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 22px;
  margin-top: 18px;
  margin-left: 43px;
`;

const PhoneOfCustomer2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 22px;
  text-align: center;
  margin-top: 35px;
  margin-left: 32px;
`;

const Rect2 = styled.div`
  width: 270px;
  height: 47px;
  background-color: rgba(255, 255, 255, 1);
  flex-direction: column;
  display: flex;
  margin-top: 24px;
  margin-left: 54px;
`;

const LoremIpsum2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 16px;
  margin-left: 63px;
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
  margin-top: 26px;
  margin-left: 130px;
  border-style: solid;
`;

const Confirm = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  text-decoration-line: underline;
  margin-top: 15px;
  margin-left: 29px;
`;

export default Test;
