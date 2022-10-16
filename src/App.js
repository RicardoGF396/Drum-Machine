import logo from "./logo.svg";
import fcc from "../src/fcc.png";
import "./App.css";
import { useEffect, useState } from "react";

function App() {

  const bankOne = [
    {
      keyCode: 81,
      keyTrigger: "Q",
      id: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      keyTrigger: "W",
      id: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      keyTrigger: "E",
      id: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      keyTrigger: "A",
      id: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      keyTrigger: "S",
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      keyTrigger: "D",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      keyTrigger: "Z",
      id: "Kick-n'-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      keyTrigger: "X",
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      keyTrigger: "C",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const bankTwo = [
    {
      keyCode: 81,
      keyTrigger: "Q",
      id: "Chord-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
      keyCode: 87,
      keyTrigger: "W",
      id: "Chord-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
      keyCode: 69,
      keyTrigger: "E",
      id: "Chord-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    {
      keyCode: 65,
      keyTrigger: "A",
      id: "Shaker",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
      keyCode: 83,
      keyTrigger: "S",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    {
      keyCode: 68,
      keyTrigger: "D",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    {
      keyCode: 90,
      keyTrigger: "Z",
      id: "Punchy-Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    {
      keyCode: 88,
      keyTrigger: "X",
      id: "Side-Stick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    {
      keyCode: 67,
      keyTrigger: "C",
      id: "Snare",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
  ];

  const [chord, setChord] = useState("");
  const [textType, setTextType] = useState("bankOne");
  const [type, setType] = useState(true);
  const [music, setMusic] = useState(bankOne);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      console.log(event.key);
      playSound(event.key.toUpperCase());
    });
  }, []);

  

  function changeMusic() {

    if (type) {
      setMusic(bankTwo)
      setTextType('bankTwo')
    } else {
      setMusic(bankOne)
      setTextType('bankOne')
    }
    setType(!type)
    
    console.log(type);
  }

  function playSound(selector) {
    const audio = document.getElementById(selector);

    try {
      audio.play();
      setChord(audio.id);
    } catch (error) {
      console.log("Do not exist");
    }
  }

  return (
    <div id="drum-machine">
      <img src={fcc} alt="fcc" />
      <h1 style={{ color: "white", fontSize: "3rem" }}>Drumb Machine</h1>

      <div>
        <div id="content-display">
          <div id="display">{chord}</div>
        </div>

        <p style={{color:'white', fontWeight:'bold'}}>{textType}</p>
        <label className="switch">
          <input onClick={changeMusic} id="bank" type="checkbox"></input>
          <span className="slider round"></span>
        </label>

        <div className="drum-pads">
          {music.map((drumPad) => (
            <div
              key={drumPad.id}
              onClick={() => {
                playSound(drumPad.keyTrigger);
              }}
              className="drum-pad"
              style={{ color: "white" }}
              id={drumPad.id}
            >
              {drumPad.keyTrigger}
              <audio
                className="clip"
                id={drumPad.keyTrigger}
                src={drumPad.url}
              ></audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
