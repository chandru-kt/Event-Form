import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { fetchEvents, toggleLike, createEvent } from './api';
import Events from './Events';
import Login from './Login';
import Register from './Register';
import NewEventForm from './NewEventForm';

function App() {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchEvents();
      setEvents(data);
    }
    fetchData();
  }, []);

  async function handleLike(eventId) {
    await toggleLike(eventId);
    const updatedEvents = await fetchEvents();
    setEvents(updatedEvents);
  }

  async function handleNewEvent(formData) {
    const newEvent = await createEvent(formData);
    setEvents([...events, newEvent]);
  }

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/new-event">New Event</Link>
                </li>
                <li>
                  <Link to="/" onClick={() => setUser(null)}>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        <Route exact path="/">
          <Events events={events} onLike={handleLike} />
        </Route>

        <Route path="/login">
          <Login onLogin={setUser} />
        </Route>

        <Route path="/register">
          <Register onRegister={setUser} />
        </Route>

        <Route path="/new-event">
          <NewEventForm onSubmit={handleNewEvent} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
