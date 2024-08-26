import React from "react";
import Day from "./Day";

export default function Weather({ weather, location }) {
  const { temperature_2m_max, temperature_2m_min, time, weathercode } = weather;
  return (
    <div>
      <h2>Weather {location}</h2>
      <ul className="weather">
        {time.map((date, i) => (
          <Day
            date={date}
            max={temperature_2m_max.at(i)}
            min={temperature_2m_min.at(i)}
            code={weathercode.at(i)}
            key={date}
            isToday={i === 0}
          />
        ))}
      </ul>
    </div>
  );
}
