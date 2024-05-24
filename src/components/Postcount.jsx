import styled from "styled-components";
import React from "react";
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";

const H3 = styled.h3`
    font-size: 14px;
`;

const Postcount = () => {
    const [postcount, setpostcount] = useState([]);
    useEffect(() => {
        axios
            .get(`http://3.36.127.43:8080/imageSize`)
            .then((res) => {
                setpostcount(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);
    return (
        <H3>게시물 {postcount}개</H3>
    );
};

export default Postcount;