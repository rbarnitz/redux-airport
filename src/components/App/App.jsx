import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import storeInstance from '../..';

function App() {
  const [airlineName, setAirlineName] = useState('');
  const airline = useSelector((state) => state.airline);

  const dispatch = useDispatch();

  function submit(event) {
    event.preventDefault();

    dispatch({
      type: 'AIRLINE_NAME',
      payload: airlineName,
    });

    console.log(storeInstance.getState());

    console.log(airlineName);
  }

  function handleChange(event) {
    setAirlineName(event);
  }

  return (
    <div>
      <h1>Redux Airport</h1>
      <form onSubmit={submit}>
        <input
          placeholder="Airline Name"
          value={airlineName}
          onChange={(event) => handleChange(event.target.value)}
        />
        <button type="submit">ADD AIRLINE!</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Airline Name</th>
          </tr>
        </thead>
        <tbody>
          {airline.map((airline, index) => (
            <tr key={index}>
              <td>{airline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
