import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Header from '../components/Home/header';
import Partners from '../components/Home/partners';
import Discover from '../components/Home/discover';
import Categories from '../components/Home/categories';
import About from '../components/Home/about';
import Footer from '../components/Footer';
import FAQs from '../components/Home/fag';

const Wrapper = styled.div`
width: 80%;
margin: 0px 10% 0px 10%;

@media (max-width: 1040px){
width: 100%;
margin: 0px;
}
`;

const HomePage = ()=>{
    return (
        <>
            <Wrapper>
                <Navbar />
                <Header />
                <Partners />
                <Discover />
                <Categories />
                <About />
                <FAQs />
                <Footer />
            </Wrapper>
        </>
    )
};

export default HomePage;