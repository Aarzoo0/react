import { Link, Outlet } from "react-router-dom";

export default function HeaderTraining() {

  return (
    <>
      <nav className="navbar navbar-expand bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link to="/training/venue-list" className="nav-link text-light">
                VENUE LIST
              </Link>
            </li>
            <li className="nav-item light">
              <Link to="/training/cohort-list" className="nav-link text-light">
                COHORT LIST
              </Link>
            </li>
            

            
            
          </ul>
        </div>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
