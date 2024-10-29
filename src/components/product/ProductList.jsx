import ProductItem from "./ProductItem";

export default function ProductList(){

    let allProducts=[{
        productId:101,
        productName :"Camera",
        productPrice:"$8000",
        productImage:"https://th.bing.com/th/id/OIP.PlSOPf0P4bjWd-LTLwofHgHaHa?w=250&h=250&c=8&rs=1&qlt=90&o=6rm=2&w=2500&h=2500&pid=ImgDetMain"

    },
    {
        productId:102,
        productName :"Iphone",
        productPrice:"$500",
        productImage:"https://i5.walmartimages.com/asr/199ab764-f112-4508-888c-86a1094624e8.17daf90b726900a539a8b9873fdea1f5.jpeg"
    },
    {
        productId:103,
        productName :"Laptop",
        productPrice:"$15000",
        productImage:"https://i5.walmartimages.com/asr/69056846-b8a1-497a-b4f5-6172ab54b35d.a2102861007e11c433c127f2b63b038a.jpeg"
    },
    {
        productId:104,
        productName :"Tablet",
        productPrice:"$1000",
        productImage:"https://www.bhphotovideo.com/images/images2500x2500/samsung_sm_t800ntsaxar_16gb_galaxy_tab_s_1054121.jpg"
    },
    {
        productId:105,
        productName :"Headphones",
        productPrice:"$200",
        productImage:"https://www.bhphotovideo.com/images/images1000x1000/beats_by_dr_dre_900_00063_01_studio_over_ear_headphone_998507.jpg"
    }
    ];


    let mappedAllProducts=allProducts.map((eachProduct)=>
        (
        <ProductItem key={eachProduct.productId} data={eachProduct}></ProductItem>
    ));



    return(
        <>
         <div className="container">
            <h3>List Of Products</h3>
            <div className="row">{mappedAllProducts}</div>
         </div>
        </>
    );

}
