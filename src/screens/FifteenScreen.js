import React from "react";
import styled from "styled-components";
import "../components/drop.css";
import { BsInfoCircle } from "react-icons/bs";

import { TbPower } from "react-icons/tb";

function FifteenScreen() {
  React.useEffect(() => {
    console.log("kkkkkkkkkkkkkkkk");
  }, []);

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
          <RectStack>
            <Rect>
              <ImageRow>
                <Image src={require("../assets/images/doss.png")}></Image>
                <Rect2>
                  <LoremIpsum>
                    Contribute your{"\n"} comments and{"\n"} suggestions about
                    {"\n"} DoWell UX Live App{"\n"} in 2 minutes and{"\n"} get
                    rewarded
                  </LoremIpsum>
                </Rect2>
              </ImageRow>
            </Rect>
            <Image2 src={require("../assets/images/do3.gif")}></Image2>
          </RectStack>
          <Rect1>
            <LoremIpsum2>
              Do you recommend this App to your friends{"\n"} and colleagues
            </LoremIpsum2>
            <Image5Row>
              <Image5 src={require("../assets/images/do11.png")}></Image5>
              <Image4 src={require("../assets/images/d012.png")}></Image4>
              <Image3 src={require("../assets/images/do13.png")}></Image3>
            </Image5Row>
          </Rect1>
          <Image6Row>
            <Image6 src={require("../assets/images/do4.png")}></Image6>
            <DoYouWantToExit>Do you want{"\n"} to Exit</DoYouWantToExit>
          </Image6Row>
          <IconRow>
            <BsInfoCircle
              style={{
                position: "absolute",
                top: "700px",
                left: "1px",
              }}
              color="red"
              size="30px"
            />

            <TbPower
              style={{
                position: "absolute",
                top: "670px",
                right: "1px",
              }}
              color=""
              size="50px"
            />
            <CloseApp>close app</CloseApp>
          </IconRow>
          <Image7 src={require("../assets/images/do5.png")}></Image7>
        </Dowell>
      </RectStack2>
    </Container>
  );
}

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
  top: 0px;
  width: 344px;
  height: 181px;
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  left: 0px;
  border-width: 1px;
  border-color: rgba(126, 211, 33, 1);
  border-radius: 16px;
  flex-direction: row;
  display: flex;
  border-style: solid;
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
`;

const Rect2 = styled.div`
  width: 230px;
  height: 138px;
  background-color: rgba(255, 255, 255, 1);
  border-width: 1px;
  border-color: rgba(126, 211, 33, 1);
  shadow-radius: 0px;
  flex-direction: column;
  display: flex;
  margin-left: 11px;
  margin-top: 25px;
  border-style: solid;
  box-shadow: 3px 3px 0px 1px rgba(184, 233, 134, 1);
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 16px;
  margin-left: 8px;
`;

const ImageRow = styled.div`
  height: 180px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 22px;
  margin-left: 1px;
`;

const Image2 = styled.img`
  top: 5px;
  left: 244px;
  width: 105px;
  height: 101px;
  position: absolute;
  object-fit: contain;
`;

const RectStack = styled.div`
  width: 349px;
  height: 181px;
  margin-top: 26px;
  margin-left: 15px;
  margin-right: 15px;
  position: relative;
`;

const Rect1 = styled.div`
  width: 330px;
  height: 107px;
  background-color: rgba(255, 255, 255, 1);
  border-width: 1px;
  border-color: rgba(126, 211, 33, 1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
  margin-top: 150px;
  margin-left: 10px;
  border-style: solid;
`;

const LoremIpsum2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 17px;
  margin-left: 21px;
`;

const Image5 = styled.img`
  width: 100%;
  height: 36px;
  object-fit: contain;
`;

const Image4 = styled.img`
  width: 100%;
  height: 35px;
  margin-left: 29px;
  margin-top: 1px;
  object-fit: contain;
`;

const Image3 = styled.img`
  width: 100%;
  height: 35px;
  margin-left: 19px;
  margin-top: 1px;
  object-fit: contain;
`;

const Image5Row = styled.div`
  height: 36px;
  flex-direction: row;
  display: flex;
  margin-top: 6px;
  margin-left: 21px;
  margin-right: 28px;
`;

const Image6 = styled.img`
  width: 100%;
  height: 54px;
  object-fit: contain;
  position: relative;
  margin-left: -80px;
  margin-top: 7px;
`;

const DoYouWantToExit = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(208, 2, 27, 1);
  font-size: 18px;
  margin-left: 40px;
  margin-top: 27px;
`;

const Image6Row = styled.div`
  height: 69px;
  flex-direction: row;
  display: flex;
  margin-top: 159px;
  margin-left: -3px;
  margin-right: 16px;
`;

const CloseApp = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 30px;
  margin-left: 273px;
`;

const IconRow = styled.div`
  height: 62px;
  flex-direction: row;
  display: flex;
  margin-top: 6px;
  margin-left: 3px;
  margin-right: 18px;
`;

const Image7 = styled.img`
  width: 165px;
  height: 100%;
  margin-top: -350px;
  margin-left: 80px;
  object-fit: contain;
`;

export default FifteenScreen;
