import React from "react";
import styled from "styled-components";
import "../components/drop.css";
import CupertinoFooter2 from "../components/CupertinoFooter3";
import { BsInfoCircle } from "react-icons/bs";
import { TbMessageCircle } from "react-icons/tb";

import { Link } from "react-router-dom";

function NineScreen() {
  React.useEffect(() => {
    console.log("kkkkkkkkkkkkkkkk");
  }, []);

  return (
    <Container>
      <RectStack>
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
          <Image3 src={require("../assets/images/logo.png")}></Image3>

          <Rect>
            <CoiponNumber>Coipon Number</CoiponNumber>
          </Rect>
          <Rect1>
            <CoiponNumber1>453112</CoiponNumber1>
          </Rect1>
          <Rect2StackColumnRow>
            <Rect2StackColumn>
              <Rect2Stack>
                <Rect2>
                  <IceCream>Ice cream</IceCream>
                </Rect2>
                <Image src={require("../assets/images/cardImage1.png")}></Image>
              </Rect2Stack>
              <Rect5Stack>
                <Rect5>
                  <IceCream1>Ice cream</IceCream1>
                </Rect5>
                <Image1 src={require("../assets/images/food.jpg")}></Image1>
              </Rect5Stack>
              <Rect4Stack>
                <Rect4>
                  <IceCream2>Ice cream</IceCream2>
                </Rect4>
                <Image2 src={require("../assets/images/food.jpg")}></Image2>
              </Rect4Stack>
              <Rect3>
                <TopUpByCustomere>Top up by Customere</TopUpByCustomere>
              </Rect3>
            </Rect2StackColumn>
            <Rect11StackStack>
              <Rect11Stack>
                <Rect11>
                  <Rect14></Rect14>
                </Rect11>
                <Rect17></Rect17>
              </Rect11Stack>
              <Rect13></Rect13>
            </Rect11StackStack>
          </Rect2StackColumnRow>
          <Rect6StackRow>
            <Rect6Stack>
              <Rect6>
                <LoremIpsumColumnRow>
                  <LoremIpsumColumn>
                    <LoremIpsum>product detail and specification</LoremIpsum>
                    <TopUpPrice>top up price: $8</TopUpPrice>
                  </LoremIpsumColumn>
                </LoremIpsumColumnRow>
                <ProductCodeRow>
                  <ProductCode>product code: Z1008</ProductCode>
                  <TopUpPrice1>Quantity: 3</TopUpPrice1>
                </ProductCodeRow>
              </Rect6>
              <Rect16></Rect16>
            </Rect6Stack>
            <Rect12></Rect12>
          </Rect6StackRow>
          <Rect7Row>
            <Rect7>
              <Total123>Total $123</Total123>
            </Rect7>
            <Rect9Column>
              <Rect9>
                <PAid>pAID</PAid>
              </Rect9>
              <Rect10>
                <Pay>pay</Pay>
              </Rect10>
            </Rect9Column>
          </Rect7Row>
          <IconRow>
            <Rect8>
              <LoginForPayment>login for payment</LoginForPayment>
            </Rect8>
            <BsInfoCircle size={30} />
          </IconRow>

          <CupertinoFooter2
            style={{
              height: 50,
              width: 327,
              position: "absolute",
              top: 680,
              left: 17,
            }}></CupertinoFooter2>
        </Dowell>
      </RectStack>
    </Container>
  );
}
const Rect = styled.div`
  width: 153px;
  height: 36px;
  background-color: rgba(69, 188, 72, 1);
  flex-direction: column;
  display: flex;
  margin-top: -10px;
  margin-left: 97px;
`;

const CoiponNumber = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  margin-top: 7px;
  margin-left: 13px;
`;

const Rect1 = styled.div`
  width: 90px;
  height: 28px;
  background-color: rgba(69, 188, 72, 1);
  flex-direction: column;
  display: flex;
  margin-left: 125px;
`;

const CoiponNumber1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  margin-left: 14px;
`;

const Rect2 = styled.div`
  top: 9px;
  left: 15px;
  width: 325px;
  height: 39px;
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  border-width: 1px;
  border-color: #000000;
  flex-direction: column;
  display: flex;
  border-style: solid;
`;

const IceCream = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 5px;
  margin-left: 109px;
`;

const Image = styled.img`
  top: 0px;
  left: 0px;
  width: 102px;
  height: 49px;
  position: absolute;
  object-fit: contain;
`;

const Rect2Stack = styled.div`
  width: 340px;
  height: 40px;
  position: relative;
`;

const Rect5 = styled.div`
  top: 5px;
  left: 11px;
  width: 328px;
  height: 30px;
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  border-width: 1px;
  border-color: #000000;
  flex-direction: column;
  display: flex;
  border-style: solid;
`;

const IceCream1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 4px;
  margin-left: 103px;
`;

const Image1 = styled.img`
  top: 0px;
  left: 0px;
  width: 102px;
  height: 49px;
  position: absolute;
  object-fit: contain;
`;

const Rect5Stack = styled.div`
  width: 339px;
  height: 49px;
  margin-top: 31px;
  position: relative;
`;

const Rect4 = styled.div`
  top: 2px;
  left: 11px;
  width: 328px;
  height: 30px;
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  border-width: 1px;
  border-color: #000000;
  flex-direction: column;
  display: flex;
  border-style: solid;
`;

const IceCream2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 4px;
  margin-left: 106px;
