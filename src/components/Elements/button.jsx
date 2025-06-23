import styled from "styled-components";
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
border: ${(props) => props.borderColor ? `1px solid ${props.borderColor}` : ""};
width: ${(props) => props.width ? props.width : ""};
justify-content: center;
`;

export const PrimaryButton = ({ bgColor, color, text, border, onClick, borderColor, padding, width }) => {
    return (
        <>
            <ButtonWrapper
                bgColor={bgColor}
                border={border}
                onClick={onClick}
                borderColor={borderColor}
                padding={padding}
                width={width}
            >
                <CustomText color={color}
                    small={'0.8rem'}
                >
                    {text}
                </CustomText>
            </ButtonWrapper>
        </>
    )
}