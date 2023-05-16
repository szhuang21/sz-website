import "../App.css";
import Hero from "../components/Hero"
import Header from "../components/Header";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
function HomePage() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ExperienceTimeline />
      <Projects />
      <Footer/>
    </div>
  );
}

export default HomePage;
