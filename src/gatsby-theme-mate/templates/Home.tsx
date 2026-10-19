import React from 'react';
import Layout from 'gatsby-theme-mate/src/components/Layout';
import Header from 'gatsby-theme-mate/src/components/Header';
import Landing from 'gatsby-theme-mate/src/sections/Landing';
import About from 'gatsby-theme-mate/src/sections/About';
import Projects from 'gatsby-theme-mate/src/sections/Projects';
import Footer from 'gatsby-theme-mate/src/components/Footer';

const Home = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Projects />
    <Footer />
  </Layout>
);

export default Home;
