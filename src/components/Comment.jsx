import React from "react";
import axios from 'axios'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import DeleteCom from "./Delete";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 45%;
    margin-bottom: 10px;
`;
const WrapperRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;
const H3 = styled.h3`
    font-size: 14px;
    width: 15%;
    display: flex;
    align-items: center;
`;
const P = styled.p`
    font-size: 14px;
    width: 480px;
    margin: 0; 
    display: flex;
    align-items: center;
`;
const Delete = styled.div`
    width: 30%; 
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transform: translate(100%, 0);
`;

const Comment = () => {
    const {imgId} = useParams();
    const [commented, setCommented] = useState([]);

    const getComment = () => {
        axios
            .get(`http://3.36.127.43:8080/${imgId}/comments`)
            .then((res) => {
                setCommented(res.data);
                console.log(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        getComment();
    }, [imgId]);

    const resetComment = () => {
        getComment();
    };

    return(
        <> 
            {commented.map(com => (
                <Wrapper>
                <div key = {com.id}>
                    <WrapperRow>
                        <H3>익명</H3> 
                        <P>{com.commentBody}</P>
                        <Delete>
                            <DeleteCom commentID={com.id} onDelete={resetComment}/>
                        </Delete>
                    </WrapperRow>
                </div> 
                </Wrapper>              
            ))}
        </>
    );
};

export default Comment;