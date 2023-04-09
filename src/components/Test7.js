import {
  AppBar,
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";

function Test7({ links }) {
  const [value, setvalue] = useState(0);
  return (
    <AppBar
      sx={{
        backgroundImage:
          "linear-gradient(90deg, rgba(180,58,58,1) 2%, rgba(49,49,116,1) 36%, rgba(105,0,161,1) 73%, rgba(166,69,252,1) 100%);",
      }}
    >
      <Toolbar>
        <Grid container spacing={1} sx={{ placeItems: "center" }}>
          <Grid item xs={2}>
            <Typography variant="P" color="white">
              <ShoppingCartIcon />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Tabs
              textColor="inherit"
              indicatorColor="secondary"
              value={value}
              onChange={(e, val) => setvalue(val)}
            >
              {links.map((index) => (
                <Tab key={index} label={index} />
              ))}
            </Tabs>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={3}>
            <Box display="flex">
              <Button sx={{ marginLeft: "auto", backgroundColor: "rgba(180,58,58,1)" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: 1, backgroundColor: "rgba(180,58,58,1)" }} variant="contained">
                Sign Up
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Test7;
