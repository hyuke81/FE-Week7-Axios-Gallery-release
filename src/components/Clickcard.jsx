import { styled } from 'styled-components';
import React from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";
import Counttext from './Counttext';

const Wrapper = styled.div`
    flex-direction: column;
    display: flex;
    align-items: left;
    width: 65%;
    line-height: 0;
`;
const H3 = styled.h3`
    font-size: 25px;
    margin-top: 40px;
`;
const P = styled.p`
    font-size: 14px;
`;
const Pcom = styled.p`
    font-size: 14px;
    color: gray;
`;
const Img = styled.img`
    width: 65%;
    height: 65%;
    margin-top: 10px;
    margin-bottom: 20px;
`;
const Clickcard = () => {
    const {imgId} = useParams();
    const [imgInfo, setimgInfo] = useState([]);

    useEffect(() => {
        axios
            .get(`http://3.36.127.43:8080/imageAll`)
            .then((res) => {
                res.data.map(imgs => {
                    if(imgs.id === imgId){
                        setimgInfo(imgs);
                    }
                })
            })
            .catch((e)=> {
                console.log(e);
            });
    }, [imgId]);

    return(
        <>
            <Wrapper>
                <H3>{imgInfo.imageName}</H3>
                <P>{imgInfo.imageText}</P>
                <Pcom><Counttext/></Pcom>
            </Wrapper>
                <Img src={imgInfo.imageURL} alt="img"/>
        </>
    );
};

export default Clickcard;

