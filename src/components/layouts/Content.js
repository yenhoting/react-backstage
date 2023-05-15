import { Outlet } from "react-router-dom";

const LayoutContent = () => {
  return (
    <>
      {/* <!-- Content Wrapper --> */}
      <div className="content-wrapper">
        {/* <!-- Content Header --> */}
        <section className="content-header">
          <div className="container-fluid"></div>
        </section>
        {/* <!-- Main Content --> */}
        <section className="content">
          <div className="container-fluid">
            <Outlet />
          </div>
        </section>
      </div>
    </>
  );
};

export default LayoutContent;
