import React from 'react';
import styled from "styled-components";
import Lottie from 'lottie-react';


const ImageWrapper = styled.img`
width: ${(props) => props.size ? props.size : "100%"};
height: ${(props) => props.size ? props.size : "100%"};
object-fit: contain;
`;

export const StyledImage = ({ size, img }) => {
    return (
        <>
            <ImageWrapper size={size} src={img} />
        </>
    )
}


const LottieWrapper = styled.div`
width: ${(props)=> props.size? props.size: "100%"};
height: ${(props)=> props.size ? props.size: "100%"};
`;

export const LottieImage = ({ size, img, loop })=>{
    return (
        <>
        <LottieWrapper size={size}>
            <Lottie animationData={img} loop={loop} />
        </LottieWrapper>
        </>
    )
}


