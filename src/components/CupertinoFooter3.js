import React, { Component } from "react";
import styled, { css } from "styled-components";

import { TbPower, TbShieldCheck } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { BsArrowLeftCircle } from "react-icons/bs";

function CupertinoFooter2(props) {
  return (
    <Container {...props}>
      <BtnWrapper1>
        <ButtonOverlay>
          <TbPower size="40px" />
        </ButtonOverlay>
      </BtnWrapper1>
      <BtnWrapper3>
        <ButtonOverlay>
          <TbShieldCheck size="40px" />
        </ButtonOverlay>
      </BtnWrapper3>
      <BtnWrapper4>
        <ButtonOverlay>
          <BsArrowLeftCircle size={40} color="green" />
        </ButtonOverlay>
      </BtnWrapper4>

      <Rect>
        <img src={require("../assets/images/dowelluser.png")} />
      </Rect>
      <BtnWrapper5>
        <ButtonOverlay>
          <FaUserCircle size="40px" />
        </ButtonOverlay>
      </BtnWrapper5>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
`;

const ButtonOverlay = styled.button`
  display: block;
  background: none;
  height: 100%;
  width: 100%;
  border: none;
`;
const BtnWrapper1 = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  display: flex;
`;

const BtnWrapper3 = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  display: flex;
`;

const BtnWrapper4 = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  display: flex;
`;

const BtnWrapper2 = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  display: flex;
`;

const Rect = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const BtnWrapper5 = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  display: flex;
`;

export default CupertinoFooter2;
