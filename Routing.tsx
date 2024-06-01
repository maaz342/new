import React from 'react'
import  { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './screens/Home'
import Contact from './screens/Contact'
import Product from './screens/Product'
const Routing = () => {
return (<>

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Product" element={<Product />} />

    </Routes>
    </BrowserRouter>
</>
  )
}

export default Routing