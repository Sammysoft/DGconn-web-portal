import React from 'react';
import styled from 'styled-components';
import { CustomText, FlexedWrapper } from '../Styles';

import About1 from '../../assets/Icons/about1.svg';
import About2 from '../../assets/Icons/about2.svg';
import About3 from '../../assets/Icons/about3.svg';

import ProjectImg from '../../assets/Images/project.svg';
import { PrimaryButton } from '../Elements/button';
import { StyledImage } from '../Elements/image';

const Wrapper = styled.div`
width: 90%;
margin: auto;
`;

const AboutWriteGrid = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
gap: 1%;
margin: 5vh 0px 5vh 0px;


@media (max-width: 1040px){
flex-direction: column;
}
`;


const CardWrapper = styled.div`
border-radius: 10px;
width: 32%;
height: 45vh;
background-image: url(${(props) => props.bgImage ? props.bgImage : ""});
background-position: contain;
background-repeat: no-repeat;
background-size: 100%;
position: relative;

@media (max-width: 1040px){
background-size: cover;
width: 100%;
margin: 2vh 0px 2vh 0px;
}
`;

const LastCardWrapper = styled.div`
border-radius: 10px;
width: 32%;
height: 45vh;
background-color: ${(props) => props.bgcolor ? props.bgcolor : ""};
position: relative;

@media (max-width: 1040px){
width: 100%;
margin: 2vh 0px 2vh 0px;
}
`

const ProjectWrapper = styled.div`
background-image: url("${ProjectImg}");
background-position: contain;
background-size: 100%;
background-repeat: no-repeat;
width: 100%;
height: 50vh;
margin: 10vh 0px 5vh 0px;

@media (max-width: 1040px){
background-size: cover;
background-position: center;
}
`;


const About = () => {

    const AboutList = [{
        head: `Top-Tier Freelancer`,
        content: `We screen for skill, professionalism, and
        reliability making possible to get the best
        result on your product we have talented
        skill in various categories`
    },
    {
        head: `Safe And Secure`,
        content: `Escrow payments, NDA protection and
        platform support for any technical
        issue that needs an assistance , our
        support is always available to help.`
    },
    {
        head: `Flexible Hiring`,
        content: `Hire for an hour, a project, or long term-
        you hire at your preferred method, as a
        startup company or individual looking for
        a freelancer.`
    }];

    const PersonList = [{
        bgImage: About1,

    },
    {
        bgImage: About2,

    },
    {
        bgImage: About3,

    }]

    return (
        <>
            <Wrapper>
                <CustomText bold size={'2.5rem'} small={'2rem'}>
                    Why Choose Us?
                </CustomText>
                <CustomText opacity={0.5} size={'1rem'} width={'35%'} smallWidth={'90%'} small={'1rem'}>
                    Why thousands trust DD CONN as their go to platform for sourcing
                    talented freelancer?
                </CustomText>

                <AboutWriteGrid>
                    {AboutList.map((about, idx) =>
                        <FlexedWrapper
                            key={idx.toString()}
                            width={'30%'}
                            smallWidth={'100%'}
                            direction={'column'}
                            height={'20vh'}
                            justify={'space-evenly'}
                            align={'flex-start'}
                        >
                            <CustomText
                                bold
                                size={'1.5rem'}
                            >
                                {about.head}
                            </CustomText>
                            <CustomText
                                opacity={0.5}
                                width={'90%'}
                            >
                                {about.content}
                            </CustomText>
                        </FlexedWrapper>
                    )}
                </AboutWriteGrid>

                <CustomText
                    bold
                    size={'2rem'}
                    small={'1.5rem'}
                >
                    Don't take our words for it!<br />
                    Here it from our patners.
                </CustomText>

                <AboutWriteGrid>
                    {PersonList.map((person, idx) =>
                        <>
                            {idx !== 2 &&
                                <CardWrapper
                                    key={idx.toString()}
                                    bgImage={person.bgImage}
                                >

                                </CardWrapper>}

                            {idx === 2 &&
                                <LastCardWrapper
                                    bgcolor={'#ffffff'}
                                >
                                    <FlexedWrapper
                                        direction={'column'}
                                        height={'80%'}
                                        width={'90%'}
                                        padding={'0px 5% 0px 5% 0px'}
                                    >
                                        <FlexedWrapper>
                                            <StyledImage
                                                img={person.bgImage}
                                                size={'50px'}
                                                borderrad={'50px'}
                                                small={'50px'}
                                            />
                                            <FlexedWrapper
                                                width={'70%'}
                                                height={'fit-content'}
                                                direction={'column'}
                                                align={'flex-start'}
                                                justify={'center'}
                                            >
                                                <CustomText
                                                    size={'1.5rem'}
                                                    padding={'10px 0px 5px 10px'}
                                                >
                                                    Kate Adebayo
                                                </CustomText>
                                                <CustomText
                                                    size={'0.8rem'}
                                                    padding={'0px 0px 10px 10px'}
                                                    opacity={0.5}
                                                >
                                                    CEO Rackkett.co
                                                </CustomText>
                                            </FlexedWrapper>
                                        </FlexedWrapper>

                                         <CustomText
                                                size={'1rem'}
                                                small={'0.8rem'}
                                                opacity={0.4}
                                                width={'85%'}
                                                padding={'0px 12.5% 0px 12.5%'}
                                            >
                                                "We have employed so many talented here, can feel so amazed about how many talents are right on this platform my best platform for hiring".
                                            </CustomText>
                                    </FlexedWrapper>
                                </LastCardWrapper>
                            }
                        </>
                    )}
                </AboutWriteGrid>

                <CustomText width={'45%'} smallWidth={'100%'} opacity={0.5} >
                    Trusted by Clients and Freelancers Worldwide, with over 230 thousands clients
                    and freelancer, we have been able to meet up to their standards from hiring to
                    freelancing. Trusted by our clients, and you can be among the loyal clients.
                </CustomText>

                <ProjectWrapper>
                    <FlexedWrapper
                        width={'100%'}
                        height={'80%'}
                        direction={'column'}
                        align={'center'}
                    >
                        <CustomText
                            bold
                            color={'#ffffff'}
                            width={'35%'}
                            size={'3rem'}
                            style={{ textAlign: "center", marginBottom: '20px' }}
                        >
                            Ready to Start Your
                            Next Project
                        </CustomText>
                        <FlexedWrapper
                            height={'fit-content'}
                            width={'25%'}
                            smallWidth={'80%'}
                            justify={'space-evenly'}>
                            <PrimaryButton
                                bgColor={'transparent'}
                                color={'#FFFFFF'}
                                borderColor={'#FFFFFF'}
                                text={'Post a Job'}
                            />

                            <PrimaryButton
                                bgColor={'#FFFFFF'}
                                color={'#000000'}
                                text={'Join as a Freelancer'}
                            />
                        </FlexedWrapper>
                    </FlexedWrapper>
                </ProjectWrapper>
            </Wrapper>
        </>
    )
}

export default About;