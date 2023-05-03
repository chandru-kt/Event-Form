import React from 'react';

function Events({ events, onLike }) {
  return (
    <div>
      <h1>Events</h1>
      {events.map(event => (
        <div key={event.id}>
          <h2>{event.event_name}</h2>
          <p>{event.date} at {event.time}</p>
          <p>{event.location}</p>
         

{event.image && (
    <img src={event.image} alt={event.event_name} style={{ maxWidth: 400 }} />
  )}
  <button onClick={() => onLike(event.id)}>
    {event.is_liked ? 'Unlike' : 'Like'}
  </button>
</div>
))}
</div>
);
}

export default Events;