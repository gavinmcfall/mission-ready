"use strict";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userEnteredCity, setUserEnteredCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [currentCity, setCurrentCity] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [formattedTime, setFormattedTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setUserEnteredCity(e.target.value);
  };

  useEffect(() => {
    const callWeatherAPI = async () => {
      if (currentCity) {
        try {
          const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=14aac7f0098d4ece82662447241107&q=${currentCity}&aqi=no`
          );
          if (!response.ok) {
            throw new Error("City not found");
          }
          const data = await response.json();
          console.log(data);
          setWeatherData(data);
          setErrorMessage(""); // Clear any previous error messages
          if (data && data.location && data.location.localtime) {
            const { day, time } = formatTime(data.location.localtime);
            setDayOfWeek(day);
            setFormattedTime(time);
          }
        } catch (error) {
          console.error("Error fetching weather data: ", error);
          setWeatherData(null);
          setErrorMessage("City not found. Please enter a valid city.");
        }
      }
    };

    callWeatherAPI();
  }, [currentCity]); // Dependency array, the effect runs when `currentCity` changes

  const handleClick = (event) => {
    event.preventDefault();
    setCurrentCity(userEnteredCity); // This will trigger the useEffect to call the API
  };

  const formatTime = (time) => {
    const date = new Date(time);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayName = days[date.getDay()];
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? "0" + minutes : minutes;
    const formattedTime = `${hours}:${minutesStr} ${ampm}`;
    return { day: dayName, time: formattedTime };
  };

  return (
    <>
      <div>
        <h1>Weather APP</h1>

        <form className="interaction">
          Enter your city: <input type="text" onChange={handleChange} />
          <button onClick={handleClick}>Search!!</button>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {weatherData && (
          <div className="currentWeather">
            <p>
              It's currently <b>{formattedTime}</b> in{" "}
              {weatherData.location.name}
            </p>
            <p>
              The temperature is {weatherData.current.temp_c}°c today (
              {dayOfWeek})
            </p>
            <p>
              Humidity of {weatherData.current.humidity}% and wind speed of{" "}
              {weatherData.current.wind_kph} km/h
            </p>
          </div>
        )}
        {weatherData && (
          <div className="forecast">
            <p className="weather-info">
              <span>
                It's {weatherData.current.condition.text.toLowerCase()} today{" "}
              </span>
            </p>
            <img
              src={weatherData.current.condition.icon}
              alt="weather condition icon"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
