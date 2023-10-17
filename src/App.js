import './App.css';
import Footer from './components/Footer/Footer';
import Footertext from './components/Footertext/Footertext';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Offers from './components/Offers/Offers';
import Promo from './components/Promo/Promo';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Offers />
      <Promo />
      <Footertext />
      <Footer />
    </div>
  );
}

export default App;
