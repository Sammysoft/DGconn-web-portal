import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
