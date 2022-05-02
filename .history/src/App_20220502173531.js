import GlobalStyle from './globalStyles';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/index';

function App() {
  return (
    <BrowserRouter>

      <GlobalStyle />
      <Navbar />

      <Routes>
        <Route path='/' component={HomePage} />
      </Routes>

      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
