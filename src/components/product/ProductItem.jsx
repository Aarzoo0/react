const ProductItem = function (props) {
    return (
      <>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="card m-3">
            <img className="" src={props.data.productImage}></img>
            <div className="card-title">
              <h5>{props.data.productName}</h5>
            </div>
            <div className="card-text">
              <h6>Product ID: {props.data.productId}</h6>
            </div>
            <div className="card-text">
              <h6>Product Price: {props.data.productPrice}</h6>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default ProductItem;
