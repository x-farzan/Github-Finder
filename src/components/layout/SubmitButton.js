import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ContainedButtons() {
  return (
    <div>
      <Button
        variant="contained"
        type="submit"
        sx={{
          backgroundColor: "#242526",
          position: "absolute",
          marginLeft: "15%",
          marginTop: "-3.5%",
          padding: "10px 80px 10px 80px",
          "&:hover": {
            backgroundColor: "#242526",
          },
        }}
      >
        Submit
      </Button>
    </div>
  );
}
