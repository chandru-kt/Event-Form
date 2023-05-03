const BASE_URL = 'http://127.0.0.1:8000';

async function fetchEvents() {
  const response = await fetch(`${BASE_URL}/events/`);
  const events = await response.json();
  return events;
}

async function toggleLike(eventId) {
  const response = await fetch(`${BASE_URL}/events/${eventId}/like/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${localStorage.getItem('token')}`,
    },
  });
  const updatedEvent = await response.json();
  return updatedEvent;
}

async function createEvent(formData) {
  const response = await fetch(`${BASE_URL}/events/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(formData),
  });
  const newEvent = await response.json();
  return newEvent;
}

export { fetchEvents, toggleLike, createEvent };
