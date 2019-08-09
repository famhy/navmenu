import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./bootstrap.min.css";
function Navitem(props) {
  return (
     props.newlist!==""?<li><a href={props.link}>{props.name}</a>{props.newlist}</li>:<li><a href={props.link}>{props.name}</a></li>
  );
}
Navitem.defaultProps={
    link:"#" ,
    newlist:""
}
export default Navitem;
