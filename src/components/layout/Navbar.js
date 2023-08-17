import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();
  let redirectToHome = () => {
    let path = "/";
    navigate(path);
  };

  let redirectToAbout = () => {
    let path = "/about";
    navigate(path);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#242526" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "left", marginLeft: 10 }}
          >
            <i class="bx bxl-github"></i>
            Github Finder
          </Typography>
          <Button color="inherit" onClick={redirectToAbout}>
            About
          </Button>
          <Button
            color="inherit"
            sx={{
              marginRight: 10,
            }}
            onClick={redirectToHome}
          >
            Home
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
