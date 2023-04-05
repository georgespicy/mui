import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Test2() {
  return (
    <div>
      <AppBar position="absolute" color="primary">
        <Toolbar>
          <Typography variant="h6">Logo</Typography>
          <Button
            variant="contained"
            color="success"
            sx={{ marginLeft: "auto" }}
          >
            login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Test2;
