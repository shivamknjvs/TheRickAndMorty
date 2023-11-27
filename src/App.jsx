
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Background from './assets/background.svg'

import Search from "./Components/Search/Search";
import Card from "./Components/Card/Card";
import Pagination from "./Components/Pagination/Pagination";
import Filter from "./Components/Filter/Filter";

import Episodes from "./Pages/Episodes/Episodes";
import Locations from "./Pages/Locations/Locations";
import CardDetails from "./Components/CardDetails/CardDetails";

function App() {
  
  return (
    <Router>
      <Navbar />

      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  )
}

const Home = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
    console.log(api);
  }, [api]);
  return (
   <>
    <div className="Hero-section">
     
      <div className="container">
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
        <div className="filter">
          <Filter
            pageNumber={Math.ceil(pageNumber)}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          />

    </div>
  </div>
 
  </div>
  <div className="app-container">
     
    <Card page="/" results={results} />
       
    </div>
    <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
</>

 
  );

};

export default App; 
