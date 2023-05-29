import './App.css';
// import Navbar from './components/navbar/navBar';
import Footer from './components/footer';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/*the navbar was hidden in order not to duplicate it and set it correctly in the approuter. */}
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
