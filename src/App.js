import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListing from './containers/productListing';
import ProductDetail from './containers/productDetail';
import CardDetails from './containers/CardDetails'
import Header from './containers/Header';
import Electronics from './containers/Menu/Electronic';
import Clothing from './containers/Menu/Clothing';
import Jewelery from './containers/Menu/Jewelery';
import ElectronicDetail from './containers/ElectronicDetail';


function App() {
  return (
    <div className="App">
      {/* <div style={{ display: 'none' }}><Header /></div> */}
      <Router>
        <Routes>
          <Route exact path='/' element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDetail />} />
          <Route path='/cart/:id' element={<CardDetails />} />
          <Route exact path='/electronics' element={<Electronics />} />
          <Route exact path='/jewelery' element={<Jewelery />} />
          <Route exact path='/clothing' element={<Clothing />} />
          <Route exact path='/electronic/:id' element={<ElectronicDetail />} />
          <Route>404 Page Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
