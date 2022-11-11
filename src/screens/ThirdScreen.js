// import React from "react";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { MdCancel } from "react-icons/md";
import "../components/drop.css";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";

function ThirdScreen(props) {
  const initial_values = { number: "" };
  const [formValues, setFormValues] = useState(initial_values);
  // change value function 
  const handleChange = (e) => {
    // console.log(e);
    // const { name, value } = e.target;
    setFormValues({ ...formValues, ['number']: e });
    console.log('number ==> ', formValues["number"]);
  };

  // submit form function 
  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormErrors(validate(formValues));
    // setIsSubmit(true);
    let number = formValues["number"]
    console.log('Submitted from third screen ========> ', number)
    let url = "http://100059.pythonanywhere.com/api/payload/"
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access'),
        "Content-Type": "application/json",
      },
    };
    // const config = null
    const body = JSON.stringify({ number });
    console.log('Body===========>',body)
    console.log('Config===========>',config)
    axios
      .post(url, body, config)
      .then((response) => {
        // setData(response.data);
        // setProdCode(response.data.normal.data[0].map((dish) => dish.dish_code));
        // setProdName(response.data.normal.data[0].map((dish) => dish.dish_name));
        console.log('from Post data ====>', response);
      })
      .catch((err) => {
        console.log(err);
      })


  };

  return (
    <Container>
      <RectStack>
        <Rect>
          <Image2Stack>
            <Image2></Image2>
            <form >
              <Rect2>
                <Image3StackStack>
                  <Image3Stack>
                    <Image3 src={require("../assets/images/do3.png")}></Image3>
                    <Brand>brand of cafe, branch</Brand>
                  </Image3Stack>

                  <MdCancel
                    className="icon"
                    style={{
                      position: "absolute",

                      right: "1%",
                    }}
                    size="30px"
                    color="red"
                  />
                </Image3StackStack>

                <dowellinput
                  style={{
                    paddingLeft: "20px",
                    top: "300px",
                    position: "absolute",
                  }}>
                  <LoremIpsum3>
                    {/* phone number input  */}
                    <PhoneInput
                      style={{
                        paddingLeft: 3,
                        borderRightColor: "green",
                        borderRightWidth: 5,
                        borderLeftColor: "green",
                        borderLeftWidth: 5,
                      }}
                      country={"bd"}
                      placeholder={"Enter your mobile number to continue"}
                      name="number"
                      value={formValues.number}
                      onChange={handleChange}
                    />{" "}
                  </LoremIpsum3>
                  <LoremIpsum4>
                    {/* name input  */}
                    <input
                      placeholder="Name"
                      style={{
                        textAlign: "center",
                        height: "35px",
                        width: "290px",
                        borderRightColor: "green",
                        borderRightWidth: 5,
                        borderLeftColor: "green",
                        borderLeftWidth: 5,
                      }}
                    />
                  </LoremIpsum4>
                </dowellinput>

                <OrderBtn>
                  {" "}
                  <Button
                    style={{
                      paddingLeft: "20px",
                      top: "430px",
                      position: "absolute",
                      borderRadius: "20px",
                      borderColor: "green",
                      fontSize: "12px",
                    }}
                    type="submit"
                    variant="outlined"
                    onClick={handleSubmit}
                  >

                    <Link to="/FourthScreen">New Order</Link>
                  </Button>
                </OrderBtn>
              </Rect2>
            </form >
          </Image2Stack>
        </Rect>
      </RectStack>
    </Container>
  );
}
const LoremIpsum4 = styled.div`
  padding-left: 12px;
  padding-top: 12px;
`;

const Container = styled.div`
  // display: flex;
  // border-width: 0px;
  // border-color: rgba(65, 117, 5, 1);
  // border-radius: 5px;
  // flex-direction: column;
  border-style: solid;
  position: absolute;
  height: fit-content;
  left: 30%;
`;
const OrderBtn = styled.div`
  padding-left: 30%;
  padding-top: 20px;
  font-size: 10px;
`;
const Rect = styled.div`
  top: -40px;
  left: 0px;
  width: 375px;
  height: fit-content;
  position: absolute;
  background-color: #e6e6e6;
`;

const Image2 = styled.div`
  top: 0px;
  left: 0px;
  width: 369px;
  height: 657px;
  position: absolute;
  flex-direction: column;
  display: flex;
  background-image: url(${require("../assets/images/do1.png")});
  background-size: cover;
`;

const Rect2 = styled.div`
  top: 110px;
  left: 9px;
  width: 357px;
  height: 610px;
  position: absolute;
  background-color: rgba(212, 253, 194, 0.91);
  border-width: 1px;
  border-color: rgba(0, 0, 0, 1);
  flex-direction: column;
  display: flex;
  border-style: solid;
  border-radius: 5%;
`;

const Image3 = styled.img`
  top: 0px;
  left: 2px;
  width: 200px;
  height: 121px;
  position: absolute;
  object-fit: contain;
`;

const Brand = styled.span`
  font-family: Roboto;
  top: 130px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 500;
  color: #121212;
  height: 32px;
  width: 357px;
  text-align: center;
  font-size: 26px;
`;

const Image3Stack = styled.div`
  top: 0px;
  left: 0px;
  width: 357px;
  height: 146px;
  position: absolute;
`;

const Image3StackStack = styled.div`
  width: 357px;
  height: 146px;
  margin-top: 4px;
  position: relative;
`;

const LoremIpsum3 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 18px;
  margin-top: 13px;
  margin-left: 11px;
`;

const Image2Stack = styled.div`
  width: 350px;
  height: 393px;
  position: relative;
`;

const RectStack = styled.div`
  width: 381px;
  height: 738px;
  margin-top: 50px;
  position: relative;
  border-radius: 10px;
`;

export default ThirdScreen;
