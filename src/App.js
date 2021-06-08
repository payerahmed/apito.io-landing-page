import logo from './logo.svg';
import './App.css';
import Nav from './component/nav/Nav';
import Home from './component/home/Home';
import BuildApi from './component/buildapi/BuildApi';
import HowWorks from './component/howWorks/HowWorks';
import Query from './component/query/Query';
import Usages from './component/usages/Usages';
import Client from './component/client/Client';
import Integration from './component/integration/Integration';
import Footer from './component/footer/Footer';
function App() {
  return (
    <div className='App'>
      <Nav />
      <Home />
      <BuildApi />
      <HowWorks />
      <Query />
      <Usages />
      <Client />
      <Integration />
      <Footer />
    </div>
  );
}

export default App;
