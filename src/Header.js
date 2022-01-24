import React from "react";
import Cart from './shopping-cart.png';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => ({
  data: state.productData,
});
const mapDispatchToProps = (dispatch) => ({
});

const Header = (props) => {
  return (
    <div className="header px-10 py-4 flex justify-between items-center">
      <Link to={`/`}><h1 className="text-lg md:text-2xl font-semibold">Fake E-Commerce App</h1></Link>
      <Link to={`/cart`}>
        <div className="cart relative">
          <span className="bg-sky-300 px-2 py-1 py rounded-full text-xs absolute left-5 -top-2">{props.data.cart.length}</span>
          <img className="w-8" src={Cart} />
        </div>
      </Link>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
export {Header};
