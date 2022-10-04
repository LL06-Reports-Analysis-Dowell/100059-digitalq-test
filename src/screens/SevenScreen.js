// import React from "react";
// import styled from "styled-components";
// import { BsArrowLeftCircle, BsInfoCircle } from "react-icons/bs";
// import { TbMessageCircle } from "react-icons/tb";
// import MaterialButtonDanger from "../components/MaterialButtonDanger";

// import { Link } from "react-router-dom";

// function SevenScreen() {
//   return (
// <Container>
//   <Rect>
//     <ImageStack>
//       <Image src={require("../assets/images/food.jpg")}></Image>
//       <Rect2>
//         <LoremIpsumColumnRow>
//           <LoremIpsumColumn>
//             <LoremIpsum>product detail and specification</LoremIpsum>
//             <TopUpPrice>top up price</TopUpPrice>
//           </LoremIpsumColumn>
//           <MaterialButtonDanger
//             style={{
//               height: 38,
//               width: 56,
//               borderWidth: 0,
//               borderColor: "#000000",
//               borderRadius: 12,
//               shadowRadius: 0,
//               marginLeft: 29,
//               marginTop: 8,
//               borderStyle: "solid",
//               boxShadow: "5px 5px 0px  0.76px rgba(0,0,0,1) ",
//             }}></MaterialButtonDanger>
//         </LoremIpsumColumnRow>
//         <ProductCodeRow>
//           <ProductCode>product code</ProductCode>
//           <TopUpPrice1>top up price</TopUpPrice1>
//         </ProductCodeRow>
//       </Rect2>
//     </ImageStack>
//     {/* <EntypoIcon
//       name="chevron-with-circle-left"
//       style={{
//         color: "rgba(128,128,128,1)",
//         fontSize: 40,
//         height: 44,
//         width: 40,
//         marginTop: 9,
//         marginLeft: 292,
//       }}></EntypoIcon> */}
//     <BsInfoCircle />
//     <Icon2Row>
//       {/* <MaterialCommunityIconsIcon
//         name="message-bulleted"
//         style={{
//           color: "rgba(128,128,128,1)",
//           fontSize: 40,
//           height: 44,
//           width: 40,
//         }}></MaterialCommunityIconsIcon> */}
//       <TbMessageCircle />
//       {/* <FeatherIcon
//         name="info"
//         style={{
//           color: "rgba(128,128,128,1)",
//           fontSize: 40,
//           height: 41,
//           width: 40,
//           marginLeft: 258,
//           marginTop: 3,
//         }}></FeatherIcon> */}
//       <BsArrowLeftCircle />
//     </Icon2Row>
//   </Rect>
// </Container>
//   );
// }

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   height: 100vh;
//   width: 100vw;
// `;

// const Rect = styled.div`
//   width: 355px;
//   height: 742px;
//   background-color: rgba(212, 253, 194, 1);
//   flex-direction: column;
//   display: flex;
//   margin-left: 5px;
// `;

// const Image = styled.img`
//   top: 0px;
//   left: 12px;
//   width: 339px;
//   height: 384px;
//   position: absolute;
//   object-fit: contain;
// `;

// const Rect2 = styled.div`
//   top: 382px;
//   left: 0px;
//   width: 347px;
//   height: 115px;
//   position: absolute;
//   background-color: #e6e6e6;
//   flex-direction: column;
//   display: flex;
// `;

// const LoremIpsum = styled.span`
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: 400;
//   color: #121212;
// `;

// const TopUpPrice = styled.span`
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: 400;
//   color: #121212;
//   margin-top: 10px;
// `;

// const LoremIpsumColumn = styled.div`
//   width: 195px;
//   flex-direction: column;
//   display: flex;
//   margin-bottom: 4px;
// `;

// const LoremIpsumColumnRow = styled.div`
//   height: 46px;
//   flex-direction: row;
//   display: flex;
//   margin-top: 13px;
//   margin-left: 12px;
//   margin-right: 55px;
// `;

// const ProductCode = styled.span`
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: 400;
//   color: #121212;
//   margin-top: 8px;
// `;

// const TopUpPrice1 = styled.span`
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: 400;
//   color: #121212;
//   margin-left: 68px;
// `;

// const ProductCodeRow = styled.div`
//   height: 24px;
//   flex-direction: row;
//   display: flex;
//   margin-top: 18px;
//   margin-left: 12px;
//   margin-right: 111px;
// `;

