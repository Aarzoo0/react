function Number(){
    let evenNumbers=[2,4,6,8,10];
    let mappedEvenNumbers = evenNumbers.map((eachENum) => <li>{eachENum}</li>);

    let oddNumbers=[1,3,5,7,9];
    let mappedOddNumbers = oddNumbers.map((eachONum) => <li>{eachONum}</li>);
   
return(
    <>
    <h3>Listing Even numbers</h3>
    <h2> {mappedEvenNumbers}</h2>
    <h3>Listing Odd numbers</h3>
    <h2>{mappedOddNumbers}</h2>
    <h3>Listing all numbers</h3>
    <h2>{mappedOddNumbers}{mappedEvenNumbers}</h2>
  
  
    </>
);
}
export default Number;