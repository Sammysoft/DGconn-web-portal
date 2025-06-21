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

import Avatar1 from '../../assets/Icons/avatar1.svg';
import Avatar2 from '../../assets/Icons/avatar2.svg';
import Avatar3 from '../../assets/Icons/avatar3.svg';

import Bittorrent from '../../assets/Icons/bittorrent.svg';
import Dropbox from '../../assets/Icons/dropbox.svg';
import Coub from '../../assets/Icons/coub.svg';
import Zoom from '../../assets/Icons/zoom.svg';


import Divider from '../Elements/divider';
import { PrimaryButton } from '../Elements/button';


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
background-position: contain;
background-size: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
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
                    <CustomText bold size={'2.5rem'}>
                        Discover Opportunities
                    </CustomText>
                    <CustomText weight={500} size={'2rem'} opacity={0.3}>
                        that inspire
                    </CustomText>
                    <CustomText size={'1rem'} width={'40%'} weight={100} >
                        Our intuitive platform connects skilled job seekers with top employers.
                        Whether you're aiming to launch your career, make a pivotal change,
                        or discover that extraordinary opportunity.
                    </CustomText>
                </FlexedWrapper>
                <DiscoverCards />

                <FlexedWrapper justify={'space-between'} align={'space-between'} height={'20vh'}>
                    <FlexedWrapper
                        direction={'column'}
                        width={'60%'}
                        justify={'flex-start'}
                        align={'flex-start'}>
                        <CustomText bold size={'2.5rem'}>
                            Discover Opportunities
                        </CustomText>
                        <CustomText weight={500} size={'2rem'} opacity={0.3}>
                            that inspire
                        </CustomText>
                        <CustomText size={'1rem'} width={'70%'} weight={100} >
                            Our intuitive platform connects skilled job seekers with top employers.
                            Whether you're aiming to launch your career, make a pivotal change,
                            or discover that extraordinary opportunity.
                        </CustomText>
                    </FlexedWrapper>
                    <FlexedWrapper direction={'column'} justify={"space-between"} align={'flex-start'} width={'40%'} height={'100%'}>
                        <FlexedWrapper justify={'space-between'} width={'100%'} align={'space-between'}>
                            <StyledImage img={RemoteIcon} size={'40px'} />
                            <FlexedWrapper
                                direction={'column'}
                                justify={'flex-start'}
                                width={'85%'}
                                align={'flex-start'}>
                                <CustomText bold size={'1.2rem'}>Work Globally</CustomText>
                                <CustomText normal size={'0.8rem'}>
                                    Work Remotely across 100+ continents, get paid in your desired currency
                                    by doing what you love doing best.
                                </CustomText>
                            </FlexedWrapper>
                        </FlexedWrapper>
                        <FlexedWrapper justify={'space-between'} width={'100%'} align={'space-between'}>
                            <StyledImage img={TalentIcon} size={'40px'} />
                            <FlexedWrapper
                                direction={'column'}
                                justify={'flex-start'}
                                width={'85%'}
                                align={'flex-start'}>
                                <CustomText bold size={'1.2rem'}>Work Globally</CustomText>
                                <CustomText normal size={'0.8rem'}>
                                    Work Remotely across 100+ continents, get paid in your desired currency
                                    by doing what you love doing best.
                                </CustomText>
                            </FlexedWrapper>
                        </FlexedWrapper>
                    </FlexedWrapper>
                </FlexedWrapper>

                <ImageBackground>
                    <FlexedWrapper
                        height={'80%'}
                        width={'70%'}
                        justify={'space-evenly'}
                    >
                        <FlexedWrapper
                            direction={'column'}
                            height={'70%'}
                            justify={'space-evenly'}
                            width={'45%'}
                        >
                            <ItemListingWrapper>
                                <FlexedWrapper
                                    justify={'space-between'}
                                    padding={'15px 10px 5px 10px'}
                                    height={'fit-content'}
                                >
                                    <StyledImage img={JobIcon} size={'30px'} />
                                    <CustomText width={'90%'}>Job</CustomText>
                                </FlexedWrapper>
                                <Divider />

                                {jobList.map((val, idx) =>
                                    <FlexedWrapper key={idx.toString()}
                                        height={'fit-content'}
                                        width={'90%'}
                                        align={'space-between'}
                                        justify={'space-between'}
                                        padding={'2.5%'}
                                    >
                                        <StyledImage size={'40px'} img={val.icon} />
                                        <FlexedWrapper
                                            width={'70%'}
                                            direction={'column'}
                                            justify={'center'}
                                            align={'flex-start'}>
                                            <CustomText size={'1.2rem'}>{val.name}</CustomText>
                                            <CustomText
                                                opacity={0.4}
                                                width="fit-content"
                                                normal
                                            >
                                                {val.role}
                                            </CustomText>
                                        </FlexedWrapper>
                                        <PrimaryButton
                                            text={'Apply'}
                                            padding={'2px'}
                                        />
                                    </FlexedWrapper>
                                )}
                            </ItemListingWrapper>
                        </FlexedWrapper>

                        <FlexedWrapper
                            direction={'column'}
                            height={'100%'}
                            justify={'flex-end'}
                            align={'flex-end'}
                            width={'45%'}
                        >
                            <ItemListingWrapper>
                                <FlexedWrapper justify={'space-between'}
                                    padding={'15px 10px 5px 10px'}
                                    height={'fit-content'} >
                                    <StyledImage img={UserIcon} size={'30px'} />
                                    <CustomText width={'65%'}>Freelancer</CustomText>
                                    <CustomText normal width={'20%'}>Filter</CustomText>
                                </FlexedWrapper>

                                <Divider />

                                {freelancerList.map((person, idx) =>
                                    <FlexedWrapper key={idx.toString()}
                                        height={'fit-content'}
                                        width={'90%'}
                                        align={'space-between'}
                                        justify={'space-between'}
                                        padding={'2.5%'}
                                    >
                                        <StyledImage size={'40px'} img={person.icon} />
                                        <FlexedWrapper
                                            width={'70%'}
                                            direction={'column'}
                                            justify={'center'}
                                            align={'flex-start'}>
                                            <CustomText size={'1.2rem'}>{person.name}</CustomText>
                                            <CustomText
                                                opacity={0.4}
                                                width="fit-content"
                                                normal
                                            >
                                                {person.role}
                                            </CustomText>
                                        </FlexedWrapper>
                                        <CustomText bold width={'15%'}>
                                            {person.pricing}
                                        </CustomText>
                                    </FlexedWrapper>
                                )}

                            </ItemListingWrapper>
                        </FlexedWrapper>
                    </FlexedWrapper>
                </ImageBackground>
            </DiscoverWrapper>
        </>
    )
}

