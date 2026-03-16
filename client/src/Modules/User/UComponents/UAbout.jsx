import React from "react";
import { Box, Typography, Container, Grid, Button, Fade } from "@mui/material";

export default function About() {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Box>

      {/* INTRO SECTION */}
      <Fade in={checked} timeout={1000}>
        <Box
          sx={{
            minHeight: "70vh",
            display: "flex",
            alignItems: "center",
            bgcolor: "#111",
            color: "white"
          }}
        >
          <Container>
            <Typography variant="h2" fontWeight="bold">
              Fashion Meets Artificial Intelligence
            </Typography>

            <Typography sx={{ mt: 3, maxWidth: "600px", opacity: 0.8 }}>
              InstantStyle is transforming the way people shop for clothes
              online. Our AI-powered virtual try-on technology lets you
              visualize outfits before buying them.
            </Typography>

            <Button
              variant="outlined"
              sx={{
                mt: 4,
                borderColor: "white",
                color: "white",
                "&:hover": {
                  borderColor: "#aaa",
                  background: "rgba(255,255,255,0.1)"
                }
              }}
            >
              Discover More
            </Button>
          </Container>
        </Box>
      </Fade>

      {/* OUR STORY */}
      <Container sx={{ py: 12 }}>
        <Grid container spacing={8} alignItems="center">

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "350px",
                bgcolor: "#eee",
                borderRadius: "15px"
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold">
              Our Story
            </Typography>

            <Typography sx={{ mt: 2 }} color="text.secondary">
              InstantStyle was created to bridge the gap between fashion
              and technology. Traditional online shopping often leaves
              customers unsure about how clothes will actually look on
              them.
            </Typography>

            <Typography sx={{ mt: 2 }} color="text.secondary">
              Our AI-powered try-on system removes this uncertainty by
              allowing users to visualize outfits instantly.
            </Typography>
          </Grid>

        </Grid>
      </Container>

      {/* TECHNOLOGY SECTION */}
      <Box sx={{ bgcolor: "#f8f8f8", py: 12 }}>
        <Container>
          <Grid container spacing={8} alignItems="center">

            <Grid item xs={12} md={6}>
              <Typography variant="h3" fontWeight="bold">
                Powered by AI
              </Typography>

              <Typography sx={{ mt: 2 }} color="text.secondary">
                InstantStyle uses advanced machine learning models
                including diffusion models and image processing
                techniques to create realistic virtual try-on
                experiences.
              </Typography>

              <Typography sx={{ mt: 2 }} color="text.secondary">
                The system ensures the user's pose and background
                remain unchanged while the clothing is seamlessly
                applied.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: "350px",
                  bgcolor: "#ddd",
                  borderRadius: "15px"
                }}
              />
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          py: 12,
          textAlign: "center",
          bgcolor: "#111",
          color: "white"
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Experience the Future of Fashion
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 4,
            px: 5,
            py: 1.5,
            bgcolor: "white",
            color: "black",
            "&:hover": {
              bgcolor: "#ddd"
            }
          }}
        >
          Try InstantStyle
        </Button>
      </Box>

    </Box>
  );
}