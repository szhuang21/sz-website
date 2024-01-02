import React from 'react';
import Header from '../components/Header';
import Experiences from '../components/Experiences';
import Footer from '../components/Footer';
import Alert from '../components/Alert';

const Projects = () => {
  return (
    <div>
      <Alert text="🚧 mobile view under construction 🚧" />
      <Header />
      <div className="pl-20 pt-10">
        <Experiences />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
