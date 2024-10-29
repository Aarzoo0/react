import { useState } from "react";

export default function EcomAddValidation() {
  const [prodData, setProdData] = useState({
    prodId: 0,
    prodName: "",
    prodPrice: 0,
    prodImageUrl: "",
  });

  const [prodErrorData, setProdErrorData] = useState({
    prodName: true,
    prodPrice: true,
    prodImageUrl: true,
  });

  function handleFormSubmit(event) {
    event.preventDefault();

    // Validate fields before submission
    const errors = {
      prodName: prodData.prodName.trim() === "",
      prodPrice: prodData.prodPrice <= 0,
      prodImageUrl: prodData.prodImageUrl.trim() === "",
    };

    setProdErrorData(errors);

    if (!errors.prodName && !errors.prodPrice && !errors.prodImageUrl) {
      // Proceed with form submission
      console.log(prodData);
      // Reset form data if needed
      setProdData({
        prodId: 0,
        prodName: "",
        prodPrice: 0,
        prodImageUrl: "",
      });
    }
  }

  function handleFormChange(e) {
    const { name, value } = e.target;
    setProdData({ ...prodData, [name]: value });

    // Update error state based on validity
    setProdErrorData((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() !== "" && (name !== "prodPrice" || value > 0),
    }));
  }

  return (
    <div className="container m-5">
      <div className="card">
        <form onSubmit={handleFormSubmit}>
          <div className="card-header bg-success text-light">
            <h4>ADD NEW PRODUCT</h4>
          </div>
          <div className="card-body">
            <div className="form-control-group m-1">
              <h6>
                <label htmlFor="pName" className="form-label">
                  Product Name:
                </label>
              </h6>
              <input
                type="text"
                id="pName"
                placeholder="Enter Product name"
                className="form-control"
                required
                minLength={5}
                name="prodName"
                onChange={handleFormChange}
              />
              <div className="text-danger small">
                {prodErrorData.prodName ? "" : "Product name is required!"}
                <br></br>
                {prodErrorData.prodName.length > 5 ? "" : "Minimum 5 characaters are required for Product nam!"}
              </div>
            </div>
            <div className="form-control-group m-1">
              <h6>
                <label htmlFor="pCost" className="form-label">
                  Product Price:
                </label>
              </h6>
              <input
                type="number"
                id="pCost"
                placeholder="Enter Product price"
                className="form-control"
                required
                name="prodPrice"
                onChange={handleFormChange}
              />
              <div className="text-danger small">
                {prodErrorData.prodPrice ? "" : "Product price must be greater than 0!"}
              </div>
            </div>
            <div className="form-control-group m-1">
              <h6>
                <label htmlFor="pImage" className="form-label">
                  Product Image URL:
                </label>
              </h6>
              <input
                type="text"
                id="pImage"
                placeholder="Enter Product Image URL"
                className="form-control"
                name="prodImageUrl"
                onChange={handleFormChange}
              />
             
            </div>
          </div>
          <div className="card-footer bg-success text-light">
            <button type="submit" className="btn btn-light text-success">
              ADD
            </button>
            <button
              type="reset"
              className="btn btn-light text-success mx-5"
              onClick={() => {
                setProdData({
                  prodId: 0,
                  prodName: "",
                  prodPrice: 0,
                  prodImageUrl: "",
                });
                setProdErrorData({
                  prodName: true,
                  prodPrice: true,
                  prodImageUrl: true,
                });
              }}
            >
              CLEAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
