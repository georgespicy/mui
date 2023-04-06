import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

function Test4() {
  const [dropDown, setdropDown] = useState(false);
  const names = ["george", "ope", "ayoola", "enoch", "kenny"];

  const toggle = () => {
    setdropDown(!dropDown);
  };


  return (
    <Box>
      <List sx={{ width: 300 }}>
        <ListItem>
          <ListItemButton
            sx={{ bgcolor: "gray", color: "white" }}
            onClick={toggle}
          >
            <ListItemIcon>
              {<ArrowDropDownIcon style={{ color: "white" }} />}
            </ListItemIcon>
            <ListItemText primary="Names" />
          </ListItemButton>
        </ListItem>
        <Collapse in={dropDown}>
          <List>
            {names.map((name) => (
              <ListItem divider>
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </Box>
  );
}

export default Test4;
