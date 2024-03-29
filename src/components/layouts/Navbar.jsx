import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import "./Navbar.css";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import SettingsIcon from "@mui/icons-material/Settings";

import CartWidget from "../common/CartWidget";

import { Link } from "react-router-dom";

let user = { rol: "user" };
const pages = [
  "Productos",
  "Libros",
  "Electronicos",
  "Merchandising",
  "Papeleria",
  "Juegos",
];
const settings = ["Perfil", "Cuenta", "Panel de usuario", "Salir de la sesion"];

const pageRoutes = {
  Productos: "/products",
  Libros: "/category/Libros",
  Electronicos: "/category/dispositivos-electronicos",
  Merchandising: "/category/merchadising-literario",
  Papeleria: "/category/material-papeleria",
  Juegos: "/category/juegos-de-mesa",
  Dashboard: "/dashboard",
};

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxwidth="lg">
          <Toolbar disableGutters maxwidth="xs">
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Bookpolis
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link
                        to={pageRoutes[page]}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {page}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}

                {user.rol === "admin" && (
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link
                        to={pageRoutes["Dashboard"]}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Dashboard
                      </Link>
                    </Typography>
                  </MenuItem>
                )}
              </Menu>
            </Box>

            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Bookpolis
              </Link>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                gap: "10px",
              }}
            >
              {pages.map((page) => (
                <Link
                  key={page}
                  to={pageRoutes[page]}
                  onClick={handleCloseNavMenu}
                  className="navbarPages"
                >
                  {page}
                </Link>
              ))}
              {user.rol === "admin" && (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={pageRoutes["Dashboard"]} className="navbarPages">
                      Dashboard
                    </Link>
                  </Typography>
                </MenuItem>
              )}
            </Box>
            <Box
              sx={{
                flexGrow: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, paddingRight: "7px", marginRight: "12px" }}
                >
                  <SettingsIcon style={{ color: "white" }} />
                </IconButton>
              </Tooltip>
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <CartWidget />
              </Link>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;
