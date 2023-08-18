import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import GitHub from './pages/Github';

// routes
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/register"
              element={<Register />}
            />
            <Route
              path="/github"
              element={<GitHub />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
