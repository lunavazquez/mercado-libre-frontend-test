import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import ProductDetail from './views/ProductDetail';
import ProductList from './views/ProductList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ProductList />} />
        <Route path="/items/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
