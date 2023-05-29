import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Details from './pages/details/details';
import Plans from './pages/plans/plans';
import NotFound from './pages/error/error';
import Navbar from './components/navbar/navBar';

function AppRouter() {
  return (
    <div>
      <Router>
        <Navbar />
        {/* the Navbar had to be provided in the router in order to work correctly with it's pathing when hiding its itens */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/register' element={<Plans />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;
