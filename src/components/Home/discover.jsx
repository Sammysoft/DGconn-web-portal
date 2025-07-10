import React from 'react';
import styled from 'styled-components';
import { CustomText, FlexedWrapper } from '../Styles';
import { Colors } from '../../Res';
import { StyledImage } from '../Elements/image';

import Talent from '../../assets/Images/talent.png';
import Ecommerce from '../../assets/Images/ecommerce.png';
import Connect from '../../assets/Images/connect.png';

import TalentIcon from '../../assets/Icons/talent.svg';
import RemoteIcon from '../../assets/Icons/remote.svg';
import ViewBack from '../../assets/Images/viewback.svg';

import JobIcon from '../../assets/Icons/job.svg';
import UserIcon from '../../assets/Icons/usercircle.svg';

import FreelanceShot from '../../assets/Images/freelance_shot.svg';
import ArtisanShot from '../../assets/Images/artisan_shot.svg';
import MarketplaceShot from '../../assets/Images/marketplace_shot.svg';
import EmployerShot from '../../assets/Images/employer_shot.svg';

import Avatar1 from '../../assets/Icons/avatar1.svg';
import Avatar2 from '../../assets/Icons/avatar2.svg';
import Avatar3 from '../../assets/Icons/avatar3.svg';

import Bittorrent from '../../assets/Icons/bittorrent.svg';
import Dropbox from '../../assets/Icons/dropbox.svg';
import Coub from '../../assets/Icons/coub.svg';
import Zoom from '../../assets/Icons/zoom.svg';


import Divider from '../Elements/divider';
import { PrimaryButton } from '../Elements/button';
import AdsCards from './ads-cards';


const DiscoverWrapper = styled.div`
width: 90%;
margin: auto;
padding: 5vh 0px 5vh 0px;
`;

const ImageBackground = styled.div`
  width: 100%;
  border-radius: 20px;
  height: 90vh;
  background-image: url(${ViewBack});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 1040px) {
    background-size: cover;
    background-position: center;
    height: 80vh;
    margin: 5vh 0px 5vh 0px
  }
`;



const ItemListingWrapper = styled.div`
background: #FFFFFF;
border-radius: 20px;
box-shadow: 0px 9px 15px 0px #484848A1;
width: 100%;
height: fit-content;



`;


