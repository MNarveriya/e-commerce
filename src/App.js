// import { Image } from './components/Image';
// import { PdfFormate } from './components/PdfFormate';
// import { Product } from "./components/Product"
import { Routes, Route} from "react-router-dom";
import { ProductFilter } from "./components/ProductFilter";
import { ProductDetails } from "./components/ProductDetails";
import { Body } from "./components/Body";
import { useState } from "react";



function App() {
  const [cart , setCart] = useState({});
  
  console.log(cart)
  
  const ontoproduct = (count , productid) => {
    const oldcount = cart[productid] || 0;
    // console.log(oldcount)
     setCart({...cart , [productid] : oldcount + count})
    }
    
  const totalcount = Object.keys(cart).reduce((pre , current) => {
          return pre + cart[current]   
  } , 0)


  return (
    <div>
      <Body count = {totalcount}>
        <Routes>
          <Route path="/" element={<ProductFilter />} />
          <Route path="/productdetails/:id/details" element={<ProductDetails oncount = {ontoproduct}/>} />
         
        </Routes>
      </Body>
    </div>
  );
}

export default App;
