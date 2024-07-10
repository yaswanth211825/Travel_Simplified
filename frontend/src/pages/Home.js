import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: ''
  });

  const { from, to, date } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    // Add your search logic here
  };

  return (
    <div className="home">
      <div className="search-bar">
        <form onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              placeholder="From"
              name="from"
              value={from}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="To"
              name="to"
              value={to}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <input
              type="date"
              name="date"
              value={date}
              onChange={onChange}
              required
            />
          </div>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
