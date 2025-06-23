
import styled from 'styled-components';
import { CustomText } from '../Styles';

import Accordion from '../Elements/accordion/accordion';

const Wrapper = styled.div`
width: 90%;
margin: auto;
`;



const FAQs = () => {
    return (
        <>
            <Wrapper>
                <CustomText bold size={'2rem'}>
                    FAQ
                </CustomText>
                <Accordion />
            </Wrapper>
        </>
    )
}

export default FAQs;