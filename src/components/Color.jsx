function Color() {
  let allColors = ["RED ", "BLUE ", "GREEN"];
  let mappedColors = allColors.map((eachColor) => <li key={eachColor}>{eachColor}</li>);

  return (
    <>
      <h3>Color component</h3>
      <h5>{allColors}</h5>
      <h5>Listing all colors</h5>
      <ul>
        {allColors.map((eachColor) => (
          <li key={eachColor}>{eachColor}</li>
        ))}
        <h5>Neater way of Listing all colors</h5>
       <ol> {mappedColors}</ol>
      </ul>
    </>
  );
}
export default Color;
