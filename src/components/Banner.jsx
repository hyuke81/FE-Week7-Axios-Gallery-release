import styled from "styled-components";
import axios from 'axios'
import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import Layout from "../pages/Layout";
import Card from "./Card";


const Banner = () => {
    const [imgInfo, setimgInfo] = useState([]);

    useEffect(() => {
        axios
            .get(`http://3.36.127.43:8080/imageAll`)
            .then((res) => {
                console.log(res.data);
                setimgInfo(res.data);
            })
            .catch((e) => {
                console.error(e);
            })
    },[]);
    return (
        <>
            <Layout>
                {imgInfo.map(imgs => (
                    <Card
                        key={imgs.id}
                        id={imgs.id}
                        imageURL={imgs.imageURL}
                        imageName={imgs.imageName}
                        imageText={imgs.imageText}   
                    />
                ))}
            </Layout>
        </>
        
    );
};

export default Banner;




