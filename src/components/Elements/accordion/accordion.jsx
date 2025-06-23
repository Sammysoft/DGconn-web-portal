import React, { useState } from 'react';
import {
  FAQContainer,
  AccordionItem,
  QuestionRow,
  QuestionText,
  PlusIcon,
  Answer,
} from './accordion.styles';

    const faqData = [
        {
            question: "Are payment secure?",
            answer: "Yes, we offer a highly secured payment infrastructure.",
        },
        {
            question: "I am having trouble login in what do i do?",
            answer: "Can you try turning on and off your network service, perhaps it could be an issue with your network provider.",
        },
        {
            question: "How is my information protected?",
            answer: "You need not worry about the security of your personal details, our platform provides end to end encryption of valuable information.",
        },
        {
            question: "Can i interview freelancers before hiring?",
            answer: "Yes, but for now you can use third party conference call services as we currently do not provide this.",
        },
        {
            question: "How do i post my project?",
            answer: "First you need to create an employer account, afterwhich you can then begin to post jobs, as simple as that.",
        },
        {
            question: "Do i need a resume to get started?",
            answer: "No, we focus on portfolio and your answers to project questionnaires. However, a complete profile increases your chances of getting hired",
        },
        {
            question: "How do i ensure quality work?",
            answer: "Constant follow ups and timely deliverables",
        },
        {
            question: "Is there a service fee?",
            answer: "Information regarding charges and service fee is covered in our terms and policy agreement, please do well to go through it.",
        }
    ];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      {faqData.map((item, index) => (
        <AccordionItem key={index} onClick={() => toggleIndex(index)}>
          <QuestionRow>
            <QuestionText>{item.question}</QuestionText>
            <PlusIcon isOpen={openIndex === index}>+</PlusIcon>
          </QuestionRow>
          {openIndex === index && <Answer>{item.answer}</Answer>}
        </AccordionItem>
      ))}
    </FAQContainer>
  );
};

export default Accordion;
