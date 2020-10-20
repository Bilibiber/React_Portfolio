import React from "react";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import StarIcon from "@material-ui/icons/Star";
import ScheduleIcon from "@material-ui/icons/Schedule";

export const SidebarData = [
  {
    path: "/todo/myDay",
    title: "My Day",
    icon: <WbSunnyRoundedIcon className="nav-icon" />,
    cName: "toolBarItem",
  },
  {
    path: "/todo/important",
    title: "Important",
    icon: <StarIcon className="nav-icon" />,
    cName: "toolBarItem",
  },
  {
    path: "/todo/Scheduled",
    title: "Scheduled",
    icon: <ScheduleIcon className="nav-icon" />,
    cName: "toolBarItem",
  },
];
