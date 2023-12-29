import '../App.css';
import Hero from '../components/Hero';
import NewHero from '../components/NewHero';
import Header from '../components/Header';
import ExperienceTimeline from '../components/ExperienceTimeline';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Alert from '../components/Alert';
import { Helmet } from 'react-helmet-async';

function HomePage() {
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
      <div className="App">
        <Header />

        <Hero />
        <NewHero />
        <ExperienceTimeline />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
