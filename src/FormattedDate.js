//import React from "react";


export default function FormattedDate(props){
  let days =["Sunday", "Monday", "Tuesday","wednesday","Thursday","Friday","Saturday"];
  let day = days[props.date.getDay()]
  let minutes = props.date.getMinutes();
  let hour = props.date.getHours();
  
  
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  
  return(`${day} ${hour}:${minutes}`)
  
}