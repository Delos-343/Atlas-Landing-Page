import GlobalStyle from './globalStyles';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<GlobalStyle />} />
        <Route path='/' element={<Navbar />} />
        <Route path='/' exact component={HomePage} />
        <Route path='/' element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
