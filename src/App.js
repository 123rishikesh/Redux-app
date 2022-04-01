import Header from './containers/Header';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListing from './containers/productListing';
import ProductDetail from './containers/productDetail';
import ProductComponent from './containers/productComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDetail />} />
          <Route>404 Page Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
