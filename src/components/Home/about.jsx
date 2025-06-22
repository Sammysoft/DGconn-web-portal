import React from 'react';
import styled from 'styled-components';
import { CustomText, FlexedWrapper } from '../Styles';

import About1 from '../../assets/Icons/about1.svg';
import About2 from '../../assets/Icons/about2.svg';
import About3 from '../../assets/Icons/about3.svg';

import ProjectImg from '../../assets/Images/project.svg';
import { PrimaryButton } from '../Elements/button';

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
width: 30%;
height: 48vh;
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

const ProjectWrapper = styled.div`
background-image: url("${ProjectImg}");
background-position: contain;
background-size: 100%;
background-repeat: no-repeat;
width: 100%;
height: 60vh;
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

                <CustomText bold size={'2.5rem'}>
                    Why Choose Us?
                </CustomText>

                <AboutWriteGrid>
                    {PersonList.map((person, idx) =>
                        <CardWrapper
                            key={idx.toString()}
                            bgImage={person.bgImage}
                        >

                        </CardWrapper>
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
                        height={'100%'}
                        direction={'column'}
                        align={'center'}
                    >
                        <CustomText
                            bold
                            color={'#ffffff'}
                            width={'35%'}
                            size={'3.5rem'}
                            style={{ textAlign: "center", marginBottom:'20px' }}
                        >
                            Ready to Start Your
                            Next Project
                        </CustomText>
                        <FlexedWrapper
                            height={'fit-content'}
                            width={'20%'}
                            smallWidth={'70%'}
                            justify={'space-evenly'}>
                            <PrimaryButton
                                bgColor={'#FFFFFF'}
                                color={'#000000'}
                                text={'Post a Job'}
                            />

                            <PrimaryButton
                                bgColor={'#000000'}
                                color={'#FFFFFF'}
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