import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import Homepage from "./Homepage";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

export default function App() {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
      <Footer />
    </div>
  );
}
