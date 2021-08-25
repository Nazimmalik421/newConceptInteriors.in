import './App.scss';
import Navbar from './navbar/Navbar';
import Main from './main/Main';
import Features from './features/Features';
import Reviews from './review/Review';
import Services from './services/Services';
import OurWork from './our-work/OurWork';
import AboutUs from './about-us/AboutUs';
import Footer from './footer/Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Main />
      <Features />
      <Reviews />
      <Services />
      <OurWork />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
