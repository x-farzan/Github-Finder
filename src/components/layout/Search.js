import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function Search() {
  return (
    <div style={{ display: "flex", alignItems: "center", marginLeft: "20%" }}>
      <input
        placeholder="Enter username..."
        type="search"
        style={{
          padding: "12px",
          margin: "20px",
          paddingRight: "35%",
          borderRadius: "5px",
          //   outline: "none",
          borderWidth: "thin",
          fontSize: "20px",
        }}
      />
    </div>
  );
}
