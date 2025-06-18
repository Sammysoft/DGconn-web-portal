import React from 'react';
import styled from 'styled-components';
import { StyledImage } from '../Elements/image';
import IconLogo from '../../assets/Icons/icon-logo.svg';
import { CustomText, FlexedWrapper } from '../Styles';
import { PrimaryButton } from '../Elements/button';

import UserIcon from '../../assets/Icons/user.svg';
import UsersIcon from '../../assets/Icons/users.svg';


const NavbarWrapper = styled.div`
width: 90%;
margin: auto;
`;

const MenuItem = styled.div`
cursor: pointer;
`


const Navbar = () => {
    const menuList = [{
        item: "Careers",
        icon: null,
        route: '/'
    }, {
        item: "About",
        icon: null,
        route: '/'
    }, {
        item: "FAQs",
        icon: null,
        route: '/'
    }, {
        item: "As Employer",
        icon: UsersIcon,
        route: '/'
    }, {
        item: "As Employee",
        icon: UserIcon,
        route: '/'
    }]
    return (
        <>
            <NavbarWrapper>
                <FlexedWrapper direction={'row'} align={'center'} justify={'space-between'}>
                    <StyledImage img={IconLogo} size={'40px'} />
                    <FlexedWrapper width={'60%'} align={'flex-end'} justify={'space-between'}>
                    <FlexedWrapper width={'70%'} align={'flex-end'} justify={'space-evenly'}>
                        {menuList.map((menu, idx) =>
                            <MenuItem key={idx.toString()}>
                                <FlexedWrapper>
                                    <CustomText normal style={idx >= 3 ? { fontWeight: 700, opacity: 1 } : {}}>
                                        {menu.item}
                                    </CustomText>
                                    {idx >= 3 ? <StyledImage size={'20px'} img={menu.icon} /> : ""}
                                </FlexedWrapper>
                            </MenuItem>
                        )}
                    </FlexedWrapper>
                    <PrimaryButton text={'Download App'}></PrimaryButton>
                    </FlexedWrapper>
                </FlexedWrapper>
            </NavbarWrapper>
        </>
    )
}

export default Navbar;