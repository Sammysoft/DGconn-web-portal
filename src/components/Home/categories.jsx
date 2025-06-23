import styled from 'styled-components';
import React from 'react';
import { CustomText, FlexedWrapper } from '../Styles';

import Cat1 from '../../assets/Icons/cat-icons/cat1.svg';
import Cat2 from '../../assets/Icons/cat-icons/cat2.svg';
import Cat3 from '../../assets/Icons/cat-icons/cat3.svg';
import Cat4 from '../../assets/Icons/cat-icons/cat4.svg';
import Cat5 from '../../assets/Icons/cat-icons/cat5.svg';
import Cat6 from '../../assets/Icons/cat-icons/cat6.svg';

import UpwardIcon from '../../assets/Icons/uparrow.svg';
import { StyledImage } from '../Elements/image';


const Wrapper = styled.div`
width: 90%;
margin: auto;
padding: 10vh 0px 10vh 0px;
`;

const CardWrapper = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
height: fit-content;
gap: 1%;

@media (max-width: 1040px){
flex-direction: column;
}
`;

const CardItem = styled.div`
width: 30%;
border-radius: 20px;
background-color: ${(props) => props.bgColor ? props.bgColor : ""};
height: 25vh;
margin: 2vh 0px 0px 0px;
padding: 15px 10px 15px 10px;
cursor: pointer;

@media (max-width: 1040px){
width: 100%;
}
`;

const LearnMoreBtn = styled.div`
border-bottom: 2px solid #000000;
font-weight: 600px;
text-align: center;
font-size: 0.8rem;
`

const Categories = () => {

    const categoryList = [{
        title: `Web & Mobile App Development`,
        body: `Build your website and custom
        by hiring a top product designer
        and app developer from us
        seamlessly.`,
        bgColor: "#07A7371F",
        icon: Cat3
    },
    {
        title: `Product Design and Creative`,
        body: `Design sleek User interface for
        your startup product with the help
        of our top freelancer with designs
        skills.`,
        bgColor: "#1A4BC11F",
        icon: Cat1
    },
    {
        title: `Copywriting and Translating`,
        body: `Build your website and custom
        by hiring a top product designer
        and app developer from us
        seamlessly.`,
        bgColor: "#DFB61D1F",
        icon: Cat6
    },
    {
        title: `Sales Representative and Marketing`,
        body: `Build your website and custom
        by hiring a top product designer
        and app developer from us
        seamlessly.`,
        bgColor: "#A707911F",
        icon: Cat2
    },
    {
        title: `Admin and Support Service`,
        body: `Build your website and custom
        by hiring a top product designer
        and app developer from us
        seamlessly.`,
        bgColor: "#F24E1E1F",
        icon: Cat5
    },
    {
        title: `Finance and Accounting Manager`,
        body: `Build your website and custom
        by hiring a top product designer
        and app developer from us
        seamlessly.`,
        bgColor: "#07A7371F",
        icon: Cat4
    }];


    return (
        <>
            <Wrapper>
                <FlexedWrapper justify={'flex-start'}>
                    <CustomText bold size={'2.5rem'} small={'1.5rem'}>
                        Popular
                    </CustomText>
                    <CustomText
                        opacity={0.5}
                        size={'2.5rem'}
                        small={'1.5rem'}
                        weight={700}
                    >
                        {" "}Categories</CustomText>
                </FlexedWrapper>

                <CardWrapper>
                    {categoryList.map((cat, idx) =>
                        <CardItem
                            key={idx.toString()}
                            bgColor={cat.bgColor}
                        >
                            <FlexedWrapper
                                width={'80%'}
                                height={'80%'}
                                justify={'space-between'}
                                align={'flex-start'}
                            >
                                <StyledImage size={'30px'} img={cat.icon} small={'40px'} />
                                <FlexedWrapper
                                    direction={'column'}
                                    width={'85%'}
                                    justify={'space-between'}
                                    align={'flex-start'}
                                >
                                    <CustomText
                                        weight={500}
                                        size={'1.3rem'}
                                        small={'1.5rem'}
                                        width={"95%"}>
                                        {cat.title}
                                    </CustomText>
                                    <CustomText
                                        size={'1rem'}
                                        small={'0.8rem'}
                                        weight={300}
                                        width={'95%'}
                                        opacity={0.5}
                                    >
                                        {cat.body}
                                    </CustomText>

                                    <FlexedWrapper
                                        width={'45%'}
                                        height={'fit-content'}
                                        align={'flex-start'}
                                        justify={'flex-start'}
                                    >
                                        <LearnMoreBtn>Learn More</LearnMoreBtn>
                                        <StyledImage
                                            size={'20px'}
                                            small={'20px'}
                                            img={UpwardIcon}
                                        />
                                    </FlexedWrapper>
                                </FlexedWrapper>
                            </FlexedWrapper>
                        </CardItem>
                    )}
                </CardWrapper>
            </Wrapper>
        </>
    )
}

export default Categories;