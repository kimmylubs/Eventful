import React, { Component } from "react";
import axios from 'axios'

function SearchBar({placeholder, data}) {
    const users = () => {
        axios.get('http://localhost:8080/api/users')
        .then((response => {
            const allUsers = response.data
            console.log('--allUsers--', allUsers)
        }))
        .catch( error => console.log(error))
    }
    users()
    return (
        <div>
            <h1>Add Friends</h1>
        
            <div className="search">
                <div className="searchInput">
                    <input type="text" placeholder={placeholder}></input>
                </div>
                <div className="searchResults"></div>
            </div>
        </div>      
        )
}

export default SearchBar