const CardWrapper = styled.div`
margin: 5vh 0px 5vh 0px;
width: 100%;
display: flex;
flex-wrap: wrap;
gap: 3%;
`;

const Card = styled.div`
width: 30%;
border-radius: 30px;
background-color: ${Colors.GREY.NORMAL};
height: 50vh;
position: relative;
border: 1px solid #A9A6A652;
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
        img: Connect
    }, {
        title: "Talent",
        btnText: "Fulltime",
        head: `Connect with Freelancer with top skills`,
        body: `Connect and get your project done by freelancer with top skills
        from framer expert to figma experts. Get your project a better
        skill expert for it.`,
        img: Talent
    }, {
        title: "Ecommerce",
        btnText: "Buy Now",
        head: `Marketplace for Artisan to shop working tools`,
        body: `Shop required tools for your vocational activities , ranging
        from electricals to engineering tools. We have varieties
        of tools you could use for your vocational work.`,
        img: Ecommerce
    }]

    return (
        <>
            <CardWrapper>
                {cardList.map((item, idx) =>
                    <Card key={idx.toString()}>
                        <CardDisplayImage>
                            <StyledImage size={'100%'} img={item.img} />
                        </CardDisplayImage>
                        <FlexedWrapper
                            direction={'column'}
                            height={'50%'}
                            align={'flex-start'}
                            justify={'space-evenly'}
                            padding={"15px"}>
                            <CustomText
                                size={'1rem'}
                                normal
                                style={{ textTransform: "uppercase" }}
                            >
                                {item.title}
                            </CustomText>
                            <CustomText bold size={'1.5rem'} width={'75%'}>
                                {item.head}
                            </CustomText>
                            <CustomText normal
                                size={'1rem'}
                                opacity={0.4}
                                width={'90%'}>
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