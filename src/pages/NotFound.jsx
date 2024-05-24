import React from "react";
import { styled } from 'styled-components';
import { useNavigate } from "react-router-dom";
import lion from "../img/lion.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
    align-items: center;
  margin-top: 13%;
`;
const P = styled.h3`
  font-size: 15px;
`;
const Img = styled.img`
  width: 500px;
  height: 350px;
`;

const Button = styled.button`
  background-color: #206cf0;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 10px;
    width: 110px;
    height: 30px;
`;
const NotFound = () => {
    const navigate = useNavigate();
    return (
        <> 
            <Wrapper>
                <P>멋쟁이 사자가 당신을 기다리고 있습니다</P>
                <Img src={lion} alt="lion" />
                <P>어흥 .. </P>
                <Button onClick={() => navigate(-1)}>뒤돌아서 도망가기!</Button>
                
            </Wrapper>
            
        </>
    );
};

export default NotFound;