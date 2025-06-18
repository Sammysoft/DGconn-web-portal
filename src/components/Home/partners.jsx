import React from 'react';
import styled from 'styled-components';
import { CustomText, FlexedWrapper } from '../Styles';
import { StyledImage } from '../Elements/image';

import Cowry from "../../assets/Icons/cowrywise.svg";
import Cravings from '../../assets/Icons/carvings.svg';
import Flutterwave from '../../assets/Icons/flutterwave.svg';
import DDesigner from '../../assets/Icons/deardesigner.svg';
import Eden from '../../assets/Icons/eden.svg';
import GigaLayer from '../../assets/Icons/gigalayer.svg';

const PartnersWrapper = styled.div`
    width: 100%;
`;

const Partners = () => {
    return (
        <>
            <PartnersWrapper>
                <FlexedWrapper direction={'column'}>
                    <CustomText opacity={0.4} size={'1rem'} >
                        Trusted by world best organizations
                    </CustomText>
                    <FlexedWrapper justify={'space-evenly'} align={'center'}>
                        <StyledImage size={'130px'} img={Cowry} />
                        <StyledImage size={'130px'} img={Cravings} />
                        <StyledImage size={'130px'} img={Flutterwave} />
                        <StyledImage size={'130px'} img={DDesigner} />
                        <StyledImage size={'70px'} img={Eden} />
                        <StyledImage size={'130px'} img={GigaLayer} />
                    </FlexedWrapper>
                </FlexedWrapper>
            </PartnersWrapper>
        </>
    )
}

export default Partners;