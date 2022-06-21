import React, { Component, useEffect, useState } from "react";
import axios from 'axios'

function SearchBar({placeholder}) {
    const [users, setUsers] = useState()

    useEffect (() => {
        getUsers()
    }, [])

    function getUsers () {
        axios.get('http://localhost:8080/api/users')
        .then((response => {
            const allUsers = response.data
            setUsers(allUsers)
        }))
        .catch( error => console.log(error))
    }

    return (
        <div>
            {console.log(users.map(user => {
                user.email
            }))}
            <h1>Add Friends</h1>
            <div className="search">
                <div className="searchInput">
                    <input type="text" placeholder={placeholder}></input>
                </div>
                <div className="searchResults">
                </div>
            </div>
        </div>      
        )
}

export default SearchBar