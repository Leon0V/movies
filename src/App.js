import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Approuter from './Approuter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Approuter/>
      <Footer/>
    </div>
  );
}

export default App;
