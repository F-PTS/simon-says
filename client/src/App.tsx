import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MissingPage from "./pages/MissingPage";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { blue, brown, purple } from "@mui/material/colors";
import NewGame from "./pages/NewGame";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: brown[400],
      },
    },
  });

  return (
    <Container sx={{ height: "100vh" }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<MissingPage />} />
            <Route path="/new-game" element={<NewGame />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Container>
  );
}

export default App;
