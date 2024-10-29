import { useState } from "react";

export default function Cohortlist(){

    const[allCohorts, setAllCohort]=useState([
        {
            cohortID:201,
            cohortSize:26,
            cohortVenueId:0,
            cohortStack:"JAVA FULL STACK",
            cohortStartDate:"30-09-2024",
            cohortDurationWeeks:6,
            cohortPOC:"Poongs",
            cohortInstructor:"NQ"
           
        }
    ]);

    let mappedAllCohort = allCohorts.map((eachCohort) => (
        <tr key={eachCohort.cohortID}>
          <td>{eachCohort.cohortID}</td>
          <td>{eachCohort.cohortSize}</td>
          <td>{eachCohort.cohortVenueId}</td>
          <td>{eachCohort.cohortStack}</td>
          <td>{eachCohort.cohortStartDate}</td>
          <td>{eachCohort.cohortDurationWeeks}</td>
          <td>{eachCohort.cohortPOC}</td>
          <td>{eachCohort.cohortInstructor}</td>
          <td>
            <button
              onClick={() => handleViewCohort(eachCohort.cohortID)}
              className="btn btn-warning"
            >
              VIEW
            </button>
          </td>
          <td>
            <button
              onClick={() => handleEditCohort(eachCohort.cohortID)}
              className="btn btn-primary"
            >
              EDIT
            </button>
          </td>
          <td>
            <button
              onClick={() => handleDeleteCohort(eachCohort.cohortID)}
              className="btn btn-danger"
            >
              DELETE
            </button>
          </td>
        </tr>
      ));
    
      function handleViewCohort(cohortID) {
        console.log(cohortID);
      }
      function handleEditCohort(cohortID) {
        console.log(cohortID);
      }
      function handleDeleteCohort(cohortID) {
        console.log(cohortID);
      }
    return(
        <>
        <div className="container m-5">
        <h3>LIST OF COHORTS</h3>
        <div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th>ID</th>
                <th>SIZE</th>
                <th>VENUE</th>
                <th>STACK </th>
                <th>START DATE</th>
                <th>DURATION WEEK</th>
                <th>POC</th>
                <th>INSTRUCTOR</th>
              </tr>
            </thead>
            <tbody>{mappedAllCohort}</tbody>
          </table>
        </div>
      </div>
        </>
    );
}