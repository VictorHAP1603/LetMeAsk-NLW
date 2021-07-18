import React from "react";
import { BrowserRouter } from "react-router-dom";


import AppRoutes from "./routes/app.routes";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
