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

          <>
            <LoremIpsum>Check text messages for order details</LoremIpsum>
            <Rect>
              <DownloadQrCode>Download QR code</DownloadQrCode>
            </Rect>
            <LoremIpsum2>Show this QR code at the time of delivery</LoremIpsum2>
            <HiName>Hi &lt;Name&gt;,</HiName>
            <LoremIpsum3>
              Thank you for your order, please wait for your turn in Q
            </LoremIpsum3>
            <Rect2>
              <ImageRow>
                <Image>
                  <Rect3>
                    <Z10012>Z1001</Z10012>
                  </Rect3>
                </Image>
                <ProductNameColumn>
                  <ProductName>Product Name</ProductName>
                  <LoremIpsum7>
                    Product Details &amp;{"\n"} Specifications, top ups
                  </LoremIpsum7>
                  <LoremIpsum6>
                    Quantity - &lt;2&gt;{"\n"}Coupon Number{"\n"}&lt;2&gt;
                  </LoremIpsum6>
                  <LoremIpsum5>
                    Payment Details{"\n"}&lt;paid $123 by Card&gt;
                  </LoremIpsum5>
                </ProductNameColumn>
              </ImageRow>
              <Q2Row>
                <Q2>Q - &lt;2&gt;</Q2>
                <LoremIpsum4>Counter{"\n"}&lt;1/2/3/4/5/Any&gt;</LoremIpsum4>
              </Q2Row>
            </Rect2>
            <Rect7StackColumnRow>
              <Rect7StackColumn>
                <Rect7Stack>
                  <Rect7></Rect7>
                  <Rect8></Rect8>
                </Rect7Stack>
                <Rect9></Rect9>
              </Rect7StackColumn>
              <Image2StackStack>
                <Image2Stack>
                  <Image2 src={require("../assets/images/qr.png")}></Image2>
                  <Rect4Stack>
                    <Rect4></Rect4>
                    <Rect10></Rect10>
                  </Rect4Stack>
                </Image2Stack>
                <Rect11></Rect11>
              </Image2StackStack>
            </Rect7StackColumnRow>
            <Rect6Row>
              <Rect6></Rect6>
              <Rect5></Rect5>
            </Rect6Row>
          </>
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
const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 16px;
  margin-top: 590px;
  margin-left: 48px;
`;

const Rect = styled.div`
  width: 137px;
  height: 32px;
  background-color: #e6e6e6;
  border-width: 1px;
  border-color: #000000;
  border-radius: 21px;
  flex-direction: column;
  display: flex;
  margin-top: -61px;
  margin-left: 117px;
  border-style: solid;
`;

const DownloadQrCode = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 8px;
  margin-left: 7px;
`;

const LoremIpsum2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: -60px;
  margin-left: 63px;
`;

const HiName = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: -567px;
  margin-left: 2px;
`;

const LoremIpsum3 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 6px;
  margin-left: 2px;
`;

const Rect2 = styled.div`
  width: 340px;
  height: 206px;
  background-color: rgba(65, 117, 5, 0.01);
  flex-direction: column;
  display: flex;
  margin-top: 18px;
  margin-left: 15px;
`;

const Image = styled.div`
  width: 100%;
  height: 163px;
  flex-direction: column;
  display: flex;
  background-image: url(${require("../assets/images/restu.png")});
  background-size: cover;
`;

const Rect3 = styled.div`
  width: 68px;
  height: 27px;
  background-color: rgba(255, 255, 255, 1);
  flex-direction: column;
  display: flex;
  margin-top: 130px;
  margin-left: 6px;
`;

const Z10012 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 19px;
  margin-top: 4px;
  margin-left: 7px;
`;

const ProductName = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(65, 117, 5, 1);
  margin-left: 1px;
`;

const LoremIpsum7 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 200;
  color: rgba(65, 117, 5, 1);
  text-align: left;
  margin-top: 5px;
`;

const LoremIpsum6 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  color: rgba(65, 117, 5, 1);
  margin-top: 8px;
`;

const LoremIpsum5 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(65, 117, 5, 1);
  margin-top: 10px;
`;

const ProductNameColumn = styled.div`
  width: 144px;
  flex-direction: column;
  display: flex;
  margin-left: 25px;
  margin-bottom: 4px;
`;

const ImageRow = styled.div`
  height: 163px;
  flex-direction: row;
  display: flex;
  margin-left: 8px;
  margin-right: 11px;
`;

const Q2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(208, 2, 27, 1);
  font-size: 24px;
  margin-top: 4px;
`;

const LoremIpsum4 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(65, 117, 5, 1);
  margin-left: 77px;
`;

const Q2Row = styled.div`
  height: 32px;
  flex-direction: row;
  display: flex;
  margin-top: 4px;
  margin-left: 35px;
  margin-right: 49px;
`;

const Rect7 = styled.div`
  top: 0px;
  left: 0px;
  width: 54px;
  height: 8px;
  position: absolute;
  background-color: rgba(0, 0, 0, 1);
`;

const Rect8 = styled.div`
  top: 4px;
  left: 0px;
  width: 5px;
  height: 35px;
  position: absolute;
  background-color: rgba(0, 0, 0, 1);
`;

const Rect7Stack = styled.div`
  width: 54px;
  height: 39px;
  position: relative;
`;

const Rect9 = styled.div`
  width: 5px;
  height: 35px;
  background-color: rgba(0, 0, 0, 1);
  margin-top: 187px;
  margin-left: 8px;
`;

const Rect7StackColumn = styled.div`
  width: 54px;
  flex-direction: column;
  display: flex;
`;

const Image2 = styled.img`
  top: 25px;
  left: 0px;
  width: 218px;
  height: 217px;
  position: absolute;
  object-fit: contain;
`;

const Rect4 = styled.div`
  top: 0px;
  left: 0px;
  width: 54px;
  height: 8px;
  position: absolute;
  background-color: rgba(0, 0, 0, 1);
`;

const Rect10 = styled.div`
  top: 7px;
  left: 49px;
  width: 5px;
  height: 35px;
  position: absolute;
  background-color: rgba(0, 0, 0, 1);
`;

const Rect4Stack = styled.div`
  top: 0px;
  left: 210px;
  width: 54px;
  height: 42px;
  position: absolute;
`;

const Image2Stack = styled.div`
  top: 0px;
  left: 0px;
  width: 264px;
  height: 242px;
  position: absolute;
`;

const Rect11 = styled.div`
  top: 226px;
  left: 261px;
  width: 5px;
  height: 35px;
  position: absolute;
  background-color: rgba(0, 0, 0, 1);
`;

const Image2StackStack = styled.div`
  width: 266px;
  height: 261px;
  margin-left: 12px;
  position: relative;
`;

const Rect7StackColumnRow = styled.div`
  height: 261px;
  flex-direction: row;
  display: flex;
  margin-top: 14px;
  margin-left: 15px;
  margin-right: 28px;
`;

const Rect6 = styled.div`
  width: 54px;
  height: 8px;
  background-color: rgba(0, 0, 0, 1);
`;

const Rect5 = styled.div`
  width: 54px;
  height: 8px;
  background-color: rgba(0, 0, 0, 1);
  margin-left: 217px;
`;

const Rect6Row = styled.div`
  height: 8px;
  flex-direction: row;
  display: flex;
  margin-top: 1px;
  margin-left: 23px;
  margin-right: 27px;
`;
export default Test;
