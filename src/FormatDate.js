import React from "react";

export default function FormattedDate() {
  let now = new Date();
  let days=["Sunday", "Monday", "Tuesday","wednesday","Thursday","Friday","Saturday"];
  let day = days[now.getDay()];
  let minutes = now.getMinutes();
  let hour = now.getHours();
  
  
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return(<span>{day} {hour}:{minutes}</span> );

}