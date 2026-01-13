import { Link, Typography, Box, Container } from "@mui/material";

function MainFooter() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      p={1}
      mt={2}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.coderschool.vn">
        © 2026 MOVIEDB Clone. Powered by TMDB API
      </Link>
    </Typography>
    // <Box
    //   sx={{ bgcolor: "#000", py: 3, mt: "auto", borderTop: "1px solid #333" }}
    // >
    //   <Container maxWidth="xl">
    //     <Typography variant="body2" color="text.secondary" align="center">
    //       © 2024 MOVIEDB Clone. Powered by TMDB API
    //     </Typography>
    //   </Container>
    // </Box>
  );
}

export default MainFooter;
