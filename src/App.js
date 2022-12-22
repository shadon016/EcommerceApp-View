import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/pages/Nav';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="">
      <Nav />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
