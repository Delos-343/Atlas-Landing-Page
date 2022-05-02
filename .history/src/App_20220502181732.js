import GlobalStyle from './globalStyles';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/index';

function App() {
  return (
    <Router>

    

      <Routes>
        <GlobalStyle />
        <Navbar />
        <Route path='/' exact component={<HomePage />} />
        <Footer />
      </Routes>

    </Router>
  );
}

export default App;
