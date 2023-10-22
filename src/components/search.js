import React from "react";
import "./search.css";

const Search = ({change, searchField}) => {
    
        return(
            <div className="box">
                <h2>Search and get details of your friend ROBOT</h2>
                <form>
                    <input className="input" type="search" placeholder="Type..." onChange = {change}  />
                </form>
            </div>
        );
    
}

export default Search;