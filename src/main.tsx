import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home/index.tsx";
import Article from "./pages/Article/index.tsx";
import { theme } from "./styles/theme.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":id" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
