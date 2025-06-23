
import styled from 'styled-components';

export const FAQContainer = styled.div`
display: grid;
grid-template-columns: 48% 48%;
gap: 2.5%;
width: 100%;
height: fit-content;
margin: 2vh 0px 8vh 0px;

@media (max-width: 1040px){
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
`;

export const AccordionItem = styled.div`
background-color: #EDEDED;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  padding: 20px 24px;
  cursor: pointer;

  @media (max-width: 1040px){
  margin-top: 2vh;
  width: 95%
}
`;

export const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuestionText = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
`;

export const PlusIcon = styled.span`
  font-size: 24px;
  font-weight: bold;
  transition: transform 0.3s ease;

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: rotate(45deg);
  `}
`;

export const Answer = styled.div`
  margin-top: 12px;
  font-size: 16px;
  color: #444;
  line-height: 1.5;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
