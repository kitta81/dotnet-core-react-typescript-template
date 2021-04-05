import React, { useEffect, useState } from 'react';

export const FetchData = () => {
  const [state, setState] = useState({ forecasts: [], loading: true });

  useEffect(() => {
    populateWeatherData();
  }, []);

  const populateWeatherData = async () => {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    setState({ forecasts: data, loading: false });
  };

  const renderForecastsTable = (forecasts) => {
    return (
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast) => (
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  let contents = state.loading ? (
    <p>
      <em>Loading...</em>
    </p>
  ) : (
    renderForecastsTable(state.forecasts)
  );

  return (
    <div>
      <h1 id="tabelLabel">Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>
      {contents}
    </div>
  );
};
