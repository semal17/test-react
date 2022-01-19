import './App.css';
import React, { useState } from 'react';


function App() {
  const h1 = React.createElement('h1', {}, 'unit08');
  const h2 = React.createElement('h2', { 'className': 'text-orange' }, 'header 2');
  const p = React.createElement('p', { 'style': { 'color': 'red' } }, 'this is p');
  const input = React.createElement('input', { 'value': '55' });
  const p1 = React.createElement('p', {}, 'hi');
  const p2 = React.createElement('p', {}, 'world');
  const div = React.createElement('div', { 'className': 'text-grey' }, p1, p2);


  let rin = React.createRef();
  const [li, setLi] = useState();
  let checkIn = () => {
    if (rin.current.value !== '') {
      setLi(React.createElement('li', {}, rin.current.value));
    }
  };


  return (
    <>
      {h1}
      {h2}
      {p}
      {div}
      {input}
      <input ref={rin}></input>
      <button onClick={checkIn}>Button</button>
      <ul>{li}</ul>
    </>
  )
}


export default App;
