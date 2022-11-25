import { Box, Button, Link as L, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const homeStyles = {
    width: "50%",
    padding: "10px",
  };

  return (
    <Stack
      spacing={3}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100%"}
      width={"100%"}
    >
      <Typography variant="h4">Simon Says Multiplayer Game</Typography>
      <Typography variant="h6">play simon says with your friends!</Typography>

      <Button
        component={Link}
        to="/new-game"
        variant="contained"
        sx={homeStyles}
      >
        New Game
      </Button>

      <Button variant="outlined" sx={homeStyles}>
        Join Game
      </Button>

      <Button variant="text" sx={homeStyles}>
        Game rules
      </Button>

      <L
        href="https://github.com/F-PTS/simon-says"
        underline="none"
        target="_blank"
        pt={5}
      >
        <Typography variant="caption" color={grey[700]}>
          project source code
        </Typography>
      </L>
    </Stack>
  );
}

export default Home;
