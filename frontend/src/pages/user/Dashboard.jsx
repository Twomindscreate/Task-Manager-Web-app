import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";
import "./style.css";

const SideNav = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton
        edge="start"
        className="menuButton"
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        className="drawer"
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        classes={{ paper: "drawerPaper" }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <div className="userInfo">
          <Avatar className="avatar" src="../img/one.png"></Avatar>
          <Typography variant="h6">User Name</Typography>
          <Typography variant="body2">user@example.com</Typography>
        </div>
        <Divider />
        <List>
          <ListItem button className="listItem">
            <ListItemIcon className="listItemIcon">
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Add Task" />
          </ListItem>
          <ListItem button className="listItem">
            <ListItemIcon className="listItemIcon">
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Add Member" />
          </ListItem>
          <ListItem button className="listItem">
            <ListItemIcon className="listItemIcon">
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Create Team" />
          </ListItem>
          {/* Add more task manager buttons here */}
        </List>
        <ListItem button className="logout">
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </Drawer>
    </>
  );
};

export default SideNav;
