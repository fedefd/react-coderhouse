import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Home = ({ greeting }) => {
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {greeting}
      </Typography>
    </Box>
  );
};

export default Home;