const Discover = () => {

    const freelancerList = [{
        name: "Adeyemi Adebanke",
        icon: Avatar1,
        pricing: "$50/hr",
        isActive: false,
        role: "Product Manager"
    }, {
        name: "Adeyemi Titilayo",
        icon: Avatar2,
        pricing: "$20/hr",
        isActive: false,
        role: "Copy writer"
    }, {
        name: "Babatunde Adeleke",
        icon: Avatar3,
        pricing: "$50/hr",
        isActive: false,
        role: "Product Designer"
    }]

    const jobList = [{
        name: "Bittorrent",
        icon: Bittorrent,
        pricing: "$50/hr",
        isActive: false,
        role: "Product Manager"
    }, {
        name: "Dropbox",
        icon: Dropbox,
        pricing: "$20/hr",
        isActive: false,
        role: "Copy writer"
    }, {
        name: "Coub INC",
        icon: Coub,
        pricing: "$50/hr",
        isActive: false,
        role: "Product Designer"
    },
    {
        name: "Zoom INC",
        icon: Zoom,
        pricing: "$50/hr",
        isActive: false,
        role: "Product Designer"
    }]

    return (
        <>
            <DiscoverWrapper>
                <FlexedWrapper direction={'column'} justify={'flex-start'} align={'flex-start'}>
                    <CustomText bold size={'2.5rem'} small={'1.5rem'}>
                        Discover Opportunities
                    </CustomText>
                    <CustomText weight={500} size={'2rem'} small={'1.2rem'} opacity={0.3}>
                        that inspire
                    </CustomText>
                    <CustomText size={'1rem'} width={'40%'} small={'0.7rem'} weight={100} >
                        Our intuitive platform connects skilled job seekers with top employers.
                        Whether you're aiming to launch your career, make a pivotal change,
                        or discover that extraordinary opportunity.
                    </CustomText>
                </FlexedWrapper>
                <DiscoverCards />
                <AdsCards />
                <FlexedWrapper invert={'column'}
                    justify={'space-between'}
                    align={'space-between'}
                    height={'20vh'}
                    smallHeight={'fit-content'}
                >
                    <FlexedWrapper
                        direction={'column'}
                        width={'60%'}
                        smallWidth={'100%'}
                        justify={'flex-start'}
                        align={'flex-start'}>
                        <CustomText bold size={'2.5rem'} small={'1.5rem'}>
                            What We Offer
                        </CustomText>
                        <CustomText
                            size={'1rem'}
                            width={'70%'}
                            small={'0.7rem'}
                            weight={100}
                            spadding={'0px 0px 5vh 0px'}
                        >
                            Discover a unified platform built to connect buyers.
                            skilled professionals, and employers - empowering work, ecommerce and creativity.
                        </CustomText>
                    </FlexedWrapper>
                    <FlexedWrapper
                        direction={'column'}
                        justify={"space-between"}
                        align={'flex-start'}
                        width={'40%'}
                        height={'100%'}
                        smallWidth={'100%'}
                    >
                        <FlexedWrapper
                            justify={'space-between'}
                            width={'100%'}
                            align={'space-between'}
                        >
                            <StyledImage
                                img={RemoteIcon}
                                size={'40px'}
                                small={'30px'}
                            />
                            <FlexedWrapper
                                direction={'column'}
                                justify={'flex-start'}
                                width={'85%'}
                                align={'flex-start'}>
                                <CustomText
                                    bold
                                    size={'1.2rem'}
                                    small={'1rem'}>
                                    Work Globally
                                </CustomText>
                                <CustomText
                                    small
                                    size={'0.8rem'}
                                    weight={100}
                                >
                                    Work Remotely across 100+ continents, get paid in your desired currency
                                    by doing what you love doing best.
                                </CustomText>
                            </FlexedWrapper>
                        </FlexedWrapper>
                        <FlexedWrapper
                            justify={'space-between'}
                            width={'100%'}
                            align={'space-between'}
                        >
                            <StyledImage
                                img={TalentIcon}
                                size={'40px'}
                                small={'30px'}
                            />
                            <FlexedWrapper
                                direction={'column'}
                                justify={'flex-start'}
                                width={'85%'}
                                align={'flex-start'}>
                                <CustomText bold size={'1.2rem'} small={'1rem'}>Work Globally</CustomText>
                                <CustomText
                                    small
                                    size={'0.8rem'}
                                    weight={100}
                                >
                                    Work Remotely across 100+ continents, get paid in your desired currency
                                    by doing what you love doing best.
                                </CustomText>
                            </FlexedWrapper>
                        </FlexedWrapper>
                    </FlexedWrapper>
                </FlexedWrapper>
                <GridWrapper>
                    <ServiceWrapper
                        bgcolor={"#042B27"}
                    >
                        <CustomText
                            color='#AAF27F80'
                            size={'1rem'}
                            padding={'20px 0px 5px 30px'}
                        >
                            Freelancing
                        </CustomText>
                        <CustomText
                            color='#AAF27F'
                            size={'1.5rem'}
                            padding={'5px 0px 5px 30px'}
                        >
                            Work Without Limits
                        </CustomText>
                        <CustomText
                            color='#AAF27F80'
                            size={'0.7rem'}
                            width={'70%'}
                            padding={'10px 0px 5px 30px'}
                        >
                            Weather you're a designer, writer, or developer --- find projects or offer services. Freelance your way. Sign up with your mail account to get started with your tech journey.
                        </CustomText>

                        <FlexedWrapper
                            width={'100%'}
                            justify={'space-between'}
                            height={'fit-content'}
                            align={'flex-start'}
                            invert={'column'}
                        >
                            <PrimaryButton
                                text={'Get Hired'}
                                color={'#000000'}
                                bgColor={'#ffffff'}
                                width={'fit-content'}
                                size={'0.7rem'}
                                margin={'10px 0px 10px 30px'}
                            />
                            <StyledImage
                                size={'300px'}
                                img={FreelanceShot}
                            />
                        </FlexedWrapper>
                    </ServiceWrapper>
                    <ServiceWrapper
                        bgcolor={"#7913E5"}
                    >
                        <CustomText
                            color='#FED6F1B2'
                            size={'1rem'}
                            padding={'20px 0px 5px 0px'}
                            align={'center'}
                            width={'100%'}
                            smallWidth={'100%'}
                        >
                            Artisans
                        </CustomText>
                        <CustomText
                            color='#FED6F1'
                            size={'1.5rem'}
                            padding={'5px 0px 5px 0px'}
                            width={'100%'}
                            align={'center'}
                            smallWidth={'100%'}
                        >
                            Showcase Local Skills
                        </CustomText>
                        <CustomText
                            color='#AAF27F80'
                            size={'0.7rem'}
                            padding={'10px 0px 5px 15%'}
                            width={'70%'}
                            align={'center'}
                            smallWidth={'70%'}
                        >
                            Hire skilled artisans near you --- Plumbers, tailers, carpenters, and more. Get real results from real talent.
                        </CustomText>

                        <FlexedWrapper
                            width={'100%'}
                            justify={'space-between'}
                            height={'fit-content'}
                            align={'center'}
                            direction={'column'}
                        >
                            <PrimaryButton
                                text={'Get Hired'}
                                color={'#000000'}
                                bgColor={'#ffffff'}
                                width={'fit-content'}
                                size={'0.7rem'}
                                margin={'10px 0px 10px 0px'}
                            />
                            <StyledImage
                                size={'500px'}
                                img={ArtisanShot}
                                fit={'top left'}
                            />
                        </FlexedWrapper>
                    </ServiceWrapper>

                    <ServiceWrapper
                        bgcolor={"#1A4BC1"}
                    >
                        <CustomText
                            color='#FFFFFF80'
                            size={'1rem'}
                            padding={'20px 0px 5px 30px'}
                        >
                            Marketplace
                        </CustomText>
                        <CustomText
                            color='#FFFFFF'
                            size={'1.5rem'}
                            padding={'5px 0px 5px 30px'}

                        >
                            Buy & Sell with Ease
                        </CustomText>
                        <CustomText
                            color='#FFFFFF99'
                            size={'0.7rem'}
                            padding={'10px 0px 5px 30px'}
                            width={'70%'}
                        >
                            Find quality products from verified or list yours in minutes, A trusted space for seemless digital ecommerce.
                        </CustomText>

                        <FlexedWrapper
                            width={'100%'}
                            justify={'space-between'}
                            height={'fit-content'}
                            align={'flex-start'}
                            direction={'column'}
                            margin={'0px 0px 0px 30px'}
                            invert={'column'}
                        >
                            <PrimaryButton
                                text={'Buy Now'}
                                color={'#000000'}
                                bgColor={'#ffffff'}
                                width={'fit-content'}
                                size={'0.7rem'}
                                margin={'10px 0px 10px 0px'}
                            />
                            <StyledImage
                                size={'500px'}
                                img={MarketplaceShot}
                                fit={'top left'}
                            />
                        </FlexedWrapper>
                    </ServiceWrapper>

                    <ServiceWrapper
                        bgcolor={"#042B27"}
                    >
                        <CustomText
                            color='#AAF27F80'
                            size={'1rem'}
                            padding={'20px 0px 5px 30px'}
                        >
                            Employer
                        </CustomText>
                        <CustomText
                            color='#AAF27F'
                            size={'1.5rem'}
                            padding={'5px 0px 5px 30px'}
                        >
                            Hire Smarter
                        </CustomText>
                        <CustomText
                            color='#AAF27F80'
                            size={'0.7rem'}
                            width={'70%'}
                            padding={'10px 0px 5px 30px'}
                        >
                            Post jobs, find top talents, and manage applicants. A streamlined hiring experience for businesses.
                        </CustomText>

                        <FlexedWrapper
                            width={'100%'}
                            justify={'space-between'}
                            height={'fit-content'}
                            align={'flex-start'}
                            invert={'column'}
                        >
                            <PrimaryButton
                                text={'Post a Job'}
                                color={'#000000'}
                                bgColor={'#ffffff'}
                                width={'fit-content'}
                                size={'0.7rem'}
                                margin={'10px 0px 10px 30px'}
                            />
                            <StyledImage
                                size={'300px'}
                                img={EmployerShot}
                            />
                        </FlexedWrapper>
                    </ServiceWrapper>
                </GridWrapper>
            </DiscoverWrapper>
        </>
    )
}


