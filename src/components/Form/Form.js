// Form.js

import React, { useState } from 'react';
import './Form.css';

const Form = () => {

  const [formData, setFormData] = useState({
    date: '',
    day: '',
    favouriteCricketer: 'Select here', 
    skillsYouLiked: [],
    cricketForYou: '',
    shareYourMoments: '',
    somethingAboutYourFavCricketPlayer: '',
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox'
        ? (checked ? [...prevData[name], value] : prevData[name].filter(skill => skill !== value))
        : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for filling the form');
    window.location.reload();
  };

  return (
    <div className="form-container">
      <h1>Share Your Cricket Passion</h1> 
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="day">Day:</label>
          <input type="text" name="day" value={formData.day} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="favouriteCricketer">Favorite Cricketer:</label>
          <select name="favouriteCricketer" value={formData.favouriteCricketer} onChange={handleChange}>
            <option value="Select here">Select here</option> 
            <option value="dhoni">Dhoni</option>
            <option value="kohli">Kohli</option>
            <option value="sachin">Sachin</option>
            <option value="rohit">Rohit</option>
            <option value="yuvraj">Yuvraj</option>
            <option value="jadeja">Jadeja</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="skillsYouLiked">Skills You Liked:</label>
          <div>
            <input type="checkbox" name="skillsYouLiked" value="batting" onChange={handleChange} />
            <span>Batting</span>
          </div>
          <div>
            <input type="checkbox" name="skillsYouLiked" value="spinning" onChange={handleChange} />
            <span>Spinning</span>
          </div>
          <div>
            <input type="checkbox" name="skillsYouLiked" value="wicketKeeping" onChange={handleChange} />
            <span>Wicket Keeping</span>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="skillsYouLiked">Which types of cricket matches do you enjoy watching the most?</label>
          <div>
            <input type="checkbox" name="skillsYouLiked" value="testMatches" onChange={handleChange} />
            <span>Test Matches</span>
          </div>
          <div>
            <input type="checkbox" name="skillsYouLiked" value="t20Internationals" onChange={handleChange} />
            <span>T20 Internationals (T20Is)</span>
          </div>
          <div>
            <input type="checkbox" name="skillsYouLiked" value="domesticLeagues" onChange={handleChange} />
            <span>Domestic T20 Leagues (e.g., IPL)</span>
          </div>
          <div>
            <input type="checkbox" name="skillsYouLiked" value="womensCricket" onChange={handleChange} />
            <span>Women's Cricket Matches</span>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="skillsYouLiked">Which cricketing records do you find the most fascinating?</label>
          <div>
            <input type="checkbox" name="skillsYouLiked" value="internationalCenturies" onChange={handleChange} />
            <span>Most International Centuries</span>
          </div>
          <div>
            <input type="checkbox" name="skillsYouLiked" value="odiIndividualScore" onChange={handleChange} />
            <span>Highest Individual Score in an ODI</span>
          </div>
          <div>
            <input type="checkbox" name="skillsYouLiked" value="testBowlingFigures" onChange={handleChange} />
            <span>Best Bowling Figures in Test Cricket</span>
          </div>
          <div>
            <input type="checkbox" name="skillsYouLiked" value="t20iWickets" onChange={handleChange} />
            <span>Most Wickets in T20 Internationals</span>
          </div>
          <div>
            <input type="checkbox" name="skillsYouLiked" value="fastestT20Century" onChange={handleChange} />
            <span>Fastest Century in T20s</span>
          </div>
        </div>

        <div className="form-group">
  <label htmlFor="cricketForYou">Cricket For You:</label>
  <div>
    <input
      type="radio"
      name="cricketForYou"
      value="justLovedIt"
      checked={formData.cricketForYou === 'justLovedIt'}
      onChange={handleChange}
    />
    <span>Just Loved It</span>
  </div>
  <div>
    <input
      type="radio"
      name="cricketForYou"
      value="anythingForCricket"
      checked={formData.cricketForYou === 'anythingForCricket'}
      onChange={handleChange}
    />
    <span>Anything for Cricket</span>
  </div>
</div>

<div className="form-group">
  <label htmlFor="favoriteCricketMoment">Favorite Cricket Moment:</label>
  <div>
    <input
      type="radio"
      name="favoriteCricketMoment"
      value="worldCupWinningSix"
      checked={formData.cricketForYou === 'worldCupWinningSix'}
      onChange={handleChange}
    />
    <span>World Cup Winning Six</span>
  </div>
  <div>
    <input
      type="radio"
      name="favoriteCricketMoment"
      value="hatTrickByBowler"
      checked={formData.cricketForYou === 'hatTrickByBowler'}
      onChange={handleChange}
    />
    <span>Hat-Trick by a Bowler</span>
  </div>
</div>

        <div className="form-group">
          <label htmlFor="shareYourMoments">Share Your Moments:</label>
          <textarea name="shareYourMoments" value={formData.shareYourMoments} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="somethingAboutYourFavCricketPlayer">Something about your fav cricket player:</label>
          <textarea
            name="somethingAboutYourFavCricketPlayer"
            value={formData.somethingAboutYourFavCricketPlayer}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
