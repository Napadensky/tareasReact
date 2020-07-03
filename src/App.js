import React from "react";
import "./styles.css";
import { ThumbContainer } from "./components/thumb-container";
import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <ThumbContainer />
    </div>
  );
}