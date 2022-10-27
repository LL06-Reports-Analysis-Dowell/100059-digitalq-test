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
          <RewardsCommingSoon>
            Rewards
            <br />
            Comming Soon
          </RewardsCommingSoon>
          ;{" "}
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
const RewardsCommingSoon = styled.span`
  font-family: Roboto;
  font-postscript-name: roboto-700italic;
  font-style: italic;
  font-weight: 700;
  color: rgba(65, 117, 5, 1);
  font-size: 22px;
  text-align: center;
  margin-top: 301px;
  margin-left: 105px;
  display: flex;
`;
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

export default Test;
