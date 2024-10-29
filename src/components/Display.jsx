import DisplayProps from "./DisplayProps";


function Display(){

    let name="mark";

    let allColors=["RED ","BLUE "," GREEN"];

    return(
    <>
        <h3>Display componenet</h3>
        <p> hello aarzoo </p>
        <p>Hello {name}</p>
        <p>Colors: {allColors}</p>
        <DisplayProps name="Smith" greeting="Good Morning"></DisplayProps>
        <DisplayProps name="Raj" greeting="Namaste!!"></DisplayProps>


    </>
       
    );
    
}

export default Display;