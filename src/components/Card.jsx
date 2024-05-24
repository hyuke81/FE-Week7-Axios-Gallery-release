import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from 'styled-components';
import Margin from "./Margin"

const Photo= styled.img`
  width: 220px;
  height: 220px;
`;

const Wrapper = styled.div`
  padding: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrappertext = styled.div`
  overflow: hidden;
  text-overflow: ellipsis; //왜 적용 x?
  white-space: nowrap; 
  width: 220px;
  height: 80px;
`;

const Imgname = styled.div`
  font-size: 13px;
`;

const Imgtext = styled.p`
  font-size: 12px;
`;

export default function Card({ id, imageURL, imageName, imageText }) {
    const navigate = useNavigate();
  
    return (
      <Wrapper onClick={() => navigate(`/imageAll/${id}`)}>
        <Photo src={imageURL} alt="img"/>
        <Margin height={0}/>
        <Wrappertext>
          <Imgname>
            <h3>{imageName}</h3>
          </Imgname>
          <Imgtext>
            <p>{imageText}</p>
          </Imgtext>
        </Wrappertext>
      </Wrapper>
    );
  }