import './App.css';
import React, { useState } from 'react';
import goodsArr from './goods.json';
import Goods from './Goods';
import Cart from './Cart';

function App() {
  const [cart, setCart] = useState({});
  const [count, setCount] = useState(0);

  let addToCart = (event) => {
    if (!event.target.classList.contains('add-to-cart')) return false;
    let cartTemp = cart;
    cartTemp[event.target.dataset.key] ? cartTemp[event.target.dataset.key]++ : cartTemp[event.target.dataset.key] = 1;
    setCart(cartTemp);
    let countAdd = count;
    countAdd++;
    setCount(countAdd);
  }

  let showCart;
  if (count !== 0) {
    showCart = <Cart cart={cart} goods={goodsArr} />;
  }
  else {
    showCart = 'Empty';
  }



  return (
    <div className="container">
      <h1>Cart</h1>
      <div className="goods-field" onClick={addToCart}>
        {goodsArr.map(item => <Goods title={item.title} cost={item.cost} image={item.image} articul={item.articul} key={item.articul} />)}
        {showCart}
      </div>
    </div>
  );
}


export default App;
