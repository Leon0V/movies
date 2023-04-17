import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter/>
      <Footer/>
    </div>
  );
}

export default App;
