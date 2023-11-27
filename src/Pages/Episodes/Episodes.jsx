// Episodes.jsx

import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import InputGroup from "../../Components/Filter/InputGroup";
import Search from "../../Components/Search/Search";
import "./Episodes.css";


const Episodes = () => {
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState({});
  const { air_date, episode, name } = info;
  const [id, setID] = useState(1);
  const [search, setSearch]=useState("Planet");
  let [pageNumber,updatePageNumber]=useState(1);


  const episodeNames = [
    "Pilot",
    "Lawnmower Dog",
    "Anatomy Park",
    "M. Night Shaym-Aliens!",
    "Meeseeks and Destroy",
    "Rick Potion #9",
    "Raising Gazorpazorp",
    "Rixty Minutes",
    "Something Ricked This Way Comes",
    "Close Rick-Counters of the Rick Kind",
    "Ricksy Business",
    "A Rickle in Time",
    "Mortynight Run",
    "Auto Erotic Assimilation",
    "Total Rickall",
    "Get Schwifty",
    "The Ricks Must Be Crazy",
    "Big Trouble in Little Sanchez",
    "Interdimensional Cable 2: Tempting Fate",
    "Look Who's Purging Now",
    "The Wedding Squanchers",
    "The Rickshank Rickdemption",
    "Rickmancing the Stone",
    "Pickle Rick",
    "Vindicators 3: The Return of Worldender",
    "The Whirly Dirly Conspiracy",
    "Rest and Ricklaxation",
    "The Ricklantis Mixup",
    "Morty's Mind Blowers",
    "The ABC's of Beth",
    "The Rickchurian Mortydate",
    "Edge of Tomorty: Rick Die Rickpeat",
    "The Old Man and the Seat",
    "One Crew Over the Crewcoo's Morty",
    "Claw and Hoarder: Special Ricktim's Morty",
    "Rattlestar Ricklactica",
    "Never Ricking Morty",
    "Promortyus",
    "The Vat of Acid Episode",
    "Childrick of Mort",
    "Star Mort Rickturn of the Jerri",
    "A Rickconvenient Mort",
    "Mort Dinner Rick Andre",
    "Sorry for Your Loss",
    "Intern Rickmances",
    "Rickmurai Jack",
    "A Rickle in Time",
    "Mortynight Run",
    "Auto Erotic Assimilation",
    "Total Rickall",
    "Get Schwifty",
    "The Ricks Must Be Crazy",
  ];
  
  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  const api2 = `https://rickandmortyapi.com/api/episode/$name=${search}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(api).then((res) => res.json());
        setInfo(data);

        const charactersData = await Promise.all(
          data.characters.map((x) => fetch(x).then((res) => res.json()))
        );
        setResults(charactersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [api]);

  return (
    <>
      <div className="Hero-section">
        <div className="container">
          <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
          <InputGroup name="Episode" changeID={setID} options={episodeNames} />
          
        </div>
      </div>
      <div className="episodes-header">
        <h1>
          Episode name: <span className="">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5>Air Date: {air_date === "" ? "Unknown" : air_date}</h5>
      </div>
      <div className="episodes-content">
        
          <Card page="/episodes/" results={results} />
        
      </div>
    </>
  );
};

export default Episodes;
