import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
width:${(props) => props.width ? props.width : "100%"};
height:1px;
background-color: #C3C3C3;
margin: ${(props)=> props.margin ? props.margin : "10px 0px 10px 0px"}
`

const Divider = ({ width }) => {
    return (
        <>
            <Wrapper width={width}>
            </Wrapper>
        </>
    )
}

export default Divider;