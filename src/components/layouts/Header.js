import { Link } from "react-router-dom";

const LayoutHeader = () => {
  return (
    <>
      {/* <!-- Preloader --> */}
      <div className="preloader flex-column justify-content-center align-items-center">
        <img
          className="animation__shake"
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTELogo"
          height="60"
          width="60"
        />
      </div>

      {/* <!-- Navbar --> */}
      <nav className="main-header navbar navbar-expand navbar-dark">
        {/* <!-- Left navbar links --> */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="/"
              role="button"
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>
        </ul>

        {/* <!-- Right navbar links --> */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fa fa-power-off"> 登出</i>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default LayoutHeader;
