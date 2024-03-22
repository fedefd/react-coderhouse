import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const CircularLoader = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};

export default CircularLoader;
