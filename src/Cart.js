import React, { useState } from "react";
import { connect } from "react-redux";
import { removeFromCart } from './actions/action';

const mapStateToProps = (state) => ({
  data: state.productData,
});
const mapDispatchToProps = (dispatch) => ({
    removeFromCartHandler: data => {dispatch(removeFromCart(data))}
});

const Cart = (props) => {
  console.log(props.data.cart);
  const [subTotal,setSubTotal] = useState(0);
  const cart = props.data.cart;
  return (
    <div className="px-10 py-5 w-full h-full bg-gray-100 flex-grow overflow-y-auto">
      <h1 className="text-2xl font-bold">Your cart</h1>
      {props.data.cart.map((item, id) => {
        return (
          <div key={item.id} className="flex flex-col sm:flex-row items-center gap-8 justify-between p-3 md:p-0 mt-6 bg-white rounded-lg overflow-hidden">
            <div className="flex items-center justify-between md:justify-start gap-8 w-full">
              <figure className="w-24 h-full">
                <img src={item.image} />
              </figure>
              <div>
                <p>{item.title}</p>
                <p className="pt-6">${item.price}</p>
              </div>
            </div>
            <button onClick={() => props.removeFromCartHandler(id)} className="bg-red-500 px-3 py-1 text-white rounded mx-6">
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
export { Cart };
