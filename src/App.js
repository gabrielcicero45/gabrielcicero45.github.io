
import { Banner } from './components/Banner/Banner';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';




import './index.scss';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Contact } from './components/Contact/Contact';


function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>



  );
}


export default App;
