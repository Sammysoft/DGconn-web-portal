import React from 'react';
import styled from 'styled-components';
import { StyledImage } from '../Elements/image';

import SecondaryLogo from '../../assets/Images/secondary-logo.svg';
import { CustomText, FlexedWrapper } from '../Styles';

const Wrapper = styled.div`
width: 100%;
border-top: 1px solid #000000;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ContentWrapper = styled.div`
width: 90%;
height: 100%;
border-right: 1px solid #000000;
border-left: 1px solid #000000;
`


const Footer = () => {
    return (
        <>
            <Wrapper>
                <ContentWrapper>
                    <FlexedWrapper
                        width={'100%'}
                        justify={'space-between'}
                        align={'flex-start'}
                    >
                        <FlexedWrapper
                            width={'50%'}
                            justify={'space-between'}
                            align={'flex-start'}
                        >
                            <FlexedWrapper
                                direction={'column'}
                                width={'50%'}
                                height={'20vh'}
                                justify={'space-between'}
                                align={'space-between'}
                                padding={'30px 10px 30px 10vw'}
                            >
                                {["About", "As a Freelancer", "As an Employeer", "Privacy Policy", "Terms of Service"].map((val, index) =>
                                    <CustomText
                                        opacity={0.5}
                                        size={'1.2rem'}
                                    >
                                        {val}
                                    </CustomText>
                                )}
                            </FlexedWrapper>

                            <FlexedWrapper
                                direction={'column'}
                                width={'50%'}
                                height={'20vh'}
                                justify={'space-between'}
                                align={'space-between'}
                                padding={'30px 10px 30px 10vw'}
                            >
                                {["Contact Service", "Linked In", "Twitter", "Facebook", "Instagram"].map((val, index) =>
                                    <CustomText
                                        opacity={0.5}
                                        size={'1.2rem'}
                                    >
                                        {val}
                                    </CustomText>
                                )}
                            </FlexedWrapper>
                        </FlexedWrapper>
                    </FlexedWrapper>
                    <StyledImage size={'100%'} img={SecondaryLogo} />
                </ContentWrapper>
            </Wrapper>
        </>
    )
}

export default Footer;