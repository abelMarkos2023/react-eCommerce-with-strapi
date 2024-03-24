import Typography from "@mui/material/Typography";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Outlet } from "react-router-dom";
import Header1 from "./components/Header/Header1";
import Header2 from "./components/Header/Header2";
import Header3 from "./components/Header/Header3";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ScrollToTopFab from "./ScrollToTop";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="">
          <Header1 />
          <Header2 />
          <Header3 />
          <Box sx={{bgcolor:theme.palette.bg.main}}>
          <Hero />
          </Box>
          <Box sx={{bgcolor:theme.palette.bg.main}}>
          <Main />

          </Box>
          <Footer />
          <ScrollToTopFab />
          <Typography variant="h3">
           
          </Typography>
          <Outlet />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;


