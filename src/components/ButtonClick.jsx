function ButtonClick(){
    let count=0;

    function handleClick(){
        console.log("clicked");
        console.log(count);
        count++;
    }


    return(
        <>
        <div className="container">
        <button  className="btn btn-primary" onClick={handleClick}>Click Me</button>
        
        <div  className="bg bg-success text-light">{count}</div>
        </div>
       
        </>
    );
}
export default ButtonClick;