`;

const Image2 = styled.img`
  top: 0px;
  left: 0px;
  width: 102px;
  height: 49px;
  position: absolute;
  object-fit: contain;
`;

const Rect4Stack = styled.div`
  width: 339px;
  height: 30px;
  margin-top: 31px;
  position: relative;
`;

const Rect3 = styled.div`
  width: 328px;
  height: 39px;
  background-color: rgba(255, 71, 87, 1);
  border-width: 1px;
  border-color: #000000;
  flex-direction: column;
  display: flex;
  opacity: 50%;
  margin-top: 35px;
  margin-left: 11px;
  border-style: solid;
`;

const TopUpByCustomere = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  font-size: 21px;
  margin-top: 8px;
  margin-left: 68px;
`;

const Rect2StackColumn = styled.div`
  width: 340px;
  flex-direction: column;
  display: flex;
  margin-top: 7px;
  margin-bottom: 33px;
`;

const Rect11 = styled.div`
  top: 0px;
  left: 0px;
  width: 9px;
  height: 110px;
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  flex-direction: column;
  display: flex;
`;

const Rect14 = styled.div`
  width: 9px;
  height: 87px;
  background-color: rgba(255, 255, 255, 1);
`;

const Rect17 = styled.div`
  top: 91px;
  left: -15px;
  width: 9px;
  height: 110px;
  position: absolute;
  background-color: rgba(65, 117, 5, 1);
`;

const Rect11Stack = styled.div`
  top: 0px;
  left: 0px;
  width: 9px;
  height: 201px;
  position: absolute;
`;

const Rect13 = styled.div`
  top: 200px;
  left: -15px;
  width: 9px;
  height: 110px;
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
`;

const Rect11StackStack = styled.div`
  width: 9px;
  height: 323px;
  margin-left: 16px;
  position: relative;
`;

const Rect2StackColumnRow = styled.div`
  height: 323px;
  flex-direction: row;
  display: flex;
  margin-left: -5px;
  margin-right: 15px;
`;

const Rect6 = styled.div`
  position: absolute;
  top: -12px;
  left: -10px;
  width: 342px;
  height: 99px;

  background-color: rgb(190, 244, 166);
`;

const Rect16 = styled.div`
  top: -12px;
  left: -13px;
  width: 6px;
  height: 57px;
  position: absolute;
  background-color: rgba(126, 211, 33, 1);
`;

const Rect6Stack = styled.div`
  width: 345px;
  height: 99px;
  position: relative;
`;

const Rect12 = styled.div`
  width: 6px;
  height: 57px;
  background-color: rgba(126, 211, 33, 1);
`;

const Rect6StackRow = styled.div`
  height: 99px;
  flex-direction: row;
  display: flex;
  margin-top: 9px;
  margin-left: 15px;
  margin-right: 9px;
`;

const Rect7 = styled.div`
  width: 157px;
  height: 56px;
  background-color: rgba(219, 20, 54, 0.56);
  flex-direction: column;
  display: flex;
  margin-top: 20px;
`;

const Total123 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  font-size: 26px;
  margin-top: 15px;
  margin-left: 13px;
`;

const Rect9 = styled.div`
  width: 83px;
  height: 41px;
  background-color: #e6e6e6;
  transform: rotate(-12deg);
  border-width: 3px;
  border-color: rgba(208, 2, 27, 1);
  flex-direction: column;
  display: flex;
  margin-left: 14px;
  border-style: solid;
`;

const PAid = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(208, 2, 27, 1);
  font-size: 24px;
  margin-top: 6px;
  margin-left: 16px;
`;

const Rect10 = styled.div`
  width: 85px;
  height: 47px;
  background-color: #e6e6e6;
  border-width: 3px;
  border-color: rgba(65, 117, 5, 1);
  flex-direction: column;
  display: flex;
  margin-top: 7px;
  border-style: solid;
`;

const Pay = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(65, 117, 5, 1);
  font-size: 22px;
  margin-top: 11px;
  margin-left: 22px;
`;

const Rect9Column = styled.div`
  width: 97px;
  flex-direction: column;
  display: flex;
  margin-left: 66px;
`;

const Rect7Row = styled.div`
  height: 95px;
  flex-direction: row;
  display: flex;
  margin-top: 14px;
  margin-left: 27px;
  margin-right: 28px;
`;

const Rect8 = styled.div`
  width: 182px;
  height: 36px;
  background-color: rgba(208, 2, 27, 1);
  flex-direction: column;
  display: flex;
  margin-left: 50px;
  margin-top: 16px;
`;

const LoginForPayment = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  margin-top: 4px;
  margin-left: 14px;
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
const RectStack = styled.div`
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

const Image3 = styled.img`
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
const LoremIpsumColumn = styled.div`
  width: 270px;
  flex-direction: column;
  display: flex;
  margin-bottom: 4px;
`;

const LoremIpsumColumnRow = styled.div`
  height: 46px;
  flex-direction: row;
  display: flex;
  margin-top: 13px;
  margin-left: 12px;
  margin-right: 55px;
`;

const ProductCode = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: green;
  margin-top: 8px;
`;

const TopUpPrice1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: green;
  margin-left: 30px;
`;

const ProductCodeRow = styled.div`
  height: 10px;
  flex-direction: row;
  // display: flex;
  margin-top: 20px;
  margin-left: 15px;
  // margin-right: 107px;
`;
const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: green;
`;

const TopUpPrice = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: green;
  margin-top: 10px;
`;
export default NineScreen;
