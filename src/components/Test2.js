import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from '@mui/material/MenuItem'


function Test2() {
  const [anchorElm, setAnchorElm] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setAnchorElm(null);
    setOpen(false);
  };
  const handleOpen = (e) => {
    setOpen(true);
    setAnchorElm(e.currentTarget)
  }
  return (
    <div>
      <AppBar position="absolute" color="primary">
        <Toolbar>
          <Typography variant="h6">Logo</Typography>
          <Menu
            anchorEl={anchorElm}
            keepMounted
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>About</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <Button
            variant="contained"
            color="success"
            sx={{ marginLeft: "auto" }}
            onClick={handleOpen}
          >
            login
          </Button>
        </Toolbar>
      </AppBar>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        open again
      </Button>
    </div>
  );
}

export default Test2;
