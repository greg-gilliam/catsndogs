import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class DogHeader extends Component {
    render() { 
        return (             
        <header>
            <div>Dogs</div>
            <div className="links">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/dogs">Dog List</NavLink>
            </div>
        </header>
     );
    }
}
 
export default DogHeader;