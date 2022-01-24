import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from './actions/action';

const mapStateToProps = (state) => ({
  data: state.productData,
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: data => {dispatch(addToCart(data))}
});

const ProductDetails = (props) => {
    // console.log(props.data);
    const {id} = useParams();
    const [details,setDetails] = useState(props.data.products[id-1]);
  return (
    <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-center p-10 flex-grow overflow-y-auto">
        <figure className="flex justify-center">
            <img className="w-3/4" src={details.image} />
        </figure>
        <div>
            <h1 className="font-bold text-2xl">{details.title}</h1>
            <p className="bg-sky-500 text-white inline-block px-3 py-1 my-6 tag">${details.price}</p>
            <p className="font-semibold w-full md:w-3/4">{details.description}</p>
            <button onClick={() => props.addToCartHandler(details)} className="bg-red-500 my-6 px-3 py-2 rounded-md text-white">Add to Cart</button>
        </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
export { ProductDetails };
