import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { SidebarData } from "./SideBarData";
import { Link } from "react-router-dom";
import "./SideNav.css";

function SideNav() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className={open ? "sideMenu active" : "sideMenu exited"}>
        <div className="sideMenu-header">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleToggle}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <ul className="sideMenuList">
          {SidebarData.map((icons, index) => {
            return (
              <Link key={index} to={icons.path}>
                <li className={icons.cName}>
                  <div className="toolbarInner">
                    {icons.icon}
                    <span>{icons.title}</span>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default SideNav;
