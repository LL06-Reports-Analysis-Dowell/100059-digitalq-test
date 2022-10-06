import React, { useState } from "react";
import styled from "styled-components";
import "../components/drop.css";
import CupertinoFooter2 from "../components/CupertinoFooter2";

function EightScreen() {
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

          <Rect></Rect>
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

export default EightScreen;
