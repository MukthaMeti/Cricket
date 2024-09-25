// src/components/table/Table.js
import React from 'react';
import './Table.css'; // Import your CSS file
import worldCup2011Winners from './worldCup2011Data'; // Adjust the path as needed

function Table() {
  return (
    <div className="table-container">
      <h1>2023 World Cup Winners</h1>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Role</th>
            <th>Batting Style</th>
            <th>Bowling Style</th>
            <th>Runs</th>
            <th>Wickets</th>
          </tr>
        </thead>
        <tbody>
          {worldCup2011Winners.map(player => (
            <tr key={player["Player Name"]}>
              <td>{player["Player Name"]}</td>
              <td>{player["Role"]}</td>
              <td>{player["Batting Style"]}</td>
              <td>{player["Bowling Style"]}</td>
              <td>{player["Runs"]}</td>
              <td>{player["Wickets"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;