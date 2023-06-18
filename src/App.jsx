import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Shop from "./pages/Shop"
import ProductDetail from "./pages/ProductDetail"
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:product" element={<ProductDetail/>}/>
      <Route path="/cart" element={<Cart />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  )
}

export default App