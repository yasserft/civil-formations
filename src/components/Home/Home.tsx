import React from 'react';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import About from '../About/About';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Header />
      <About/>
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
