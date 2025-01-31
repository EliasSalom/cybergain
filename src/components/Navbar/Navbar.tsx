"use client";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { FC, useState } from "react";
import useShowSignUp from "@/hooks/useShowSignup";

const Navbar: FC = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const showSignUp = useShowSignUp();
  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ background: "black" }}>
      <Container sx={{ padding: "5px 0 !important" }}>
        <Toolbar sx={{ backdropFilter: "blur(5px)", padding: "0 !important" }}>
          <img
            src="https://cybergain.net/static/media/logo.4fd359a7a963b12ff51fb8a3e75114e5.svg"
            alt={""}
          />
          {isMobile ? (
            <div>
              <IconButton
                edge="start"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link href="/" passHref>
                  <MenuItem onClick={handleClose}>Home</MenuItem>
                </Link>
                <Link href="/services" passHref>
                  <MenuItem onClick={handleClose}>Services</MenuItem>
                </Link>
                <Link href="/about" passHref>
                  <MenuItem onClick={handleClose}>About</MenuItem>
                </Link>
                {/*<Link href="/contactUs" passHref>*/}
                {/*  <MenuItem onClick={handleClose}>Contact</MenuItem>*/}
                {/*</Link>*/}
                {/*<Link href="/blog" passHref>*/}
                {/*  <MenuItem onClick={handleClose}>Blog</MenuItem>*/}
                {/*  </Link>*/}

                {/*<Link href="/events" passHref>*/}
                {/*  <MenuItem onClick={handleClose}>Events</MenuItem>*/}
                {/*</Link>*/}
                {/*<Link href="/pricing" passHref>*/}
                {/*  <MenuItem onClick={handleClose}>Pricing</MenuItem>*/}
                {/*</Link>*/}
              </Menu>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Link href="/" passHref>
                  <Button sx={{ color: "#fff" }} color="inherit">
                    Home
                  </Button>
                </Link>
                <Link href="/services" passHref>
                  <Button sx={{ color: "#fff" }} color="inherit">
                    Services
                  </Button>
                </Link>
                <Link href="/about" passHref>
                  <Button sx={{ color: "#fff" }} color="inherit">
                    About
                  </Button>
                </Link>
                <Link href="/contactUs" passHref>
                  <Button sx={{ color: "#fff" }} color="inherit">
                    Contact
                  </Button>
                </Link>
                {/*<Link href="/blog" passHref>*/}
                {/*  <Button sx={{ color: "#fff" }} color="inherit">*/}
                {/*    Blog*/}
                {/*  </Button>*/}
                {/*</Link>*/}
                {/*<Link href="/events" passHref>*/}
                {/*  <Button sx={{ color: "#fff" }} color="inherit">*/}
                {/*    Events*/}
                {/*  </Button>*/}
                {/*</Link>*/}

                {/*<Link href="/pricing" passHref>*/}
                {/*  <Button sx={{ color: "#fff" }} color="inherit">*/}
                {/*    Pricing*/}
                {/*  </Button>*/}
                {/*</Link>*/}
              </div>
              {/*{showSignUp && (*/}
              {/*  <Box sx={{ display: "flex", gap: 2 }}>*/}
              {/*    <a href="https://qa.app.cybergain.io/login">*/}
              {/*      <Button*/}
              {/*        variant="contained"*/}
              {/*        sx={{*/}
              {/*          background:*/}
              {/*            "linear-gradient(180deg, #0077c2 -10%, #01499e9c)",*/}
              {/*        }}*/}
              {/*      >*/}
              {/*        SIGN IN*/}
              {/*      </Button>*/}
              {/*    </a>*/}
              {/*    <a href="https://qa.app.cybergain.io/signup">*/}
              {/*      <Button*/}
              {/*        variant="contained"*/}
              {/*        sx={{*/}
              {/*          background:*/}
              {/*            "linear-gradient(180deg, #fff -200%, #0b121f)",*/}
              {/*        }}*/}
              {/*      >*/}
              {/*        SIGN UP*/}
              {/*      </Button>*/}
              {/*    </a>*/}
              {/*  </Box>*/}
              {/*)}*/}
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
