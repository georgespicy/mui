import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

function Test6() {
  const rows = [
    {
      id: 1,
      firstname: "John",
      lastname: "Smith",
      age: 21,
    },
    {
      id: 2,
      firstname: "james",
      lastname: "paul",
      age: 23,
    },
    {
      id: 3,
      firstname: "mick",
      lastname: "james",
      age: 55,
    },
    {
      id: 4,
      firstname: "kenny",
      lastname: "taiwo",
      age: 11,
    },
    {
      id: 5,
      firstname: "junior",
      lastname: "enoch",
      age: 14,
    },
  ];
  const columns = [
    {
      id: 1,
      firstname: "John",
      lastname: "Smith",
      age: 21,
    },
    {
      id: 2,
      firstname: "james",
      lastname: "paul",
      age: 23,
    },
    {
      id: 3,
      firstname: "mick",
      lastname: "james",
      age: 55,
    },
    {
      id: 4,
      firstname: "kenny",
      lastname: "taiwo",
      age: 11,
    },
    {
      id: 5,
      firstname: "junior",
      lastname: "enoch",
      age: 14,
    },
    {
      id: 6,
      firstname: "junior",
      lastname: "enoch",
      age: 14,
    },
    {
      id: 7,
      firstname: "junior",
      lastname: "enoch",
      age: 14,
    },
  ];
  return (
    <Box sx={{height: 500, width: "50%", margin: "auto"}}>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}

export default Test6;
