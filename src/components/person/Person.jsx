function Person() {
  let allPerson = [
    {
      personId: 101,
      personFirstName: "Aarzoo",
      personLastName: "Ashfaq",
    },
    {
      personId: 102,
      personFirstName: "Mustafa",
      personLastName: "Ahmed",
    },
    {
      personId: 103,
      personFirstName: "Sharjeena",
      personLastName: "Izhar",
    },
  ];
  let mappedAllPersons = allPerson.map((eachPerson) => (
    <PersonProps key={eachPerson}></PersonProps>
  ));

  

  return (
    <>
      <h3>Person component</h3>

      <ol>mappedAllPersons</ol>
   
    </>
  );
}
export default Person;
