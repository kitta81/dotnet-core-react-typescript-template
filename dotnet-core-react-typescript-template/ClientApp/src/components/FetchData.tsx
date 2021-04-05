import React, { FC, useEffect, useState } from 'react';

type Forecast = {
  date: Date;
  temperatureC: number;
  temperatureF: number;
  summary: string;
};

type State = {
  forecasts: Forecast[];
  loading: boolean;
};

export const FetchData: FC = () => {
  const [state, setState] = useState<State>({ forecasts: [], loading: true });

  useEffect(() => {
    populateWeatherData();
  }, []);

  const populateWeatherData = async () => {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    setState({ forecasts: data, loading: false });
  };

  const renderForecastsTable = (forecasts: Forecast[]) => {
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
            <tr key={Number(forecast.date)}>
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
