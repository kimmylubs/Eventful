import { Search } from "@mui/icons-material";
import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar"

class UserCalendar extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <h1>Calendar Test Page</h1>
                <button>RSVP</button>
                <SearchBar placeholder="Search User By Email"/>
            </div>      
        )
    }
}

export default UserCalendar