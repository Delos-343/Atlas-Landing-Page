import GlobalStyle from './globalStyles';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/index';

function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<GlobalStyle />} />
        <Route path='/' element={<Navbar />} />
        <Route path='/' exact element={<HomePage />} />
        <Route path='/' exact element={<Footer />} />
      </Routes>

    </Router>
  );
}

export default App;
