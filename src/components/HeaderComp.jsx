import { Link } from "react-router-dom";

export default function HeaderComp() {
  return (
    <>
      <nav className="navbar navbar-expand bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Counter component
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/todo" className="nav-link">
                todo app component
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ecom" className="nav-link">
                ECOM component
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/actor" className="nav-link">
                ACTOR component
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/training" className="nav-link">
              TRAINING
              </Link>
              
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
