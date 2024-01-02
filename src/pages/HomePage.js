import '../App.css';
import Hero from '../components/Hero';
import NewHero from '../components/NewHero';
import Header from '../components/Header';
import ExperienceTimeline from '../components/ExperienceTimeline';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Alert from '../components/Alert';

function HomePage() {
  return (
    <div>
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
