function Person(){
    let onePerson=[{
        personId:101,
        personFirstName:"Aarzoo",
        personLastName:"Ashfaq"
    }];
    return(
        <>
        <h3>Person Component</h3>
        <h5>Person id : {onePerson.personId}</h5>
        <h5>Person First Name: {onePerson.personFirstName}</h5>
        <h5>Person Last Name: {onePerson.personLastName}</h5>
         
        </>
    );
}
export default Person;