import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <>
      <section id="wrapper" class="error-page">
        <div class="error-box">
          <div class="error-body text-center">
            <h1 class="text-danger">404</h1>
            <h3 class="text-uppercase">找不到頁面 !</h3>
            <p class="text-muted m-t-30 m-b-30">
              YOU SEEM TO BE TRYING TO FIND HIS WAY HOME
            </p>
            <Link to="/" className="btn btn-danger">
              <span className="brand-text font-weight-light">回到首頁</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NoPage;
