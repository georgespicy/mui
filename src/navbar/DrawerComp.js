import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerComp = ({ links }) => {
  const [open, setopen] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{
          sx: { backgroundColor: "rgba(49,49,116,1)" },
        }}
        anchor="left"
        open={open}
        onClose={() => setopen(false)}
      >
        <List>
          {links.map((link, index) => (
            <ListItemButton divider key={index} onClick={() => setopen(false)}>
              <ListItemText sx={{ color:"white"}}>{link}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "white" }}
        onClick={() => setopen(true)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
