import React, { useState } from "react";
import styled from "styled-components";
import "../components/drop.css";
import CupertinoFooter2 from "../components/CupertinoFooter2";
import { Headerr } from "../components/Headrr";

import "../assets/css/seventeenscreen.css";
import "../assets/css/eighteenscreen.css";
import "../assets/css/utilities.css";

import taptopaid from '../assets/images/paid-tap.png'
import paid from '../assets/images/paid.png'

import { QrReader } from 'react-qr-reader';
import { AiOutlineMessage, AiOutlineInfoCircle } from "react-icons/ai";

export const EighteenScreen = () => {
    const [data, setData] = useState('No result');
    React.useEffect(() => {
        // console.log(ProdCode, "kkkkkkkkkkkkkkkk");
    }, []);

    return (
        <Container>
            <RectStack>
                <Dowell className="parent-font">
                    <Headerr text='Cash/card Payment' />
                    <br />

                    {/* QR Reader  */}
                    <div className=" d-flex justify-content-center">
                        <div className="reader">
                            <QrReader
                                onResult={(result, error) => {
                                    if (!!result) {
                                        setData(result?.text);
                                    }

                                    if (!!error) {
                                        console.info(error);
                                    }
                                }}
                                style={{ width: '100%', borderStyle: 'solid', borderRadius: '25px', borderColor: 'green' }}
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <p>{data}</p>
                    </div>
                    {/* green part */}
                    <div className="d-flex justify-content-center parent-font">
                        <div className="pay-info font-weight-400">
                            <p>Total 123 $</p>
                            <p>Phone of customer</p>
                        </div>
                    </div>
                    <br />

                    <div className="d-flex justify-content-center">
                        <div className="brand">
                            <p className="ms-4 mt-2" >Receipt number from Shop</p>
                        </div>
                    </div>
                    <br /><br />
                    <div className="d-flex justify-content-center">
                        <button className="btnn">Confirm</button>
                    </div>

                    {/* message and info icon  */}
                    <div className=" d-flex justify-content-between px-2">
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

