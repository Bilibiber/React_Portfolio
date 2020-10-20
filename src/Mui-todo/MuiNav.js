import React, { useState } from "react"
import clsx from "clsx"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import MenuIcon from "@material-ui/icons/Menu"
import { Drawer, makeStyles } from "@material-ui/core"
import Divider from "@material-ui/core/Divider"
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined"
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined"
import { Link } from "react-router-dom"
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"
import ToysIcon from "@material-ui/icons/Toys"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import CloseIcon from "@material-ui/icons/Close"
const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawer: {
    display: "block",
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginTop: theme.spacing(7),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(9),
    marginTop: theme.spacing(7),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  space: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  mainIcon: {
    margin: "0px 8px 0px 8px",
  },
  IconSize: {
    fontSize: 32,
    color: "#f5f5f5",
  },
  left: {
    "&:hover": {
      backgroundColor: "white",
    },
    justifyContent: "left",
  },
  MuiTabWrapper: {
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "left",
    textTransform: "capitalize",
  },
  TabIcon: {
    fontSize: "24px",
    margin: "18px",
    marginBottom: "18px !important",
  },
}))

function MuiNav(props) {
  const { match, history } = props
  const { params } = match
  const { page } = params

  const tabNameToIndex = {
    0: "myDay",
    1: "important",
    2: "scheduled",
    3: "main",
  }

  const indexToTabName = {
    myDay: 0,
    important: 1,
    scheduled: 2,
    main: 3,
  }
  const [selectedTab, setTab] = useState(indexToTabName[page])
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleDrawer = () => {
    setOpen(!open)
  }

  const handleSelect = (event, newValue) => {
    history.push(`/MuiTodo/${tabNameToIndex[newValue]}`)
    setTab(newValue)
  }
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton>
            <Link to="/home" className={classes.mainIcon}>
              <ToysIcon className={classes.IconSize} />
            </Link>
          </IconButton>
          <Typography variant="h6">To do</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Divider />
        <IconButton
          onClick={handleDrawer}
          className={(classes.space, classes.left)}
          disableRipple={true}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <Tabs value={selectedTab} onChange={handleSelect} orientation="vertical">
          <Tab
            icon={<WbSunnyOutlinedIcon className={classes.TabIcon} />}
            label="My Day"
            classes={{ wrapper: classes.MuiTabWrapper }}
          />
          <Tab
            icon={<StarBorderOutlinedIcon className={classes.TabIcon} />}
            label="Important"
            classes={{ wrapper: classes.MuiTabWrapper }}
          />
          <Tab
            icon={<ScheduleOutlinedIcon className={classes.TabIcon} />}
            label="Scheduled"
            classes={{ wrapper: classes.MuiTabWrapper }}
          />
          <Tab
            icon={<HomeOutlinedIcon className={classes.TabIcon} />}
            label="Home"
            classes={{ wrapper: classes.MuiTabWrapper }}
          />
        </Tabs>
      </Drawer>

      {selectedTab === 0 && <h1>Hello this is My Day</h1>}
      {selectedTab === 1 && <h1>Hello this is Important</h1>}
      {selectedTab === 2 && <h1>Hello this is Scheduled</h1>}
      {selectedTab === 3 && <h1>Hello this is Main</h1>}
    </>
  )
}

export default MuiNav
