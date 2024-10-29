import { useState } from "react";

export default function EcomEdit() {
  const [prodData, setProdData] = useState({
    prodId: 0,
    prodName: "",
    prodPrice: 0,
    prodImageUrl: "",
  });

  function handleFormSubmit(event){
    //1.prevent default nature of submit button
    event.preventDefault();
    //2. console.log the form data which is in state var prodData
    //later this data will be sent to backend application
    console.log(prodData);
  }

  return (
    <>
      <div className="container m-5">
        <div className="card">
          <form  onSubmit={(e)=>handleFormSubmit(e)}>
            <div className="card-header bg-primary text-light">
              <h4>EDIT A PRODUCT</h4>
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
                  onChange={(e) =>
                    setProdData({ ...prodData, prodName: e.target.value })
                  }
                ></input>
              </div>
              <div className="form-control-group m-1">
                <h6>
                <label htmlFor="pCost" className="form-label">
                  Product Price:
                </label>
                </h6>
                <input
                  type="text"
                  id="pCost"
                  placeholder="Enter Product price"
                  className="form-control"
                  onChange={(e) =>
                    setProdData({ ...prodData, prodPrice: e.target.value })
                  }
                ></input>
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
                  placeholder="Enter Product Image url"
                  className="form-control"
                  onChange={(e) =>
                    setProdData({ ...prodData, prodImageUrl: e.target.value })
                  }
                ></input>
              </div>
            </div>
            <div className="card-footer  bg-primary text-light ">
              <button type="submit"
               className="btn btn-light text-primary "
              >
                ADD
              </button>
              <button type="reset" 
              className="btn btn-light text-primary mx-5">
                CLEAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
