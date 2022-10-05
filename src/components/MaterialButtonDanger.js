import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialButtonDanger(props) {
  return (
    <Container {...props}>
      <Caption>Order Now</Caption>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #f44336;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 2px;
  min-width: 100px;
`;

const Caption = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 14px;
`;

export default MaterialButtonDanger;
