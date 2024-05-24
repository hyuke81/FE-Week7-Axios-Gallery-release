import React from "react";
import axios from 'axios'
import { useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    width: 45%;
`;
const Input = styled.input`
    width: 95%;
    border: 1px solid #ffffff;
`;
const Button = styled.button`
    width: 10%;
    color: blue;
    font-size: 13px;
    background-color: #ffffff;
    border: 1px solid skyblue;
    border-radius: 10px;
    height: 30px;
`;
const Write = () => {
    const {imgId} = useParams();
    const [write, setWrite] = useState('');

    const handleWrite = () => {
        axios
            .post(`http://3.36.127.43:8080/${imgId}/comments`, {
                commentBody: write
            })
            .then(res => {
                console.log('Comment Created:', res.data);
                setWrite(''); 
            })
            .catch(e => {
                console.error('Failed to post comment:', e);
            });
        };

    return(
        <>
            <Wrapper>
                <Input type="text" value={write} 
                onChange={(e) => setWrite(e.target.value)} 
                placeholder="댓글 작성..."/>
                <Button onClick={handleWrite}>게시</Button>
            </Wrapper>
            
        </>
    );
};

export default Write;