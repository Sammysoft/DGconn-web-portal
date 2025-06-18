import React from 'react';
import styled from 'styled-components';
import { CustomText, FlexedWrapper } from '../Styles';
import { LottieImage, StyledImage } from '../Elements/image';
import ShadowButton from '../Elements/shadow-button';

import MoneyLottie from '../../assets/Animations/money.json';
import SearchLottie from '../../assets/Animations/search.json';
import MapLottie from '../../assets/Animations/map.json';

import Avatar1 from '../../assets/Icons/avatar1.svg';
import Avatar2 from '../../assets/Icons/avatar2.svg';
import Avatar3 from '../../assets/Icons/avatar3.svg';
import IconButton from '../Elements/icon-button';
import PlayStoreIcon from '../../assets/Icons/gplay.svg';
import AppStoreIcon from '../../assets/Icons/appstore.svg';

const HeaderWrapper = styled.div`
width: 100%;
height: 60vh;
`

const Header = () => {
    return (
        <>
            <HeaderWrapper>
                <FlexedWrapper
                    direction={'column'}
                    justify={'center'}
                    align={'center'}
                    height={'100%'}
                >
                    <FlexedWrapper height={'fit-content'}>
                        <CustomText size={'3.5rem'} bold>Search </CustomText>
                        <LottieImage loop={true} size={'100px'} img={SearchLottie} />
                        <CustomText size={'3.5rem'} bold>, Connect</CustomText>
                        <LottieImage loop={true} size={'100px'} img={MapLottie} />
                    </FlexedWrapper>
                    <FlexedWrapper height={'fit-content'}>
                        <CustomText size={'3.5rem'} bold>Earn</CustomText>
                        <LottieImage loop={true} size={'100px'} img={MoneyLottie} />
                    </FlexedWrapper>
                    <CustomText width={'45%'} normal opacity={0.5}>Our intuitive platform connects skilled job seekers with top employers. Whether you're
                        aiming to launch your career, make a pivotal change, or discover that extraordinary opportunity.
                    </CustomText>
                    <br />
                    <FlexedWrapper height={'fit-content'}>
                        <StyledImage size={'20px'} img={Avatar1} />
                        <StyledImage size={'20px'} img={Avatar2} />
                        <StyledImage size={'20px'} img={Avatar3} />
                        <CustomText opacity={0.5} size={'0.7rem'} weight={400}>2.3K</CustomText>
                        <CustomText opacity={0.5} size={'0.6rem'}>Employees, companies</CustomText>
                    </FlexedWrapper>
                    <br />
                    <FlexedWrapper height={'fit-content'} justify={'space-evenly'} width={'20%'}>
                        <ShadowButton text={'Join Now'} />
                        <IconButton
                            width={'fit-content'}
                            item={
                                <FlexedWrapper width={'fit-content'}>
                                    <CustomText color='#FFFFFF' weight={'bold'}>Download App</CustomText>
                                    <StyledImage img={PlayStoreIcon} size={'15px'} />
                                    <StyledImage img={AppStoreIcon} size={'15px'} />
                                </FlexedWrapper>}
                        />
                    </FlexedWrapper>
                </FlexedWrapper>

            </HeaderWrapper>
        </>
    )
}

export default Header