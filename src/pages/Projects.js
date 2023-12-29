import React from 'react';
import Header from '../components/Header';
import Experiences from '../components/Experiences';
import Footer from '../components/Footer';
import Alert from '../components/Alert';
import { Helmet } from 'react-helmet-async';

const Projects = () => {
  return (
    <div>
      <Helmet>
        {/* Add Google Tag Manager script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZMBW8PPSR1"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZMBW8PPSR1');
          `}
        </script>
      </Helmet>
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
