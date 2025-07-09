
import styled from 'styled-components';
import { StyledImage } from '../Elements/image';

import FootLogo from '../../assets/images/secondary-logo.svg';
import { CustomText, FlexedWrapper } from '../Styles';
import { Colors } from '../../Res';
import Input from '../Elements/input';
import { PrimaryButton } from '../Elements/button';

import LinkedIn from '../../assets/Icons/linkedin.svg';
import Facebook from '../../assets/Icons/facebook.svg';
import Twitter from '../../assets/Icons/twitter.svg';
import Instagram from '../../assets/Icons/instagram.svg';

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;


const SubscribeWrapper = styled.div`
width: 90%;
border-radius: 20px;
background-color: ${Colors.BLUE.DEEP};
padding: 15px;
margin: 5%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 40vh;
`;


const Footer = () => {
    return (
        <>
            <Wrapper>
                <SubscribeWrapper>
                    <FlexedWrapper
                        height={'fit-content'}
                        invert={'column'}
                        align={'space-evenly'}
                        justify={'space-evenly'}
                    >
                        <FlexedWrapper
                            width={'45%'}
                            direction={'column'}
                            align={'flex-start'}
                            smallWidth={'100%'}
                        >
                            <CustomText
                                size={'2.5rem'}
                                width={'70%'}
                                smallWidth={'100%'}
                                small={'1.5rem'}
                                color={'#FFFFFF'}
                                padding={'0px 0px 20px 0px'}
                            >
                                Subscribe to our Newsletter
                            </CustomText>
                            <CustomText
                                opacity={0.5}
                                color='#ffffff'
                                width={'85%'}
                                smallWidth={'100%'}
                                small={'0.6rem'}
                            >
                                Subscribe to get the latest updates, jobs and insights on our platform. Be the first to get updated on every information shared about the platform
                            </CustomText>
                        </FlexedWrapper>

                        <FlexedWrapper
                            width={'45%'}
                            direction={'column'}
                            align={'flex-start'}

                            smallWidth={'100%'}
                        >
                            <CustomText
                                color={'#ffffff'}
                                size={'1.5rem'}
                                small={'0.9rem'}
                            >
                                Stay up to Date
                            </CustomText>
                            <FlexedWrapper
                                width={'80%'}
                                height={'fit-content'}
                                justify={'flex-start'}
                                align={'space-between'}
                                padding={'20px 0px 20px 0px'}
                            >
                                <Input
                                    width={'50%'}
                                    placeholder={'Enter email address.. '}
                                    bgcolor={"#F8F8F82E"}
                                    color={'#ffffff'}
                                />

                                <PrimaryButton
                                    width={'fit-content'}
                                    text={'Subscribe'}
                                    bgColor={'#ffffff'}
                                    padding={'10px'}
                                    color={'#000000'}
                                />
                            </FlexedWrapper>
                        </FlexedWrapper>
                    </FlexedWrapper>
                </SubscribeWrapper>

                <FlexedWrapper
                    width={'90%'}
                    justify={'flex-start'}
                    align={'flex-start'}
                    height={'30vh'}
                    invert={'column'}
                >
                    <FlexedWrapper
                        direction={'column'}
                        height={'fit-content'}
                        width={'50%'}
                        justify={'flex-start'}
                        align={'flex-start'}
                    >
                        <StyledImage img={FootLogo} size={'200px'} />
                    </FlexedWrapper>
                    <FlexedWrapper
                        justify={'space-between'}
                    >
                        <FlexedWrapper
                            direction={'column'}
                            width={'20%'}
                            smallWidth={'30%'}
                            height={'100%'}
                            justify={'flex-start'}
                            align={'flex-start'}
                        >
                            {["LinkedIn", 'Facebook', 'Instagram', 'Twitter'].map((social, ind) =>
                                <FlexedWrapper
                                    justify={'flex-start'}
                                    align={'center'}
                                    width={'15%'}
                                    key={ind.toString()}
                                    height={'15%'}
                                >
                                    <StyledImage
                                        img={ind === 0 ? LinkedIn : ind === 1 ? Facebook : ind === 2 ? Instagram : Twitter}
                                        size={'20px'}
                                    />
                                    <CustomText
                                        size={'1.2rem'}
                                        small={'0.8rem'}
                                        opacity={0.4}
                                        padding={'0px 0px 0px 10px'}
                                        key={ind.toString()}
                                    >
                                        {social}
                                    </CustomText>
                                </FlexedWrapper>
                            )}
                        </FlexedWrapper>


                        <FlexedWrapper
                            direction={'column'}
                            width={'20%'}
                            smallWidth={'30%'}
                            height={'100%'}
                            justify={'flex-start'}
                            align={'flex-start'}
                        >
                            {['About Us', 'As a Freelancer', 'As an Employer'].map((social, ind) =>
                                <CustomText
                                    size={'1.2rem'}
                                    small={'0.8rem'}
                                    opacity={0.4}
                                    key={ind.toString()}
                                    padding={'10px 0px 10px 0px'}
                                >
                                    {social}
                                </CustomText>
                            )}
                        </FlexedWrapper>

                        <FlexedWrapper
                            direction={'column'}
                            width={'20%'}
                            smallWidth={'30%'}
                            height={'100%'}
                            justify={'flex-start'}
                            align={'flex-start'}
                        >
                            {['Privacy Policy', 'Terms of Service', 'Contact Service'].map((social, ind) =>
                                <CustomText
                                    size={'1.2rem'}
                                    small={'0.8rem'}
                                    opacity={0.4}
                                    padding={'10px 0px 10px 0px'}
                                    key={ind.toString()}
                                >
                                    {social}
                                </CustomText>
                            )}
                        </FlexedWrapper>
                    </FlexedWrapper>
                </FlexedWrapper>
            </Wrapper>
        </>
    )
}

export default Footer;