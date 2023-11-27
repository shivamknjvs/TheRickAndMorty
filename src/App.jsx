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
  // Main App Component that sets up the routing structure

  return (
    <Router>
      {/* Navigation Bar Component */}
      <Navbar />

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  // Home Component representing the main page

  // State variables for managing page number, filtering options, and fetched data
  let [pageNumber, updatePageNumber] = useState(1);
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let { info, results } = fetchedData;

  // API URL for fetching character data based on filters and page number
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  // Effect hook to fetch data when component mounts or when dependencies change
  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch(api);
        
        if (!data.ok) {
          throw new Error(`Error fetching data from ${api}`);
        }
  
        data = await data.json();
        updateFetchedData(data);
      } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
        window.alert("Please enter valid character");
      }
    };
  
    fetchData();
  }, [api]);
  

  return (
    <>
      {/* Hero section with search, filters, and background */}
      <div className="Hero-section">
        <div className="container">
          {/* Search Component */}
          <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
          {/* Filter Component */}
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

      {/* Container for displaying character cards */}
      <div className="app-container">
        {/* Card Component */}
        <Card page="/" results={results} />
      </div>

      {/* Pagination Component */}
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </>
  );
};

export default App;
