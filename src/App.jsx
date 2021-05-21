import './style/global.css';
import './style/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header';
import MainValue from './components/mainValue';
import MainStatistic from './components/mainStatistic';
import MainLocation from './components/mainLocation';
import FooterRateCard from './components/footerRateCard';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainValue/>
      <MainStatistic/>
      <MainLocation/>
      <FooterRateCard/>
      <Footer/>
    </div>
  );
}

export default App;
