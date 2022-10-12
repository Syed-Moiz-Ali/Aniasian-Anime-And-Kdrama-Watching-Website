import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FiSearch } from "react-icons/fi";


import "./Search.scss";

function AnimeSearch() {
  const [title, setTitle] = useState("");
 
  
  function refreshPage() {
    window.location.reload(false);
  }
  const navigate = useNavigate();

  function searchEnter() {
    if (title !== "") {
      
      navigate(`/anime/search/Akeyword=` + title);
      refreshPage()
    }
  }


  return (
    <>
  
      <div className="search-input">
        <div className="main">
          <input
            type="text"
            required
            placeholder={"Search here..."}
            value={title}
            autoFocus
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                searchEnter();
              }
            }}
          />
        </div>
        <div className="btn" onClick={refreshPage}>
          
            <Link to={`/anime/search/Akeyword=` + title}
            
            >
              <FiSearch />
            </Link>
         
          
        </div>
       
      </div>
     
       
    </>
  );
}

export default AnimeSearch;
