import Navbar from '../../components/navBar/navBar';
import AboutMe from '../../components/aboutMe/AboutMe';
import Skills from '../../components/skills/Skills';
import Projects from '../../components/projects/Projects';
import ContactMe from '../../components/contact/ContactMe';
import Footer from '../../components/footer/footer';
import Body from '../../components/body/body';

export default function Portfolio() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
      

    </div>
  );
}