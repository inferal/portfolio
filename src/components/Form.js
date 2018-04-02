import React, { Component } from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="Город..." />
      <input type="text" name="country" placeholder="Страна..." />
      <button>Прогноз погоды</button>
    </form>
  );
};

export default Form;
