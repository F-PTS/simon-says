import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import React from "react";
import JoinGame from "./JoinGame";
import NewGame from "./NewGame";

function Home() {
    const homeStyles = {
        width: "50%",
        padding: "10px",
    };

    const navigate = useNavigate();

    return (
        <Stack
            spacing={3}
            alignItems={"center"}
            justifyContent={"center"}
            height={"100%"}
            width={"100%"}
        >
            <Typography variant="h4">Simon Says Multiplayer Game</Typography>
            <Typography variant="h6">
                play simon says with your friends!
            </Typography>

            <Button
                variant="contained"
                sx={homeStyles}
                onClick={() => {
                    navigate("/NewGame");
                }}
            >
                New Game
            </Button>

            <Button
                variant="outlined"
                sx={homeStyles}
                onClick={() => {
                    navigate("/JoinGame");
                }}
            >
                Join Game
            </Button>

            <Button
                variant="text"
                sx={homeStyles}
                onClick={() => {
                    navigate("/GameRules");
                }}
            >
                Game rules
            </Button>

            <Link
                href="https://github.com/F-PTS/simon-says"
                underline="none"
                target="_blank"
                pt={5}
            >
                <Typography variant="caption" color={grey[700]}>
                    project source code
                </Typography>
            </Link>
        </Stack>
    );
}

export default Home;
