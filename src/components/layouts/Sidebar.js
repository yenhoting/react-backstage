import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import SidebarItem from "./SidebarItem";
import axios from "axios";
import config from "../../configuration.json";

const Sidebar = () => {
  const { user } = useContext(UserContext);
  const [menuList, setMenuList] = useState([]);

  const img = "dist/img/user2-160x160.jpg";

  useEffect(() => {
    axios
      .post(config.SERVER_URL + "SYS/MenuItemListQuery", {
        ID: user.ID,
      })
      .then((res) => {
        if (res.status === 200) {
          setMenuList(res.data);
        }
      })
      .then(() => {
        const trees = window.$('[data-widget="treeview"]');
        trees.Treeview("init");
      })
      .catch((err) => console.log(err));
  }, [user.ID]);

  return (
    <>
      {/* <!-- Main Sidebar Container --> */}
      <aside className="main-sidebar sidebar-light-primary elevation-4">
        {/* <!-- Brand Logo --> */}
        <Link to="/" className="brand-link">
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </Link>

        {/* <!-- Sidebar --> */}
        <div className="sidebar">
          {/* <!-- Sidebar user panel --> */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src={img} className="img-circle elevation-2" alt="" />
            </div>
            <div className="info">
              {user.userID} {user.userName}
            </div>
          </div>

          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {menuList.map((item) => {
                return <SidebarItem key={item.ID} menu={item} />;
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
