import React, { Component } from "react";

const Weather = props => {
  return (
    <div className="weather__info">
      {props.city &&
        props.country && (
          <p className="weather__key">
            Место нахождения:{" "}
            <span className="weather__value">
              {props.city}, {props.country}
            </span>
          </p>
        )}
      {props.temperature && (
        <p className="weather__key">
          Температура: <span className="weather__value">{props.temperature}</span> С
        </p>
      )}
      {props.humidity && (
        <p className="weather__key">
          Влажность: <span className="weather__value">{props.humidity}</span>
        </p>
      )}
      {props.description && (
        <p className="weather__key">
          Описание: <span className="weather__value">{props.description}</span>
        </p>
      )}
      {props.error && <p className="weather__error">{props.error}</p>}
    </div>
  );
};

export default Weather;
