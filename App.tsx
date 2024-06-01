import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from './component/API';

import './App.css';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import Routing from './component/Routing';
function App() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setproducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  return (
    <div>
      <h1 className='text-center'>Products</h1>
 {/* <API data={products} />  */}
      <Routing/>

    </div>
  );
}
export default App;