import React, { useState } from 'react';

function NewEventForm({ onSubmit }) {
  const [eventData, setEventData] = useState({
    event_name: '',
    date: '',
    time: '',
    location: '',
    image: '',
  });

  function handleChange(event) {
    setEventData({
      ...eventData,
      [event.target.name]: event.target.value,
    });
  }

  function handleImageChange(event) {
    setEventData({
      ...eventData,
      [event.target.name]: URL.createObjectURL(event.target.files[0]),
      imageFile: event.target.files[0],
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('event_name', eventData.event_name);
    formData.append('date', eventData.date);
    formData.append('time', eventData.time);
    formData.append('location', eventData.location);
    if (eventData.imageFile) {
      formData.append('image', eventData.imageFile);
    }
    onSubmit(formData);
    setEventData({
      event_name: '',
      date: '',
      time: '',
      location: '',
      image: '',
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Event</h1>
      <label>
        Event Name:
        <input type="text" name="event_name" value={eventData.event_name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Date:
        <input type="date" name="date" value={eventData.date} onChange={handleChange} />
      </label>
      <br />
      <label>
        Time:
        <input type="time" name="time" value={eventData.time} onChange={handleChange} />
      </label>
      <br />
      <label>
        Location:
        <input type="text" name="location" value={eventData.location} onChange={handleChange} />
      </label>
      <br />
      <label>
        Image:
        <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
      </label>
      <br />
      {eventData.image && (
        <img src={eventData.image} alt={eventData.event_name} style={{ maxWidth: 400 }} />
      )}
      <br />
      <button type="submit">Add Event</button>
    </form>
  );
}

export default NewEventForm;
