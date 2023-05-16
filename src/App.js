import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Product from './pages/Products';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/products/:id' element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
