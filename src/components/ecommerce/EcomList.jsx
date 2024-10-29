import { useState } from "react";

export default function EcomList() {
  const [cart, setCart] = useState([]);
  const [wishlist, setwishlist] = useState([]);

  const allProducts = [
    {
      prodId: 101,
      prodName: "Laptop",
      prodCost: 40000,
      prodImage:
        "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
    },
    {
      prodId: 102,
      prodName: "Mobile",
      prodCost: 30000,
      prodImage:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8fHww",
    },
    {
      prodId: 103,
      prodName: "Tablet",
      prodCost: 20000,
      prodImage:
        "https://plus.unsplash.com/premium_photo-1673968280716-ca0c00af8a39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGV0fGVufDB8fDB8fHww",
    },
    {
      prodId: 104,
      prodName: "Watch",
      prodCost: 30000,
      prodImage:
        "https://media.istockphoto.com/id/1189984324/photo/smart-watch-for-branding-and-mock-up-3d-render-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=obd89zfN8JUq7fiQdLoI7KCl-_N3CwpvLur3D5s-zZs=",
    },
    {
      prodId: 105,
      prodName: "Desktop",
      prodCost: 25000,
      prodImage:
        "https://plus.unsplash.com/premium_photo-1683326528070-4ebec9188ae1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVza3RvcHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  function addToCart(prodID) {
    let fetchedProduct = allProducts.find(
      (product) => product.prodId == prodID
    );

    let newId = cart.length == 0 ? 1 : cart[cart.length - 1].cartId + 1;

    setCart([...cart, { ...fetchedProduct, cartId: newId }]);
  }
  function addToWishlist(prodID) {
    let fetchedProduct = allProducts.find(
      (product) => product.prodId == prodID
    );
    let newId =
      wishlist.length === 0 ? 1 : wishlist[wishlist.length - 1].wishlistId + 1;
    setwishlist([...wishlist, { ...fetchedProduct, wishlistId: newId }]);
  }

  function deleteCartItem(cartID) {
    let filteredCart = cart.filter((item) => item.cartId != cartID);
    setCart(filteredCart);
  }
  function deleteWishlistItem(cartID) {
    let filteredCart = cart.filter((item) => item.cartId != cartID);
    setCart(filteredCart);
  }

  const mappedAllProducts = allProducts.map((product) => (
    <div className="col-sm-12 col-md-6 col-lg-3" key={product.prodId}>
      <div className="card m-1">
        <img
          className="card-img-top"
          src={product.prodImage}
          alt={product.prodName}
        />
        <div className="card-body">
          <h5 className="card-title">{product.prodName}</h5>
          <p className="card-text">Product ID: {product.prodId}</p>
          <p className="card-text">Product Price: RS. {product.prodCost}</p>
          <button
            className="btn btn-primary m-1"
            onClick={() => addToCart(product.prodId)}
          >
          🛒
          </button>
          <button
              className="btn btn-primary "
              onClick={() => addToWishlist(product.prodId)}
            >
            🤍
            </button>

          
        </div>
      </div>
    </div>
  ));

  const mappedCart = cart.map((item) => (
    <tr key={item.cartId}>
      <td>{item.cartId}</td> 
      <td>{item.prodId}</td>
      <td>{item.prodName}</td>
      <td>RS. {item.prodCost}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => deleteCartItem(item.cartId)}
        >
        🗑️
        </button>
      </td>
    </tr>
  ));

  const mappedWishlist = wishlist.map((item) => (
    <tr key={item.wishlistId}>
      <td>{item.wishlistId}</td>
      <td>{item.prodId}</td>
      <td>{item.prodName}</td>
      <td>RS. {item.prodCost}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => deleteWishlistItem(item.wishlistId)}
        >
          🗑️
        </button>
      </td>
    </tr>
  ));

  const totalCost = cart.reduce((sum, item) => sum + item.prodCost, 0);

  return (
    <>
      <div className="container m-3">
        <div className="row ">
          <div className="col-9">
            <h3>List of Products</h3>
            <div className="row">{mappedAllProducts}</div>
          </div>

          <div className="col-3">
            <h3>CART</h3>
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>PROD ID</th>
                  <th>NAME</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>{mappedCart}</tbody>
            </table>
            <div>
              {cart.length == 0 ? (
                "EMPTY CART 😕"
              ) : (
                <div>
                  <p>TOTAL ITEMS: {cart.length}</p>
                  <p>TOTAL COST: RS. {totalCost}</p>
                </div>
              )}
             <hr />
               <div className="col-3 ">
            <h4 >WISHLIST</h4>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>PROD ID</th>
                  <th>NAME</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>{mappedWishlist}</tbody>
            </table>
            <div>
              {wishlist.length == 0 ? (
                "EMPTY WISHLIST 😕"
              ) : (
                <div>
                  <p>TOTAL ITEMS: {wishlist.length}</p>
                </div>
              )}
            </div>
          </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
}
