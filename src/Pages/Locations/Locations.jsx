// Location.js
import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import InputGroup from "../../Components/Filter/InputGroup";
import Search from "../../Components/Search/Search";
import "./Locations.css"; // Import your custom styles

const Locations = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState({});
  let { dimension, type, name } = info;
  let [number, setNumber] = useState(1);
  let [pageNumber,updatePageNumber]=useState(1);
  const [search, setSearch]=useState("Earth%20(C-137)");

  let api = `https://rickandmortyapi.com/api/location/${number}`;

  let api2=`https://rickandmortyapi.com/api/location?name=${search}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api2).then((res) => res.json());
      setInfo(data.results[0]);
      console.log(data.results[0]);
      let a = await Promise.all(
        
        data.results[0].residents.map((x) => {
          return  fetch(x).then((res) => res.json());
        })
      );

      setResults(a);
    })();
  }, [api2]);

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      console.log(data);
      let a = await Promise.all(
        
        data.residents.map((x) => {
          return  fetch(x).then((res) => res.json());
        })
      );

      setResults(a);
    })();
  }, [api]);

  const allLocations = [
    "Earth (C-137)",
    "Abadango",
    "Citadel of Ricks",
    "Worldender's lair",
    "Anatomy Park",
    "Interdimensional Cable",
    "Immortality Field Resort",
    "Post-Apocalyptic Earth",
    "Purge Planet",
    "Venzenulon 7",
    "Bepis 9",
    "Cronenberg Earth",
    "Nuptia 4",
    "Giant's Town",
    "Bird World",
    "St. Gloopy Noops Hospital",
    "Earth (5-126)",
    "Mr. Goldenfold's dream",
    "Gromflom Prime",
    "Earth (Replacement Dimension)",
    "Testicle Monster Dimension",
    "Signus 5 Expanse",
    "Earth (C-500A)",
    "Rick's Battery Microverse",
    "The Menagerie",
    "Earth (K-83)",
    "Hideout Planet",
    "Unity's Planet",
    "Dorian 5",
    "Earth (Unknown dimension)",
    "Earth (J19ζ7)",
    "Roy: A Life Well Lived",
    "Eric Stoltz Mask Earth",
    "Earth (Evil Rick's Target Dimension)",
    "Planet Squanch",
    "Glaagablaaga",
    "Resort Planet",
    "Interdimensional Customs",
    "Galactic Federation Prison",
    "Gazorpazorp",
    "Hamster in Butt World",
    "Earth (Giant Telepathic Spiders Dimension)",
    "Alphabetrium",
    "Jerryboree",
    "Krootabulon",
    "Zigerion's Base",
    "Pluto",
    "Fantasy World",
    "Zeep Xanflorp's Miniverse",
    "Kyle's Teenyverse",
    "Larva Alien's Planet",
    "Earth (K-22)",
    "Mr. Meeseeks Box",
    "Vindicator's Base",
    "Pawn Shop Planet",
    "Mega Gargantuan Kingdom",
    "Gear World",
    "Earth (D-99)",
    "Earth (D716)",
    "Earth (D716-B)",
    "Earth (D716-C)",
    "Earth (J-22)",
    "Froopyland",
    "Detoxifier",
    "Trunk World",
    "Plopstar",
    "Blips and Chitz",
    "Girvonesk",
    "Earth (C-35)",
    "Snuffles' Dream",
    "Earth (Pizza Dimension)",
    "Earth (Phone Dimension)",
    "Greasy Grandma World",
    "Earth (Chair Dimension)",
    "Árboles Mentirosos",
    "Alien Day Spa",
    "Earth (Fascist Dimension)",
    "Snake Planet",
    "Forbodulon Prime",
    "Earth (Fascist Shrimp Dimension)",
    "Earth (Fascist Teddy Bear Dimension)",
    "Earth (Wasp Dimension)",
    "Monogatron Mothership",
    "Gorgon Quadrant",
    "Midland Quasar",
    "Mount Space Everest",
    "Globaflyn",
    "Heist-Con",
    "Heistotron Base",
    "Mount Olympus",
    "Plitzville Montana",
    "Earth (Tusk Dimension)",
    "Gramuflack",
    "Draygon",
    "New Improved Galactic Federation Quarters",
    "Story Train",
    "Non-Diegetic Alternative Reality",
    "Tickets Please Guy Nightmare",
    "Morty’s Story",
    "Ricks’s Story",
    "Glorzo Asteroid",
    "Alien Acid Plant",
    "Merged Universe",
    "Near-Duplicate Reality",
    "NX-5 Planet Remover",
    "Gaia",
    "Defiance's Ship",
    "Defiance's Base",
    "The Ocean",
    "Narnia Dimension",
    "Elemental Rings",
    "Morglutz",
    "Ferkus 9",
    "Morty",
    "Space",
    "Hell",
    "Z. Q. P. D.",
    "Space Tahoe",
    "France",
    "Birdperson's Consciousness",
    "Rick's Consciousness",
    "Avian Planet",
    "Normal Size Bug Dimension",
    "Slartivart",
    "Rick and Two Crows Planet",
    "Rick's Memories"
  ];
  

  return (

    <>
     <div className="Hero-section">
        <div className="container">
        <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
        <InputGroup name="Location" changeID={setNumber} total={126} options={allLocations} />          
        </div>
      </div>
    <div className="location-container">
      <div className="location-header">
        <h1>
          Location:{" "}
          <span className="text-primary">
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <h5>Dimension: {dimension === "" ? "Unknown" : dimension}</h5>
        <h6>Type: {type === "" ? "Unknown" : type}</h6>
      </div>
     
      <div className="Card-container">
        <Card page="/location/" results={results} />
      </div>
    </div>
    </>
  );
};

export default Locations;
