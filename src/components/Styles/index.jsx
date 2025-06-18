import styled from "styled-components";
import { Colors } from "../../Res";


export const FlexedWrapper = styled.div`
width: ${(props) => props.width ? props.width : "100%"};
display: flex;
flex-direction: ${(props) => props.direction ? props.direction : 'row'};
align-items: ${(props) => props.align ? props.align : "center"};
justify-content: ${(props) => props.justify ? props.justify : "center"};
height: ${(props) => props.height ? props.height : "100%"};
padding: ${(props)=> props.padding ? props.padding : ""};
`;

export const CustomText = styled.div`
 font-weight: ${(props) => props.bold ? 600 : props.weight};
 opacity: ${(props) => props.normal ? 0.5 : props.opacity};
 font-size: ${(props) => props.normal ? '1rem' : props.size};
 width: ${(props) => props.width ? props.width : "fit-content"};
 color: ${(props) => props.color ? props.color : ""};
 padding: 2px;
`;



