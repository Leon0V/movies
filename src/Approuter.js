import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Details from './pages/details/details';
import Plans from './pages/plans/plans';
import NotFound from './pages/error/error';

function AppRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/details/:movie' element={<Details />} />
          <Route path='/plans' element={<Plans />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;
