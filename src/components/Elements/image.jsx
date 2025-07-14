import React from 'react';
import styled from "styled-components";
import Lottie from 'lottie-react';


const ImageWrapper = styled.img`
width: ${(props) => props.size ? props.size : "100%"};
height: ${(props) => props.size ? props.size : "100%"};
object-fit: contain;
object-position: ${(props) => props.fit ? props.fit : ""};
border-top-right-radius: ${(props) => props.brad ? props.brad : ""};
border-top-left-radius: ${(props) => props.brad ? props.brad : ""};
border-radius: ${(props)=> props.borderrad ? props.borderrad: ""};

@media (max-width: 1040px){
width: ${(props) => props.small ? props.small : "100%"};
height: ${(props) => props.small ? props.small : "100%"};
}
`;

export const StyledImage = ({ size, img, small, border, fit, onClick, borderrad }) => {
    return (
        <>
            <ImageWrapper
                size={size}
                fit={fit}
                src={img}
                small={small}
                brad={border}
                borderrad={borderrad}
                onClick={onClick}
            />
        </>
    )
}


const LottieWrapper = styled.div`
width: ${(props) => props.size ? props.size : "100%"};
height: ${(props) => props.size ? props.size : "100%"};


@media (max-width: 1040px){
width: ${(props) => props.small ? props.small : "100%"};
height: ${(props) => props.small ? props.small : "100%"};
}
`;

export const LottieImage = ({ size, img, loop, small }) => {
    return (
        <>
            <LottieWrapper size={size} small={small}>
                <Lottie animationData={img} loop={loop} />
            </LottieWrapper>
        </>
    )
}


