import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dogs from "./components/Dogs";
import Dog from "./components/Dog";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Dogs are cool creatures</h1>
        <Dogs />
        <Routes>
          <Route path="/dogs/:dog" element={<Dog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
