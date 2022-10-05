import React, { useState } from "react";
import styled from "styled-components";
import "../components/drop.css";
import CupertinoFooter2 from "../components/CupertinoFooter2";

import CupertinoFooter21 from "../components/CupertinoFooter21";
import MaterialButtonDanger from "../components/MaterialButtonDanger";
import Slider from "react-slick";
import prodData from "../components/sample.json";
import { Link } from "react-router-dom";

function FourthScreen(props) {
  const dishes = prodData.normal.data;
  let ProdCode = dishes[0].map((dish) => dish.dish_code);
  let ProdName = dishes[0].map((dish) => dish.dish_name);
  const [prodDesc, setprodDesc] = useState("see product description");
  const [prodprice, setprodprice] = useState("price");
  const [proddelTime, setproddelTime] = useState("delivering time");

  let dishdisplay = dishes[0].map((dish) => {
    return (
      <div className="col-6 " key={dish._id}>
        <Link to="/SevenScreen">
          <div
            className="card"
            style={{
              width: "10rem",
              height: "6rem",
              background: `url(${dish.product_image}) bottom right 15% no-repeat #46B6AC`,
            }}>
            <div className="pt-5">{dish.dish_price}</div>
            <div>{dish.dish_code}</div>
          </div>
        </Link>
        <input
          style={{ position: "relative", top: "-90px" }}
          onClick={() => {
            setprodDesc(dish.dish_name);
            setproddelTime("Delivery: " + dish.delivery_time);
            setprodprice(dish.dish_price);
          }}
          className="form-check-input position-relative"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="b"></input>
      </div>
    );
  });
  const Quantity = ["1", "2", "3", "4", "5", "6"];
  React.useEffect(() => {
    console.log(ProdCode, "kkkkkkkkkkkkkkkk");
  }, []);

  const settings = {
    className: "slider variable-width",

    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const MakeItem = function (X) {
    return <option>{X}</option>;
  };
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
          <Brand>brand of cafe, branch</Brand>

          <div
            class="row p-3 "
            style={{ height: "220px", overflowY: "scroll" }}>
            {dishdisplay}
          </div>
          <Rect>
            <LoremIpsumRow>
              <LoremIpsum style={{ width: "180px !important" }}>
                {prodDesc}
                {"\n"}
                {proddelTime}
                {"\n"}
                {prodprice}
              </LoremIpsum>
              <MaterialButtonDanger
                style={{
                  height: 36,
                  width: 100,
                  borderWidth: 0,
                  borderColor: "#000000",
                  borderRadius: 12,
                  shadowRadius: 0,
                  marginLeft: 80,
                  borderStyle: "solid",
                  boxShadow: "5px 5px 0px  0.76px rgba(0,0,0,1) ",
                }}></MaterialButtonDanger>
            </LoremIpsumRow>

            <QuantityRow>
              <div>Quantity</div>
              <select
                style={{
                  textAlign: "center",
                  fontWeight: 400,
                  color: "#121212",
                  height: "19px",
                  width: "63px",
                  border: "none",
                  background: "transparent",
                }}>
                {Quantity.map(MakeItem)}
              </select>
            </QuantityRow>
          </Rect>
          <ProductName>
            <select
              style={{
                borderLeftWidth: "5px",
                fontWeight: 400,
                color: "#121212",
                height: "36px",
                width: "163px",
                bordercolor: "green",
                background: "transparent",
              }}>
              {ProdName.map(MakeItem)}
            </select>
          </ProductName>
          <ProductCode>
            <select
              style={{
                borderLeftWidth: "5px",
                fontWeight: 400,
                color: "#121212",
                height: "36px",
                width: "163px",
                borderRightWidth: "5px",
                bordercolor: "green",

                background: "transparent",
              }}>
              {ProdCode.map(MakeItem)}
            </select>
          </ProductCode>
          <Rect2>
            <div>
              <h2></h2>
              <Slider {...settings}>
                <div className="pr-2">
                  <img
                    style={{ width: "100px", height: "90px" }}
                    src={require("../assets/images/logo.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "100px", height: "90px" }}
                    src={require("../assets/images/do1.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "100px", height: "90px" }}
                    src={require("../assets/images/do1.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "100px", height: "90px" }}
                    src={require("../assets/images/do1.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "100px", height: "90px" }}
                    src={require("../assets/images/do1.png")}
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </Rect2>
          <CupertinoFooter21
            style={{
              height: 49,
              width: 308,
              position: "absolute",
              left: 2,
              top: 600,
            }}></CupertinoFooter21>
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
const TextInput = styled.input`
  font-family: Roboto;
  top: 46px;
  left: 4px;
  position: absolute;
  font-style: normal;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  width: 42px;
  height: 25px;
  font-size: 20px;
  border: none;
  background: transparent;
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
const TextInput1 = styled.input`
  font-family: Roboto;
  left: 3px;
  position: absolute;
  font-style: normal;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  width: 59px;
  height: 25px;
  font-size: 20px;
  top: 72px;
  border: none;
  background: transparent;
`;

const MaterialCardWithButtons2Stack = styled.div`
  top: 96px;
  left: 19px;
  width: 146px;
  height: 101px;
  position: absolute;
`;

const TextInput2 = styled.input`
  font-family: Roboto;
  left: 4px;
  position: absolute;
  font-style: normal;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  width: 59px;
  height: 25px;
  font-size: 20px;
  top: 72px;
  border: none;
  background: transparent;
`;

const TextInput2Stack = styled.div`
  top: 0px;
  left: 0px;
  width: 146px;
  height: 101px;
  position: absolute;
`;

const TextInput3 = styled.input`
  font-family: Roboto;
  top: 46px;
  left: 5px;
  position: absolute;
  font-style: normal;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  width: 42px;
  height: 25px;
  font-size: 20px;
  border: none;
  background: transparent;
`;

const TextInput2StackStack = styled.div`
  top: 96px;
  left: 188px;
  width: 146px;
  height: 101px;
  position: absolute;
`;

const TextInput4 = styled.input`
  font-family: Roboto;
  top: 46px;
  left: 4px;
  position: absolute;
  font-style: normal;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  width: 42px;
  height: 25px;
  font-size: 20px;
  border: none;
  background: transparent;
`;

const TextInput5 = styled.input`
  font-family: Roboto;
  left: 3px;
  position: absolute;
  font-style: normal;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  width: 59px;
  height: 25px;
  font-size: 20px;
  top: 71px;
  border: none;
  background: transparent;
`;

const MaterialCardWithButtons4Stack = styled.div`
  top: 210px;
  left: 192px;
  width: 146px;
  height: 101px;
  position: absolute;
`;

const TextInput6 = styled.input`
  font-family: Roboto;
  left: 3px;
  position: absolute;
  font-style: normal;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  width: 59px;
  height: 25px;
  font-size: 20px;
  top: 71px;
  border: none;
  background: transparent;
`;

const TextInput6Stack = styled.div`
  top: 0px;
  left: 0px;
  width: 146px;
  height: 101px;
  position: absolute;
`;

const TextInput7 = styled.input`
  font-family: Roboto;
  top: 46px;
  left: 4px;
  position: absolute;
  font-style: normal;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  width: 42px;
  height: 25px;
  font-size: 20px;
  border: none;
  background: transparent;
`;

const TextInput6StackStack = styled.div`
  top: 210px;
  left: 22px;
  width: 146px;
  height: 101px;
  position: absolute;
`;

const Rect = styled.div`
  top: 480px;
  left: 19px;
  width: 321px;
  height: 90px;
  position: absolute;
  background-color: rgba(184, 233, 134, 1);
  flex-direction: column;
  display: flex;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: -12px;
`;
const Brand = styled.span`
  font-family: Roboto;
  top: 55px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 500;
  color: #121212;
  height: 32px;
  width: 357px;
  text-align: center;
  font-size: 20px;
`;
const LoremIpsumRow = styled.div`
  height: 36px;
  flex-direction: row;
  display: flex;
  margin-top: 11px;
  margin-left: 16px;
  margin-right: 28px;
`;

const QuantityRow = styled.div`
  height: 35px;
  flex-direction: row;
  display: flex;
  margin-top: 18px;
  margin-left: 110px;
  margin-right: 123px;
`;

const ProductName = styled.div`
  font-family: Roboto;
  top: 426px;
  left: 17px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
`;

const ProductCode = styled.div`
  top: 426px;
  left: 180px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
`;

const Rect2 = styled.div`
  top: 320px;
  left: 22px;
  width: 312px;
  height: 98px;
  position: absolute;
  background-color: #e6e6e6;
`;

export default FourthScreen;
