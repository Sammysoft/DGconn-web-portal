import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../Res';
import { CustomText } from '../Styles';

const ShadowWrapper = styled.div`
box-shadow: 0px 7px 24px 0px #4C9746A3;
border-radius: 15px;
background-color: ${(props) => props.bgColor ? props.bgColor : Colors.PRIMARY.DEEP};
text-align: center;
padding: 4px 10px 4px 10px;
cursor: pointer;
`;

const ShadowButton = ({ bgColor, text }) => {
    return (
        <>
            <ShadowWrapper bgColor={bgColor}>
                <CustomText color='#ffffff'>{text}</CustomText>
            </ShadowWrapper>
        </>
    )
};

export default ShadowButton;