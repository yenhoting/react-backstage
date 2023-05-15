import { Link } from "react-router-dom";

const SidebarItem = (props) => {
  if (props.menu.SubMenuItemList.length === 0) {
    return (
      <>
        {/* <!-- Add icons to the links using the .nav-icon className
         with font-awesome or any other icon font library --> */}
        <li className="nav-item">
          <Link to={`/${props.menu.Controller}`} className="nav-link">
            <i className="nav-icon fas fa-copy"></i>
            <p>{props.menu.Name}</p>
          </Link>
        </li>
      </>
    );
  }
  return (
    <>
      <li className="nav-item">
        <Link to="#" className="nav-link">
          <i className="nav-icon fas fa-bars"></i>
          <p>
            {props.menu.Name}
            <i className="fas fa-angle-left right"></i>
          </p>
        </Link>
        <ul className="nav nav-treeview">
          {props.menu.SubMenuItemList.map((item) => {
            return <SidebarItem key={item.ID} menu={item} />;
          })}
        </ul>
      </li>
    </>
  );
};

export default SidebarItem;
