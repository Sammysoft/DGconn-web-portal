import styled from "styled-components";

const InputWrapper = styled.input`
width: ${(props) => props.width ? props.width : ""};
background-color: ${(props) => props.bgcolor ? props.bgcolor : ""};
border-radius: 20px;
border: none;
padding: ${(props) => props.padding ? props.padding : "15px"};
color: ${(props) => props.color || "#ffffff"};

&:focus {
border: none;
outline: none;
}

  &::placeholder {
    color: ${(props) => props.placeholdercolor || "#aaaaaa"};
    opacity: 1;
  }
`;


const Input = ({ width, bgcolor, padding, placeholder, color }) => {
    return (
        <>
            <InputWrapper
                placeholder={placeholder}
                width={width}
                bgcolor={bgcolor}
                padding={padding}
                color={color}
            />
        </>
    )
}

export default Input;