const GridWrapper = styled.div`
width: 100%;
margin: 5vh 2.5% 5vh 0%;
height: fit-content;
display: flex;
flex-wrap: wrap;
gap: 1%;

@media (max-width: 1040px){
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex-wrap: none;
}
`;

const ServiceWrapper = styled.div`
background: ${(props) => props.bgcolor ? props.bgcolor : ""};
border-radius: 15px;
// padding: 15px;
width: 48%;
height: 35vh;
box-shadow: 0px 4px 15px 0px #78787869;
overflow-y: hidden;
overflow-x: hidden;
margin-bottom: 2vh;

@media (max-width: 1040px){
width: 100%;
height: fit-content
}
`;

const CardWrapper = styled.div`
margin: 5vh 0px 5vh 0px;
width: 100%;
display: flex;
flex-wrap: wrap;
gap: 3%;

@media (max-width: 1040px){
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
`;

const Card = styled.div`
width: 30%;
border-radius: 30px;
background-color: ${(props) => props.bgcolor ? props.bgcolor : Colors.GREY.NORMAL};
height: 50vh;
position: relative;
border: 1px solid #A9A6A652;


@media (max-width: 1040px){
width: 100%;
margin: 2vh 0px 2vh 0px;
}
`;

const CardDisplayImage = styled.div`
width: 100%;
height: 40%;
border-top-right-radius: 30px;
border-top-left-radius: 30px;
`

