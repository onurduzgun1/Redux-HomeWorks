import './css/main.css';

//Components
import Header from './components/Header';
import Cards from './components/Cards';
import Dropdown from './components/Dropdown';
import Chart from './components/Chart';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <Cards />
      <section>
        <Dropdown />
        <Chart />
      </section>
      <Footer />
    </div>
  );
}

export default App;