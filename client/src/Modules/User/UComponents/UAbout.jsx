import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Fade,
  Slide
} from "@mui/material";

export default function About() {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Box>

      {/* HERO SECTION */}
      <Fade in={checked} timeout={1000}>
        <Box
          sx={{
            height: "60vh",
            bgcolor: "black",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h3" fontWeight="bold">
            Redefining Fashion with InstantStyle
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Where technology meets trend.
          </Typography>
        </Box>
      </Fade>

      {/* OUR STORY */}
      <Slide direction="up" in={checked} timeout={1000}>
        <Box sx={{ py: 10 }}>
          <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom>
              Our Story
            </Typography>
            <Typography align="center" color="text.secondary">
              InstantStyle blends modern technology with trending fashion
              to deliver a seamless and enjoyable shopping experience.
            </Typography>
          </Container>
        </Box>
      </Slide>

      {/* MISSION SECTION */}
      <Slide direction="left" in={checked} timeout={1000}>
        <Box sx={{ py: 10, bgcolor: "#f5f5f5" }}>
          <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom>
              Our Mission
            </Typography>
            <Typography align="center" color="text.secondary">
              To empower individuals through accessible and trend-driven fashion.
            </Typography>
          </Container>
        </Box>
      </Slide>

      {/* CTA SECTION */}
      <Fade in={checked} timeout={1500}>
        <Box
          sx={{
            py: 12,
            bgcolor: "black",
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography variant="h4">
            Your Style. Your Statement.
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 3,
              bgcolor: "white",
              color: "black",
              transition: "0.3s",
              "&:hover": {
                bgcolor: "#ddd",
                transform: "scale(1.05)",
              },
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Fade>

    </Box>
  );
}