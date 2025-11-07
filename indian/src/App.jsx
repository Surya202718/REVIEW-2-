import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RoutesConfig from "./routes/RoutesConfig";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RoutesConfig />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
