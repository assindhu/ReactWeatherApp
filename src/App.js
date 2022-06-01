import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          This project was created by Sindhu{" "}
          <a
            href="https://github.com/assindhu/ReactWeatherApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced github
          </a>
        </footer>
      </div>
    </div>
  );
}
