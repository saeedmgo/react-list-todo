import React from "react"
import "./Search.css"


const Search = () => {
    return(
        <div className="d-flex flex-row-reverse search">
            <input type="text" placeholder="جستجو ... "/>
            <button>جستحو</button>
        </div>
    )
}

export default Search