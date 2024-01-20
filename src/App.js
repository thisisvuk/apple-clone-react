// import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Fitness from './components/Fitness';
import Iphone15Pro from './components/Iphone15Pro';
import Iphone15 from './components/Iphone15';
import Navbar from './components/Navbar';
import TradeIn from './components/TradeIn';
import VisionPro from './components/VisionPro';
import WatchSeries9 from './components/WatchSeries9';
import WatchUltra2 from './components/WatchUltra2';
import WatchUnity from './components/WatchUnity';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Navbar />  
    <VisionPro />
    <Iphone15Pro />
    <WatchUnity />
    <WatchSeries9 />
    <WatchUltra2 />
    <Fitness />
    <Iphone15 />
    <Card />
    <TradeIn />
    <Footer />
    </div>
  );
}

export default App;
