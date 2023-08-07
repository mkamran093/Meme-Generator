import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/345v97.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  return (
    <main>
      <div className="form">
        <input
          className="form-input"
          placeholder="Top Text"
          type="text"
          name=""
          id=""
        />
        <input
          className="form-input"
          placeholder="Bottom Text"
          type="text"
          name=""
          id=""
        />
        <button className="form-btn" onClick={getMemeImage}>
          Get a new meme image🖼
        </button>
      </div>
      <img src={meme.randomImage} className="meme-image" />
    </main>
  );
}
