import React from "react";
import styled from "styled-components";
import "../components/drop.css";
import CupertinoFooter2 from "../components/CupertinoFooter2";
import { BsInfoCircle } from "react-icons/bs";
import { TbMessageCircle } from "react-icons/tb";

function TwentyScreen() {
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
          <Rect2Stack>
            <Rect2>
              <LoremIpsum2>Receipt number from Woo Commerce</LoremIpsum2>
            </Rect2>
            <Confirm>Confirm</Confirm>
          </Rect2Stack>
          <Image src={require("../assets/images/g.png")}></Image>
          <Image3Row>
            <Image3 src={require("../assets/images/ggg.png")}></Image3>
            <Image2 src={require("../assets/images/gg.png")}></Image2>
          </Image3Row>

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
  height: 100px;
  background-color: rgba(190, 244, 166, 1);
  flex-direction: column;
  display: flex;
  margin-top: 245px;
  margin-left: 54px;
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
  margin-top: 21px;
  margin-left: 74px;
  margin-right: 73px;
`;

const PhoneOfCustomer = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 22px;
  margin-top: 19px;
  margin-left: 38px;
`;

const Rect2 = styled.div`
  top: 11px;
  left: 0px;
  width: 275px;
  height: 47px;
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  flex-direction: column;
  display: flex;
`;

const LoremIpsum2 = styled.span`
  font-family: Roboto;
  font-style: italic;
  font-weight: ;
  color: #121212;
  margin-top: 15px;
  margin-left: 31px;
`;

const Confirm = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 110px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  text-decoration-line: underline;
`;

const Rect2Stack = styled.div`
  width: 275px;
  height: 58px;
  margin-top: 48px;
  margin-left: 44px;
  position: relative;
`;

const Image3 = styled.img`
  width: 100%;
  height: 94px;
  object-fit: contain;
`;

const Image2 = styled.img`
  width: 100%;
  height: 54px;
  margin-left: 68px;
  margin-top: 20px;
  object-fit: contain;
`;

const Image3Row = styled.div`
  height: 94px;
  flex-direction: row;
  display: flex;
  margin-top: 37px;
  margin-left: 20px;
  margin-right: 24px;
`;

const Image = styled.img`
  width: 200px;
  height: 100%;
  margin-top: -664px;
  margin-left: 84px;
  object-fit: contain;
`;

export default TwentyScreen;
