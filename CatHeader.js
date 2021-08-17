import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class CatHeader extends Component {
    render() { 
        return (             
        <header>
            <div>Cats</div>
            <div className="links">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/cats">Cat List</NavLink>
            </div>
        </header>
     );
    }
}
 
export default CatHeader;