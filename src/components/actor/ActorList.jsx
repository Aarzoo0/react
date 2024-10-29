//parent 

import ActorItem from "./ActorItem";

export default function ActorList(){
    let allAActors=[
        {
            actorId:101,
            actorFirstName:"Aarzoo",
            actorLastName:"Ashfaq"
        },
        {
            actorId:102,
            actorFirstName:"Alia",
            actorLastName:"Bhatt"
        },
        {
            actorId:103,
            actorFirstName:"Ranbir",
            actorLastName:"Kapoor"
        }

    ];

    let mappedAllActors=allAActors.map((eachActor)=>
        (
        <ActorItem key={eachActor} data={eachActor}></ActorItem>
    ));

    return(
        <>
        <h3>List Of Actors </h3>

        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {mappedAllActors}
            </tbody>
        </table>
        </>
    );

}