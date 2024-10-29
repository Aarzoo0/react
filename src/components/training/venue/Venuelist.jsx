import { useState } from "react";

export default function Venuelist() {
  const [allVenues, setAllVenues] = useState([
    {
      venueID: 101,
      venueName: "Pallavas",
      venueSeater: 30,
      isVenueAc: true,
      venueCity: "TVM",
      venueState: "Kerala",
    },
  ]);

  let mappedAllVenue = allVenues.map((eachVenue) => (
    <tr key={eachVenue.venueID}>
      <td>{eachVenue.venueID}</td>
      <td>{eachVenue.venueName}</td>
      <td>{eachVenue.venueSeater}</td>
      <td>{eachVenue.isVenueAc ? "YES" : "NO"}</td>
      <td>{eachVenue.venueCity}</td>
      <td>{eachVenue.venueState}</td>
      <td>
        <button
          onClick={() => handleViewVenue(eachVenue.venueID)}
          className="btn btn-warning"
        >
          VIEW
        </button>
      </td>
      <td>
        <button
          onClick={() => handleEditVenue(eachVenue.venueID)}
          className="btn btn-primary"
        >
          EDIT
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDeleteVenue(eachVenue.venueID)}
          className="btn btn-danger"
        >
          DELETE
        </button>
      </td>
    </tr>
  ));

  function handleViewVenue(venueID) {
    console.log(venueID);
  }
  function handleEditVenue(venueID) {
    console.log(venueID);
  }
  function handleDeleteVenue(venueID) {
    console.log(venueID);
  }

  return (
    <>
      <div className="container m-5">
        <h3>LIST OF VENUES</h3>
        <div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>SEATER </th>
                <th>AC</th>
                <th>CITY</th>
                <th>STATE</th>
              </tr>
            </thead>
            <tbody>{mappedAllVenue}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}
