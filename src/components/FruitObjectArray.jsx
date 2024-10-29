export default function FruitObjectArray(){
    let allFruits=[
        {
            fId:201,
            fName:"Apple",
            fEmoji:"🍎"
        },
        {
            fId:202,
            fName:"Banana",
            fEmoji:"🍌"
        },
        {
            fId:203,
            fName:"Grapes",
            fEmoji:"🍇"
        }
    ];

    let mappedFruits=allFruits.map((eachFruit)=>(<li key={eachFruit}>{eachFruit.fEmoji},{eachFruit.fId},{eachFruit.fName}</li>))
    return(
        <>
        <h2>Fruit object array component</h2>
        <h4>List OF Fruits</h4>
        <ul>{mappedFruits}</ul>
        </>
    );
}
