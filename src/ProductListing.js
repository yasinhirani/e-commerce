import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => ({
  data: state.productData,
});
const mapDispatchToProps = (dispatch) => ({
});

const ProductListing = (props) => {
    // console.log(props.data);
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-10 py-6 gap-8 bg-gray-100 flex-grow overflow-y-auto">
      {props.data.products.map((product) => {
        return (
          <Link key={product.id} to={`/details/${product.id}`}>
          <div
            className="bg-white shadow-lg transition-all flex flex-col px-8 py-3 rounded-lg cursor-pointer h-full"
          >
            <img
              className="w-full h-full object-center object-contain"
              src={product.image}
              alt=""
            />
            <h4 className="font-semibold text-base pt-4 pb-1 line-clamp-1">
                {product.title}
            </h4>
            <div className="py-4 flex items-center justify-between">
              <p className="font-bold">${product.price}</p>
              <p>
                {product.rating.rate}/{product.rating.count}
              </p>
            </div>
          </div>
          </Link>
        );
      })}
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
export { ProductListing };
