import { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts } from "./actions/action";
import axios from "axios";
import Header from './Header';
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import ProductListing from "./ProductListing";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

const mapStateToProps = (state) => ({
  data: state.productData,
});
const mapDispatchToProps = (dispatch) => ({
  addProductHandler: (data) => {
    dispatch(getProducts(data));
  },
});

function App(props) {
  // console.log(props.data.products);

  useEffect(async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    props.addProductHandler(res.data);
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
    <Header />
    <Routes>
      <Route path="/" element={<ProductListing />}></Route>
      <Route path="/details/:id" element={<ProductDetails />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
export { App };
