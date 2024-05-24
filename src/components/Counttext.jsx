import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Counttext = () => {
    const { imgId } = useParams();
    const [commentCount, setCommentCount] = useState(0);

    useEffect(() => {
        axios
            .get(`http://3.36.127.43:8080/${imgId}/comments`)
            .then((res) => {
                setCommentCount(res.data.length);
               
            })
            .catch((e) => {
                console.log(e);
            });
    }, [imgId]);
    return (
        <div>
            <p>댓글 {commentCount}개</p>
        </div>
    );
};

export default Counttext;