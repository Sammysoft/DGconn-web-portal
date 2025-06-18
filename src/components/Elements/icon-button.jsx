import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../Res';

const ButtonWrap = styled.div`
width: ${(props) => props.width ? props.width : "100%"};
border-radius: 20px;
padding: 5px 10px 5px 10px;
background-color: ${(props) => props.bgColor ? props.bgColor : Colors.BLACK.DEEP};
text-align: center;
cursor: pointer;
box-shadow: 0px 7px 24px 0px #1C1C1CA3;
`;


const IconButton = ({ bgColor, item, onClick, width }) => {
    return (
        <>
            <ButtonWrap
                bgColor={bgColor}
                onClick={onClick}
                width={width}>
                {item}
            </ButtonWrap>
        </>
    )
}

export default IconButton;