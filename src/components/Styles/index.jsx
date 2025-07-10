import styled from "styled-components";
import { Colors } from "../../Res";


export const FlexedWrapper = styled.div`
width: ${(props) => props.width ? props.width : "100%"};
display: flex;
flex-direction: ${(props) => props.direction ? props.direction : 'row'};
align-items: ${(props) => props.align ? props.align : "center"};
justify-content: ${(props) => props.justify ? props.justify : "center"};
height: ${(props) => props.height ? props.height : "100%"};
padding: ${(props) => props.padding ? props.padding : ""};
margin: ${(props)=> props.margin ? props.margin : ""};


@media (max-width: 1040px){
flex-direction: ${(props) => props.invert ? props.invert : ""};
width: ${(props) => props.smallWidth ? props.smallWidth : ""};
height: ${(props) => props.smallHeight ? props.smallHeight : ""};
};
`;

export const CustomText = styled.div`
 font-weight: ${(props) => props.bold ? 600 : props.weight};
 opacity: ${(props) => props.normal ? 0.5 : props.opacity};
 font-size: ${(props) => props.normal ? '1rem' : props.size};
 width: ${(props) => props.width ? props.width : "fit-content"};
 color: ${(props) => props.color ? props.color : ""};
 padding: ${(props) => props.padding ? props.padding : "2px"};


 @media (max-width: 1040px){
  font-size: ${(props) => props.normal ? '0.7rem' : props.small};
   width: ${(props) => props.smallWidth ? props.smallWidth : "fit-content"};
  font-size: ${(props) => props.normal ? '0.8rem' : props.ssize};
   padding: ${(props) => props.spadding ? props.spadding : ""};
 }
`;



