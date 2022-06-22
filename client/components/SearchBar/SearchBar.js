import React, { Component, useEffect, useState } from "react";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";

function SearchBar({placeholder}) {
    const [users, setUsers] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [currentUser, setCurrentUser] = useState({})

    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth)
    

    useEffect (() => {
        getUsers();
        setCurrentUser(user)
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
        const filter = users.filter((value) => {
            return value.email.indexOf(searched) >= 0
        })
        setFilteredData(filter)
    }

    const addFriend = (friendUUID) => {
        console.log('currentUser', currentUser.UUID)
        console.log('friendUUID', friendUUID)
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
                    {filteredData.map(user => {
                        // console.log('filteredData', filteredData)
                        return <div key={user.UUID}>
                            <a>{user.email}<button onClick={() => addFriend(user.UUID)}>+</button></a>
                        </div>
                    })}
                </div>
            </div>
        </div>      
        )
}

export default SearchBar
