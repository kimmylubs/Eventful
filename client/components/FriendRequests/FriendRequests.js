import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'

function FriendRequests() {
    // const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState({})
    const [friendReq, setFriendReq] = useState([])
    const user = useSelector((state) => state.auth)

    useEffect (() => {
        setCurrentUser(user)
        getRequests()
    }, [])

    console.log('--userID--', user.id)
    console.log('--requests--', friendReq)

    function getRequests () {
        axios.get('http://localhost:8080/api/friendships/')
        .then((response => {
            const requests = response.data
            setFriendReq(requests)
        }))
        .catch( error => console.log(error))
    }

    return (
        <div className="friendRequests-main">
            <h1>Incoming Friend Requests</h1>
            {friendReq.map((req) => {
                return <div key={req.id}>
                    <a>{req.info.username}<button>approve</button><button>decline</button></a>
                </div>
            })}
        </div>
    )
}

export default FriendRequests