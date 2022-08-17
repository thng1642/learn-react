import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import City from './City';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// this function component
// function Car(props) {
//   return <h2>Hi, this is car. My color is {props.color}</h2>;
// }

const page = (
  <>
    {/* <img src= {logo}/> import img (1) */}
    {/* <img src={require('./logo.png')} /> import img (2), use require. */}
    
    <City />
    
  </>

)

// Components in Components
// function Garage() {
//   return (
//     <>
//       <h1>Who lives in my Garage?</h1>
//       <Car color='red' />
//     </>
//   )
// }
// const myFistElement = <h1>Hello React!</h1>
ReactDOM.render(page, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
