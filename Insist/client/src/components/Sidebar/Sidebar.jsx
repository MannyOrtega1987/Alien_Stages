import { useState } from "react";
// ClerkAuth SignedIn:
import { SignedIn } from "@clerk/clerk-react";

// importing BiIcons:
import * as BiIcons from "react-icons/bi";

// importing Navlink for nav highlight:
import { NavLink } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggle = () => setShowSidebar(!showSidebar);

  const sidebarItems = [
    {
      icon: <BiIcons.BiSolidUserDetail />,
      name: "Profile",
      path: "/profile",
    },
    {
      icon: <BiIcons.BiSolidMessageSquareEdit />,
      name: "Bubble",
      path: "/bubble",
    },
    {
      icon: <BiIcons.BiSolidCategoryAlt />,
      name: "Topics",
      path: "/topics",
    },
    {
      icon: <BiIcons.BiSolidCog />,
      name: "Settings",
      path: "/settings",
    },
  ];

  const BarNavigation = () => {
    return (
      <div className="sideContainter">
        <div
          className="sidebar"
          style={{ width: showSidebar ? "200px" : "0px" }}
        >
          {sidebarItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassname="active"
              style={{ width: showSidebar ? "200px" : "0px" }}
              onClick={toggle}
            >
              <div className="icon">{item.icon}</div>
              <div
                className="linkText"
                style={{ width: showSidebar ? "200px" : "0px" }}
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    );
  };

  return (
    <SignedIn>
      <BarNavigation />
      <main>{children}</main>
    </SignedIn>
  );
};

export default Sidebar;