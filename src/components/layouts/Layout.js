import { useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import UserContext from "../../contexts/UserContext";

const Layout = () => {
  const [user, setUser] = useState({
    ID: 1,
    userID: "A0001",
    userName: "王小明",
  });

  const value = { user, setUser };

  return (
    <>
      <UserContext.Provider value={value}>
        <div className="wrapper">
          <Header />
          <Sidebar />
          <Content />
          <Footer />
        </div>
      </UserContext.Provider>
    </>
  );
};

export default Layout;
