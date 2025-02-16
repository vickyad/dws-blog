import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import Article from "./pages/Article.tsx";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.ts";
import Header from "./components/Header/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":id" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
