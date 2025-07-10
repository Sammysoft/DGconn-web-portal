import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledImage } from '../Elements/image';
import IconLogo from '../../assets/Icons/secondary-logo.svg';
import { CustomText, FlexedWrapper } from '../Styles';
import { PrimaryButton } from '../Elements/button';

import UserIcon from '../../assets/Icons/user.svg';
import UsersIcon from '../../assets/Icons/users.svg';
import CloseIcon from '../../assets/Icons/cancel.svg';


import MenuIcon from '../../assets/Icons/menu.svg';


const NavbarWrapper = styled.div`
width: 90%;
margin: auto;


@media (max-width: 1040px){
height: 10vh;
}

`;

const MenuItem = styled.div`
cursor: pointer;
`;

const MobileWrapping = styled(FlexedWrapper)`

@media (max-width: 1040px){
display: none;
}
`;

const ResponsiveWrapper = styled.div`

@media (max-width: 1040px){
display: none;
}
`;

const Toggler = styled.div`
display: none;

@media (max-width: 1040px){
display: block;
}
`


const Navbar = () => {

    const menuList = [{
        item: "Home",
        icon: null,
        route: '/'
    }, {
        item: "As Freelancer",
        icon: UsersIcon,
        route: 'https://app.dgconn.com/onboard/employee'
    }, {
        item: "As Employer",
        icon: UsersIcon,
        route: 'https://app.dgconn.com/onboard/employer'
    }, {
        item: "As Artisan",
        icon: UserIcon,
        route: 'https://app.dgconn.com/onboard/employee'
    },
    {
        item: "Marketplace",
        icon: UserIcon,
        route: '/'
    }];

    const [showMenu, setShowMenu] = useState(false);




    return (
        <>
            <NavbarWrapper>
                <FlexedWrapper
                    direction={'row'}
                    align={'center'}
                    justify={'space-between'}
                >
                    <StyledImage
                        img={IconLogo}
                        size={'100px'}
                        small={'100px'}
                    />
                    <MobileWrapping
                        width={'70%'}
                        align={'flex-end'}
                        justify={'space-between'}
                    >
                        <FlexedWrapper
                            width={'70%'}
                            align={'flex-end'}
                            justify={'space-evenly'}
                        >
                            {menuList.map((menu, idx) =>
                                <MenuItem
                                    key={idx.toString()}
                                    onClick={() => window.location.href = menu.route}
                                >
                                    <FlexedWrapper>
                                        <CustomText
                                            normal
                                            style={idx >= 1 ? { fontWeight: 700, opacity: 1 } : {}}
                                        >
                                            {menu.item}
                                        </CustomText>
                                        {idx >= 1 ? <StyledImage size={'20px'} img={menu.icon} /> : ""}
                                    </FlexedWrapper>
                                </MenuItem>
                            )}
                        </FlexedWrapper>
                        <ResponsiveWrapper>
                            <PrimaryButton text={'Download App'}></PrimaryButton>
                        </ResponsiveWrapper>
                    </MobileWrapping>
                    <Toggler
                        onClick={() => { setShowMenu(!showMenu) }}
                    >
                        <StyledImage
                            img={MenuIcon}
                            size={'40px'}
                            small={'30px'}
                        />
                    </Toggler>
                </FlexedWrapper>
            </NavbarWrapper>
            {showMenu &&
                <MenuList>
                    <FlexedWrapper
                        justify={'flex-end'}
                        align={'center'}
                        width={'90%'}
                        height={'fit-content'}
                    >
                        <StyledImage
                            img={CloseIcon}
                            size={'10px'}
                            small={'20px'}
                            onClick={() => setShowMenu(!showMenu)}
                        />
                    </FlexedWrapper>
                    {menuList.map((item, id) =>
                        <CustomText
                            key={id.toString()}
                            spadding={'10px 0px 10px 0px'}
                            bold
                            onClick={() => window.location.href = item.route}
                        >
                            {item.item}
                        </CustomText>
                    )}
                </MenuList>}
        </>
    )
}

const MenuList = styled.div`
width: 100vw;
position: absolute;
height: 40vh;
padding: 20px 0px 0px 0px;
background: #ffffff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: sapce-between;
z-index: 999;
position: absolute;
top: 0px;
left: 0px;
`

export default Navbar;