import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is coded by Mari Myhrer and is open-sourced on{" "}
          <a href="https://github.com/MaMy89/react-weather-app" target="_blank">
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
