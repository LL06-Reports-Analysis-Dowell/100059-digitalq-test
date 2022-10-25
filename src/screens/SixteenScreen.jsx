import React, { useState } from "react";
import styled from "styled-components";
import "../components/drop.css";
import CupertinoFooter2 from "../components/CupertinoFooter2";

import "../assets/css/sixteenscreen.css";
import "../assets/css/utilities.css";
import info from "../assets/images/info.png"
import { AiOutlineMessage, AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export const SixteenScreen = () => {
    React.useEffect(() => {
        // console.log(ProdCode, "kkkkkkkkkkkkkkkk");
    }, []);

    return (
        <Container>
            <RectStack>
                <Dowell>

                    <div className="row ht">
                        <span className="logintext">Login</span>
                        {/* <br /> */}
                        <span className="talk">Payments after full <br /> login/join us</span>

                    </div>
                    <br /><br /><br />

                    <div className="row text-center">
                        <div className="loginmain">
                            {/* <Link to="/ninescreen">nn</Link> */}
                            <div className="loginbtn" type="button">Logged in</div>
                        </div>
                    </div>

                    <div className="ht info-msg d-flex justify-content-between px-2">
                        <div>
                            <AiOutlineMessage size="20px" color="rgb(255, 57, 57)" />
                        </div>
                        <div>
                            <AiOutlineInfoCircle size={"20px"} color="rgb(255, 57, 57)" />
                        </div>
                    </div>


                    <CupertinoFooter2
                        style={{
                            height: 50,
                            width: 327,
                            position: "absolute",
                            top: 680,
                            left: 17,
                        }} />
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
  border-radius: 25px;
`;
