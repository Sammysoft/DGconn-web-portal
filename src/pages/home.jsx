import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Header from '../components/Home/header';
import Partners from '../components/Home/partners';
import Discover from '../components/Home/discover';
import Categories from '../components/Home/categories';
import About from '../components/Home/about';
import Footer from '../components/Footer';

const Wrapper = styled.div`
width: 100%;
background-color: #ffffff;
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
                <Footer />
            </Wrapper>
        </>
    )
};

export default HomePage;