import { useState } from "react";
import video from "./assets/video.mp4";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="showcase">
        <header>
          <h2 className="logo">Travel</h2>
          <div className="toggle"></div>
        </header>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="text">
          <h2>Never Stop</h2>
          <h3>Exploring the world</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint nobis
            debitis ab reprehenderit facilis perspiciatis tenetur nisi quasi qui
            rem. Voluptates sit omnis, eum quos velit quod nobis ut aliquam.
          </p>
          <a href="#">Explorer</a>
        </div>
        <ul>
          <li>
            <img src="facebook.png" alt="" />
          </li>
          <li>
            <img src="facebook.png" alt="" />
          </li>
          <li>
            <img src="facebook.png" alt="" />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
