import React, { Component, useEffect, useState } from "react";
import axios from 'axios'

function SearchBar({placeholder}) {
    const [users, setUsers] = useState([])
    const [filteredData, setFilteredData] = useState([])

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

    const userEmails = users.map(user => {
        return user.email})
    
    const handleFilter = (event) => {
        const searched = event.target.value
        const filter = userEmails.filter((value) => {
            return value.includes(searched)
        })
        setFilteredData(filter)
    }

    console.log('users', users)

    return (
        <div>
            <h1>Add Friends</h1>
            <div className="search">
                <div className="searchInput">
                    <input type="text" placeholder={placeholder} onChange={handleFilter}></input>
                </div>
                    <div className="searchResults">
                    {users.map(user => {
                        return <div key={user.UUID}>
                            <a>{user.email}<button>+</button></a>
                        </div>
                    })}
                </div>
            </div>
        </div>      
        )
}

export default SearchBar