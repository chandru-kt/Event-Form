import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Events</Link>
        </li>
        <li>
          <Link to="/add-event">Add Event</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
