import React from "react";
import styled from "styled-components";
import "../components/drop.css";
import CupertinoFooter2 from "../components/CupertinoFooter2";
import { BsArrowLeftCircle, BsInfoCircle } from "react-icons/bs";
import { TbMessageCircle } from "react-icons/tb";
import MaterialButtonDanger from "../components/MaterialButtonDanger";

import { Link } from "react-router-dom";

function SevenScreen() {
  React.useEffect(() => {}, []);

  return (
    <Container>
      <RectStack>
        <Dowell>
          <TextHead>Selected Item</TextHead>
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
            <ImageStack>
              <Image src={require("../assets/images/food.jpg")}></Image>
              <Rect2>
                <LoremIpsumColumnRow>
                  <LoremIpsumColumn>
                    <LoremIpsum>product detail and specification</LoremIpsum>
                    <TopUpPrice>top up price: $8</TopUpPrice>
                  </LoremIpsumColumn>
                  <Link to="/NineScreen">
                    <MaterialButtonDanger
                      style={{
                        borderWidth: 0,
                        borderColor: "#000000",
                        borderRadius: 12,
                        position: "absolute",
                        right: "10px",
                        boxShadow: "5px 5px 0px  0.76px rgba(0,0,0,1) ",
                      }}></MaterialButtonDanger>
                  </Link>
                </LoremIpsumColumnRow>
                <ProductCodeRow>
                  <ProductCode>product code: Z1008</ProductCode>
                  <TopUpPrice1>Quantity: 3</TopUpPrice1>
                </ProductCodeRow>
              </Rect2>
            </ImageStack>

            <BsInfoCircle
              style={{
                position: "absolute",
                top: "640px",
                right: "1px",
              }}
              color="red"
              size="20px"
            />
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
              <Link to="/FourthScreen">
                <BsArrowLeftCircle
                  style={{
                    position: "absolute",
                    top: "570px",
                    right: "20px",
                  }}
                  color="green"
                  size="40px"
                />
              </Link>
            </Icon2Row>
          </Rect>
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
const Rect = styled.div`
  //   width: 355px;
  //   height: 742px;
  //   background-color: rgba(212, 253, 194, 1);
  //   flex-direction: column;
  //   display: flex;
  //   margin-left: 5px;
  //
`;

const Image = styled.img`
  top: -50px;
  left: 12px;
  width: 339px;
  height: 370px;
  position: absolute;
  // object-fit: contain;
`;

const Rect2 = styled.div`
  top: 330px;
  left: 0px;
  width: 347px;
  height: 115px;
  position: absolute;
  background-color: #e6e6e6;
  flex-direction: column;
  display: flex;
  background-color: rgb(190, 244, 166);
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

const ImageStack = styled.div`
  width: 351px;
  height: 497px;
  margin-top: 40px;
  position: relative;
`;

const Icon2Row = styled.div`
  height: 44px;
  flex-direction: row;
  display: flex;
  margin-top: 28px;
  margin-left: 9px;
  margin-right: 8px;
`;

export default SevenScreen;
