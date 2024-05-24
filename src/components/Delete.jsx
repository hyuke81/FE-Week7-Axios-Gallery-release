import React from "react";
import axios from 'axios'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
    background-color: #ffffff;
    color: gray;
    border: 1px solid #ffffff;
    width: 100%;
`;


const DeleteCom = ({commentID, onDelete}) => {
    const {imgId} = useParams();
    const [deleted, setDelete] = useState('');
    useEffect(() => {
        axios
            .delete(`http://3.36.127.43:8080/${imgId}/comments/${deleted}`)
            .then(res => {
                console.log('Comment Deleted:', res.data);
                setDelete('');
                onDelete();
            })
            .catch(e => {
                console.log('Failed to delete comment:', e);
            });
    }, [deleted, imgId, commentID, onDelete]);
    return (
        <div>
            <Button onClick={() => setDelete(commentID)}>삭제</Button>
        </div>
    );
};

export default DeleteCom;