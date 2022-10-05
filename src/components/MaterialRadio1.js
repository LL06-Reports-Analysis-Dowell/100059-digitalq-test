import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialRadio1(props) {
  return (
    <Container {...props}>
      <input
        className="form-check-input position-relative"
        type="radio"
        name="exampleRadios"
        id="exampleRadios2"
        value="b"></input>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: transparent;
  flex-direction: column;
`;

export default MaterialRadio1;
