import './App.css';
import React, { createRef } from 'react';
import { useState } from 'react';


function App() {
  let count4 = 0;

  function task1() {
    console.log('task2');
  }
  function task2() {
    document.querySelector('.task-2').classList.add('active');
  }
  function task3(event) {
    console.log(event.target.value);
  }
  function task4() {
    count4++;
    console.log(count4);
  }
  function task5(event) {
    console.log(event.target.checked);
    if (event.target.checked == true) {
      document.querySelector(".out-5").innerHTML = event.target.value;
    } else {
      document.querySelector(".out-5").innerHTML = "0";

    }
  }

  let innerSel = React.createRef();
  const [fig, setFig] = useState('');
  function task6() {
    setFig(innerSel.current.value)
  }

  function task7() {
    function randomInt(a, b) {
      return Math.random() * (b - a) + a;
    }
    document.querySelector('.block-7').style.backgroundColor = `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

  }

  
  const [count, setCount] = useState('');
  function task8(event) {        
    if (!isNaN(+event.key)) {
      setCount(count +  "1");      
    } else {
      setCount(count + "0");      
    }
  }


  function task9(event) {
    document.querySelector('.out-9').innerHTML = event.target.value;
  }


  let ar10 = [5, 6, 7];
  function task10() {
    let arr = document.querySelector('.i-10').value;
    ar10.push(arr);
    console.log(ar10);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button onClick={task1} className="task-1">Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div onMouseEnter={task2} className="task-2"></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input onInput={task3} type="text" className="task-3" />
      </section>
      <section>
        <h2>Task 4</h2>
        <button onClick={task4} className="task-4">Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input onChange={task5} type="checkbox" currentValue="55" />
        <div className="out-5"></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select onChange={task6} ref={innerSel} className="task-6">
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div class="out-6">{fig}</div>

      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7"></div>
        <button onClick={task7} className="task-7">Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input onKeyPress={task8} type="text" className="task-8"></input>
        <div className="out-8">{count}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input onInput={task9} type="range" className="task-9"></input>
        <div className="out-9"></div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10"></input>
        <button onClick={task10} className="task-10">Push</button>
      </section>
    </>
  );
}

export default App;
