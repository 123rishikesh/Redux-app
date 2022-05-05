import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListing from './containers/productListing';
import ProductDetail from './containers/productDetail';
import CardDetails from './containers/CardDetails'
import Header from './containers/Header';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';


function App() {
  return (
    <div className="App">
      <div style={{display: 'none'}}><Header/></div>
      <Router>
        <Routes>
          <Route exact path='/' element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDetail />} />
          <Route path='/cart/:id' element={<CardDetails/>}/>
          <Route>404 Page Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
