import styled from "styled-components";
import lions from "../img/profilelion.png";
import Postcount from "./Postcount";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
`;
const Wrappertext = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left: 20px;
    line-height: 0;
`;
const Profileimg = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 100%;
`;

const Proflie = () => {
    return (
        <>
            <Wrapper>
                <Profileimg src={lions} alt="lion" />
                <Wrappertext>
                    <h2>likelion_12th_fronted</h2>
                    <p>멋쟁이사자처럼 12기 여러분 화이팅!! 어른사자로 폭풍성장 중...🦁</p>
                    <Postcount/>
                </Wrappertext>
            </Wrapper>
        </>
    );
};

export default Proflie;