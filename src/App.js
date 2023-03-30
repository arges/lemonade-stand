import React, { useState, useEffect } from 'react';

function App() {
  const [game, setGame] = useState({
    balance: 100,
    cupsSold: 0,
    cost: 1.0,
    customerRate: 0.5,
    cups: 1,
    lemonadeMix: 1,
    lemonadeLiters: 0.0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if ((game.cups > 0) && (game.lemonadeLiters >= 0.25)) {
        setGame({
          ...game,
          cups: game.cups - 1,
          lemonadeLiters: game.lemonadeLiters - 0.25,
          cupsSold: game.cupsSold + 1,
          balance: game.balance + game.cost,
        });
      }
    }, (1 / game.customerRate) * 1000);

    return () => clearInterval(interval);
  }, [game]);

  const handleBuyCups = () => {
    if (game.balance >= 5) {
      setGame({
       ...game,
       cups: game.cups + 12,
       balance: game.balance - 5,
     });
    }
  };

 const handleBuyMix = () => {
    if (game.balance >= 5) {
      setGame({
       ...game,
       lemonadeMix: game.lemonadeMix + 1,
       balance: game.balance - 5,
     });
    }
  };

  const handleMakeLemonade = () => {
    if (game.lemonadeMix > 0) {
      setGame({
       ...game,
       lemonadeMix: game.lemonadeMix - 1,
       lemonadeLiters: game.lemonadeLiters + 2,
     });
    }
  };

  const handleAdvertise = () => {
    if (game.balance >= 10) {
      setGame({
       ...game,
       balance: game.balance - 10,
       customerRate: game.customerRate + 0.5,
     });
    }
  };

  const handleCostIncrease = () => {
      setGame({
       ...game,
       cost: game.cost + 1,
       customerRate: game.customerRate - 0.5,
     });
  };

  const handleCostDecrease = () => {
    if (game.cost > 1) {
      setGame({
       ...game,
       cost: game.cost - 1,
       customerRate: game.customerRate + 0.5,
     });
    }
  };

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th colSpan="2">Lemonade Stand - The Game 🍋🧍</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Balance 💲:</td>
                    <td>${game.balance}</td>
                </tr>
                <tr>
                    <td>Cups Sold 🥤:</td>
                    <td>{game.cupsSold}</td>
                </tr>
                <tr>
                    <td>Cost per Cup:</td>
                    <td>${game.cost}</td>
                </tr>
                <tr>
                    <td>Lemonade (L):</td>
                    <td>{game.lemonadeLiters}</td>
                </tr>
                <tr>
                    <td>Lemonade Mixes:</td>
                    <td>{game.lemonadeMix}</td>
                </tr>
                <tr>
                    <td>Cups:</td>
                    <td>{game.cups}</td>
                </tr>
                <tr>
                    <td>Customers per Second 🧍:</td>
                    <td>{game.customerRate}</td>
                </tr>
            </tbody>
        </table>

        <table>
            <tr>
                <th colSpan="2">Actions</th>
            </tr>
            <tbody>
                <tr>
                    <button onClick={handleMakeLemonade}>Make Lemonade 🍋</button>
                </tr>
                <tr>
                    <button onClick={handleBuyMix}>Buy Mix ($5) 🥫</button>
                    <button onClick={handleBuyCups}> Buy Cups ($5) 🥤</button>
                </tr>
                <tr>
                    <button onClick={handleCostIncrease}>Cost +$1</button>
                    <button onClick={handleCostDecrease}> Cost -$1</button>
                </tr>
                <tr>
                    <button onClick={handleAdvertise}>Advertise ($10) 📰</button>
                </tr>
            </tbody>
        </table>
    </div>
  );
}

export default App;

