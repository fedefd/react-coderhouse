import { Box, Grid, Paper, Typography, IconButton } from "@mui/material";

import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./Footer.css";
const Footer = () => {
  const footerWidth = window.innerWidth > 600 ? "1080px" : "85%";
  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <Box className="footer-container">
        <Paper style={{ maxWidth: footerWidth }} className="footer-paper">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={2}>
              <Typography variant="body2" className="footer-text">
                © {new Date().getFullYear()} Bookpolis
              </Typography>
            </Grid>
            <Grid item xs={9} className="footer-icons">
              {[
                { icon: <TwitterIcon />, url: "https://www.twitter.com" },
                { icon: <InstagramIcon />, url: "https://www.instagram.com" },
                { icon: <LinkedInIcon />, url: "https://www.linkedin.com" },
              ].map((item, index) => (
                <IconButton
                  key={index}
                  color="#fff"
                  onClick={() => handleIconClick(item.url)}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default Footer;
