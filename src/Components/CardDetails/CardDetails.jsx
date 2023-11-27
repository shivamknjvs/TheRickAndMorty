import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CardDetails.css";

const CardDetails = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch character data
        const characterResponse = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const characterData = await characterResponse.json();

        if (!characterData.episode || !Array.isArray(characterData.episode)) {
          console.warn("No episode data found for this character.");
          return;
        }

        // Update character state
        setCharacter(characterData);

        // Fetch episodes data
        const episodesData = await Promise.all(
          characterData.episode.map((url) => fetch(url).then((res) => res.json()))
        );

        // Update episodes state
        setEpisodes(episodesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="card-details">
        <h1>{character.name}</h1>

        <img src={character.image} alt="" />

        <div className={`status-badge ${character.status ? character.status.toLowerCase() : character.status}`}>
          {character.status}
        </div>

        <div className="content">
          <div>
            <span className="Details">Gender:</span> {character.gender}
          </div>
          <div>
            <span className="Details">Location:</span> {character.location?.name}
          </div>
          <div>
            <span className="Details">Origin:</span> {character.origin?.name}
          </div>
          <div>
            <span className="Details">Species:</span> {character.species}
          </div>
        </div>
        <div className="Episodes">
          <span className="Details">Episodes:</span>
          {episodes.map((episode, index) => (
            <span key={index}>{episode.name}, </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
