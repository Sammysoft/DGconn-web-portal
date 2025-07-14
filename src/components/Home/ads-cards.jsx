import React from 'react';
import styled from 'styled-components';
import { CustomText, FlexedWrapper } from '../Styles';
import { PrimaryButton } from '../Elements/button';

import Check from '../../assets/Icons/check.svg';
import Avatar from '../../assets/Icons/avatar3.svg';

import Hiring from '../../assets/Images/hiring.svg';
import HiringOverlay from '../../assets/Images/hiring-overlay.svg';

import Martketplace from '../../assets/Images/marketplace.svg';
import MarketplaceOverlay from '../../assets/Images/marketplace_overlay.svg';
import { StyledImage } from '../Elements/image';

const Wrapper = styled.div`
width: 100%;
height: 100%;
`;

const CardWrapper = styled.div`
width: 95%;
 background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('${(props) => props.bgimage ? props.bgimage : ""}');
background-repeat: no-repeat;
background-position: cover;
background-size: cover;
padding: 20px;
border-radius: 20px;
margin: 10vh 0px 10vh 0px;

height: 55vh;

@media (max-width: 1040px){
height: fit-content;
width: 90%;
}
`


const AdsCards = () => {
    return (
        <>
            <Wrapper>
                <CardWrapper bgimage={Martketplace}>

                    <FlexedWrapper
                        justify={'space-between'}
                        align={'center'}
                        width={'100%'}
                        height={'100%'}
                        invert={'column'}
                    >
                        <FlexedWrapper
                            direction={'column'}
                            justify={'flex-start'}
                            align={'left'}
                            width={'50%'}
                            smallWidth={'100%'}
                        >
                            <CustomText
                                color={'#ffffff'}
                                size={'1.2rem'}
                                small={'0.8rem'}
                                padding={'60px 0px 20px 50px'}
                                spadding={'30px 0px 20px 20px'}
                            >
                                Marketplace
                            </CustomText>
                            <CustomText
                                width={'80%'}
                                size={'2.3rem'}
                                color={'#ffffff'}
                                padding={'0px 0px 20px 50px'}
                                spadding={'0px 0px 20px 20px'}
                                weight={900}
                                bold
                            >
                                Buy your tools to enhance your workplace.
                            </CustomText>
                            <CustomText
                                width={'80%'}
                                size={'1.2rem'}
                                color={'#ffffff'}
                                padding={'20px 0px 5vh 50px'}
                                spadding={'0px 0px 20px 20px'}
                                opacity={0.5}
                                small={'0.8rem'}
                                smallWidth={'95%'}
                            >
                                We screen for skill, professionalism and reliability making possible to get the best result on your product we have talented skill in various categories
                            </CustomText>
                            <FlexedWrapper
                                width={'60%'}
                                justify={'space-evenly'}
                                align={'center'}
                                height={'fit-content'}
                                smallWidth={'95%'}
                            >
                                <PrimaryButton
                                    text={'Buy Tools'}
                                    color={'#1C1C1C'}
                                    bgColor={'#ffffff'}
                                    width={'fit-content'}
                                />

                                <PrimaryButton
                                    text={'Learn More'}
                                    color={'#ffffff'}
                                    bgColor={'transparent'}
                                    width={'fit-content'}
                                    borderColor={'#ffffff'}
                                />
                            </FlexedWrapper>
                        </FlexedWrapper>

                        <ImageBackground
                            bgimage={MarketplaceOverlay}
                        >
                            <FlexedWrapper
                                height={'80%'}
                                justify={'center'}
                                align={'space-between'}
                                direction={'column'}
                            >
                                <FlexedWrapper
                                    width={'80%'}
                                    margin={'10px 0px 10px 10%'}
                                    justify={'space-between'}
                                >
                                    <WhiteWrapper>
                                        <FlexedWrapper>
                                            <CustomText
                                                size={'0.5rem'}
                                                opacity={0.4}
                                                align={'left'}
                                                width={'100%'}
                                            >New Stock
                                            </CustomText>
                                        </FlexedWrapper>
                                        <FlexedWrapper>
                                            <CustomText
                                                size={'0.7rem'}
                                                weight={900}
                                            >Helmet
                                            </CustomText>
                                            <CustomText
                                                size={'0.7rem'}
                                                opacity={0.4}
                                            >$49.00
                                            </CustomText>
                                        </FlexedWrapper>
                                    </WhiteWrapper>
                                </FlexedWrapper>

                                <FlexedWrapper
                                    justify={'flex-end'}
                                    align={'flex-end'}
                                >
                                    <WhiteWrapper>
                                        <FlexedWrapper>
                                            <CustomText
                                                weight={900}
                                                size={'1rem'}
                                            >
                                                Product Delievered
                                            </CustomText>
                                            <StyledImage
                                                img={Check}
                                                size={'20px'}
                                                small={'20px'}
                                            />
                                        </FlexedWrapper>
                                    </WhiteWrapper>
                                </FlexedWrapper>
                            </FlexedWrapper>
                        </ImageBackground>
                    </FlexedWrapper>
                </CardWrapper>



                <CardWrapper
                    bgimage={Hiring}
                >
                    <FlexedWrapper
                        justify={'space-between'}
                        align={'center'}
                        width={'100%'}
                        height={'100%'}
                        invert={'column'}
                    >

                        <ImageBackground
                            order={'1'}
                            bgimage={HiringOverlay}
                        >
                            <FlexedWrapper
                                height={'80%'}
                                justify={'center'}
                                align={'space-between'}
                                direction={'column'}
                            >
                                <FlexedWrapper
                                    width={'80%'}
                                    margin={'10px 0px 10px 10%'}
                                    justify={'space-between'}
                                >

                                </FlexedWrapper>

                                <FlexedWrapper
                                    justify={'flex-start'}
                                    align={'flex-end'}
                                >
                                    <WhiteWrapper>
                                        <FlexedWrapper
                                            width={'100%'}
                                            justify={'space-between'}
                                            align={'center'}
                                        >
                                            <CustomText
                                                size={'0.6rem'}
                                            >
                                                Electrician
                                            </CustomText>
                                            <CustomText
                                                size={'0.6rem'}
                                                color={'#1A4BC1'}
                                            >Hire</CustomText>
                                        </FlexedWrapper>
                                        <FlexedWrapper>
                                            <StyledImage
                                                img={Avatar}
                                                size={'30px'}
                                            />
                                            <FlexedWrapper
                                                width={'75%'}>
                                                <CustomText
                                                    padding={'0px 0px 0px 10px'}
                                                    size={'1.5rem'}
                                                >Adeyinka
                                                </CustomText>
                                            </FlexedWrapper>
                                        </FlexedWrapper>
                                    </WhiteWrapper>
                                </FlexedWrapper>
                            </FlexedWrapper>
                        </ImageBackground>

                        <FlexedWrapper
                            direction={'column'}
                            justify={'flex-start'}
                            align={'left'}
                            width={'55%'}
                            smallWidth={'100%'}
                        >
                            {/* <CustomText
                                color={'#ffffff'}
                                size={'1rem'}
                                small={'0.8rem'}
                                padding={'30px 0px 20px 20px'}
                                spadding={'30px 0px 20px 20px'}
                            >
                                Marketplace
                            </CustomText> */}
                            <CustomText
                                width={'80%'}
                                size={'2.3rem'}
                                color={'#ffffff'}
                                padding={'60px 0px 20px 30px'}
                                spadding={'20px 0px 20px 20px'}
                                weight={900}
                                bold
                            >
                                Hiring talented artisans with well reputable work ability
                            </CustomText>
                            <CustomText
                                width={'80%'}
                                size={'1.2rem'}
                                color={'#ffffff'}
                                padding={'20px 0px 5vh 30px'}
                                spadding={'20px 0px 5vh 20px'}
                                opacity={0.5}
                                small={'0.8rem'}
                                smallWidth={'95%'}
                            >
                                We screen for skill, professionalism and reliability making possible to get the best result on your product we have talented skill in various categories
                            </CustomText>
                            <FlexedWrapper
                                width={'45%'}
                                justify={'space-evenly'}
                                align={'center'}
                                height={'fit-content'}
                                smallWidth={'95%'}
                            >
                                <PrimaryButton
                                    text={'Hire Now'}
                                    color={'#1C1C1C'}
                                    bgColor={'#ffffff'}
                                    width={'fit-content'}
                                />

                                <PrimaryButton
                                    text={'Learn More'}
                                    color={'#ffffff'}
                                    bgColor={'transparent'}
                                    width={'fit-content'}
                                    borderColor={'#ffffff'}
                                />
                            </FlexedWrapper>
                        </FlexedWrapper>
                    </FlexedWrapper>
                </CardWrapper>
            </Wrapper>
        </>
    )
}

const WhiteWrapper = styled.div`
width: fit-content;
height: fit-content;
background: #ffffff;
border-radius: 20px;
padding: 10px;

`

const ImageBackground = styled.div`
background-image: url('${(props) => props.bgimage ? props.bgimage : ""}');
background-position: cover;
background-repeat: no-repeat;
background-size: 100%;
width: 40%;
border-radius: 20px;
padding:20px;
height: 80%;

@media (max-width: 1040px){
width: 90%;
margin-top: 5vh;
height: 30vh;
order: ${(props) => props.order ? props.order : ""};
}
`

export default AdsCards;