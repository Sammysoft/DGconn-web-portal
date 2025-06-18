import styled from "styled-components";
import React from 'react';
import { CustomText } from "../Styles";
import { Colors } from "../../Res";


const ButtonWrapper = styled.div`
background-color: ${(props) => props.bgColor ? props.bgColor : Colors.PRIMARY.DEEP};
color: ${(props) => props.color ? props.color : "#ffffff"};
border-radius: ${(props) => props.border ? props.border : "15px"};
cursor: pointer;
padding: ${(props) => props.padding ? props.padding : "5px 10px 5px 10px"};
text-align: center;
height: fit-content;
`;

export const PrimaryButton = ({ bgColor, color, text, border, onClick }) => {
    return (
        <>
            <ButtonWrapper bgColor={bgColor} border={border} onClick={onClick}>
                <CustomText color={color}>{text}</CustomText>
            </ButtonWrapper>
        </>
    )
}