// const ImageStack = styled.div`
//   width: 351px;
//   height: 497px;
//   margin-top: 40px;
//   position: relative;
// `;

// const Icon2Row = styled.div`
//   height: 44px;
//   flex-direction: row;
//   display: flex;
//   margin-top: 28px;
//   margin-left: 9px;
//   margin-right: 8px;
// `;

// export default SevenScreen;

import React, { useState } from "react";
import styled from "styled-components";
import "../components/drop.css";
import CupertinoFooter2 from "../components/CupertinoFooter2";
import { BsArrowLeftCircle, BsInfoCircle } from "react-icons/bs";
import { TbMessageCircle } from "react-icons/tb";
import MaterialButtonDanger from "../components/MaterialButtonDanger";

import { Link } from "react-router-dom";

function SevenScreen() {
  React.useEffect(() => {
    console.log("kkkkkkkkkkkkkkkk");
  }, []);

  return (
    <Container>
      <RectStack>
        <Dowell>
          <TextHead>Hi, Christ Select From Menu</TextHead>
          <hr
            style={{
              marginLeft: "0",
              width: "95%",
              marginTop: "5px",
              borderColor: "green",
            }}
          />
          <Image3 src={require("../assets/images/logo.png")}></Image3>

          <CupertinoFooter2
            style={{
              height: 50,
              width: 327,
              position: "absolute",
              top: 680,
              left: 17,
            }}></CupertinoFooter2>

          <Rect>
            <ImageStack>
              <Image src={require("../assets/images/food.jpg")}></Image>
              <Rect2>
                <LoremIpsumColumnRow>
                  <LoremIpsumColumn>
                    <LoremIpsum>product detail and specification</LoremIpsum>
                    <TopUpPrice>top up price</TopUpPrice>
                  </LoremIpsumColumn>
                  <MaterialButtonDanger
                    style={{
                      height: 38,
                      width: 56,
                      borderWidth: 0,
                      borderColor: "#000000",
                      borderRadius: 12,
                      shadowRadius: 0,
                      marginLeft: 29,
                      marginTop: 8,
                      borderStyle: "solid",
                      boxShadow: "5px 5px 0px  0.76px rgba(0,0,0,1) ",
                    }}></MaterialButtonDanger>
                </LoremIpsumColumnRow>
                <ProductCodeRow>
                  <ProductCode>product code</ProductCode>
                  <TopUpPrice1>top up price</TopUpPrice1>
                </ProductCodeRow>
              </Rect2>
            </ImageStack>
            {/* <EntypoIcon
          name="chevron-with-circle-left"
          style={{
            color: "rgba(128,128,128,1)",
            fontSize: 40,
            height: 44,
            width: 40,
            marginTop: 9,
            marginLeft: 292,
          }}></EntypoIcon> */}
            <BsInfoCircle />
            <Icon2Row>
              {/* <MaterialCommunityIconsIcon
            name="message-bulleted"
            style={{
              color: "rgba(128,128,128,1)",
              fontSize: 40,
              height: 44,
              width: 40,
            }}></MaterialCommunityIconsIcon> */}
              <TbMessageCircle />
              {/* <FeatherIcon
            name="info"
            style={{
              color: "rgba(128,128,128,1)",
              fontSize: 40,
              height: 41,
              width: 40,
              marginLeft: 258,
              marginTop: 3,
            }}></FeatherIcon> */}
              <BsArrowLeftCircle />
            </Icon2Row>
          </Rect>
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
  top: 0px;
  left: 12px;
  width: 339px;
  height: 384px;
  position: absolute;
  object-fit: contain;
`;

const Rect2 = styled.div`
  top: 382px;
  left: 0px;
  width: 347px;
  height: 115px;
  position: absolute;
  background-color: #e6e6e6;
  flex-direction: column;
  display: flex;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const TopUpPrice = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 10px;
`;

const LoremIpsumColumn = styled.div`
  width: 195px;
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
  color: #121212;
  margin-top: 8px;
`;

const TopUpPrice1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-left: 68px;
`;

const ProductCodeRow = styled.div`
  height: 24px;
  flex-direction: row;
  display: flex;
  margin-top: 18px;
  margin-left: 12px;
  margin-right: 111px;
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
