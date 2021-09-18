import { useState } from "react";
import "./styles.css";

var billAmount = false;

var mappings = {
  "1": "1",
  "2": "5",
  "3": "10",
  "4": "20",
  "5": "50",
  "6": "100",
  "7": "200",
  "8": "500",
  "9": "1000"
};

var change = [1000, 500, 100, 20, 10, 1];
var amt = 0,
  totalamt = 0;

export default function App() {
  const [billAmount, setbillAmount] = useState(false);
  var [denominations, setDenominations] = useState([0, 0, 0, 0, 0, 0]);
  function billHandler(event) {
    amt = Number(event.target.value);
    setbillAmount(true);
  }
  function totalAmountHandler(event) {
    totalamt = Number(event.target.value);
  }
  function populate() {
    let bal = totalamt - amt;
    console.log(bal);
    for (let i = 0; i < change.length; i++) {
      denominations[i] = Math.floor(bal / change[i]);
      bal = bal - denominations[i] * change[i];
    }
    denominations.map((val) => console.log(val));
    setDenominations([...denominations]);
  }
  return (
    <div className="App">
      <h1>Cash register manager</h1>
      <p>
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return.
      </p>
      <label>Bill amount</label>
      <input id="amount" onChange={billHandler} />
      {billAmount === true && (
        <div>
          <label>Cash given</label>
          <input id="amount" onChange={totalAmountHandler} />
          <button onClick={populate}>check</button>
        </div>
      )}

      <div class="table">
        <p id="returnChange">Return change</p>
        <table class="table">
          <tbody>
            <tr class="tablerow">
              <td class="tablecell">Number of notes</td>
              {denominations.map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
            <tr class="tablerow">
              <td class="tablecell">Denominations</td>
              {change.map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