const DiscoverCards = () => {

    const cardList = [{
        title: "Connect",
        btnText: "Apply Now",
        head: `Over 210K+ employers looking for employees`,
        body: `Join thousands of freelancer getting employed on daily basis
        by top clients, all you need is the skills, apply for your desired
        job, get employed and get paid.`,
        img: Connect,
        bgcolor: "#262626"
    }, {
        title: "Ecommerce",
        btnText: "Buy Now",
        head: `Marketplace for Artisan to shop working tools`,
        body: `Shop required tools for your vocational activities , ranging
        from electricals to engineering tools. We have varieties
        of tools you could use for your vocational work.`,
        img: Talent,
        bgcolor: "#1A4BC1"
    }, {
        title: "Talent",
        btnText: "Fulltime",
        head: `Connect with Freelancer with top skills`,
        body: `Connect and get your project done by freelancer with top skills
        from framer expert to figma experts. Get your project a better
        skill expert for it.`,
        img: Ecommerce,
        bgcolor: '#262626'
    }]

    return (
        <>
            <CardWrapper>
                {cardList.map((item, idx) =>
                    <Card
                        key={idx.toString()}
                        bgcolor={item.bgcolor}
                    >
                        <CardDisplayImage>
                            <StyledImage
                                size={'100%'}
                                img={item.img}
                                border={'20px'}
                            />
                        </CardDisplayImage>
                        <FlexedWrapper
                            direction={'column'}
                            height={'50%'}
                            align={'flex-start'}
                            justify={'space-evenly'}
                            padding={"15px"}
                        >
                            <CustomText
                                size={'1rem'}
                                small={'0.7rem'}
                                color={'#ffffff'}
                                normal
                                style={{ textTransform: "uppercase" }}
                            >
                                {item.title}
                            </CustomText>
                            <CustomText
                                bold
                                size={'1.2rem'}
                                small={'0.8rem'}
                                width={'75%'}
                                smallWidth={'75%'}
                                ssize={'1.2rem'}
                                color={'#ffffff'}
                            >
                                {item.head}
                            </CustomText>
                            <CustomText
                                normal
                                size={'0.6rem'}
                                opacity={0.4}
                                width={'90%'}
                                smallWidth={'90%'}
                                color={'#ffffff'}
                            >
                                {item.body}
                            </CustomText>
                        </FlexedWrapper>
                    </Card>
                )}
            </CardWrapper>
        </>
    )
}

export default Discover;