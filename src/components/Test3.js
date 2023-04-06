import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

function Test3() {
  const [value, setValue] = useState(0);
  const navigate = (e, val) => {
    setValue(val);
  };
  return (
    <div>
      <AppBar position="absolute" color="primary">
        <Toolbar>
          <Tabs
            indicatorColor="secondary"
            textColor="inherit"
            value={value}
            onChange={navigate}
          >
            <Tab label="first" />
            <Tab label="second" />
            <Tab label="third" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Test3;
