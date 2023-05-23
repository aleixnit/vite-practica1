import "./App.css";
import Tarjeta from "./Tarjeta";
import PackingList from "./PackingList";

/** Componente funcional que representa una tarjeta
 * - Me gustaria poder configurar el titulo y su descripcion
 */

/**Por convencion le llamamos a la variable que contiene todas la spropiedades que nos pasan props. */
const transactions = [
  {
    id: 1,
    concept: "Initial balance",
    value: 2000,
  },
  {
    id: 2,
    concept: "Delicious Iranian lunch",
    value: -20,
  },
  {
    id: 3,
    concept: "Payroll",
    value: 1300,
  },
];

function TransactionsPanel({ movements, type }) {
  /**
   * If the value of variable 'type' is 'deposit', you should filter movements array to keep only the transactions that have a positive value
   *
   * If the value of variable 'type' is 'withdraw', you should filter movements array to keep only the transactions that have a negative value
   */
let filteredMovements = movements;
if(type == "deposit") {
  filteredMovements = movements.filter(m => m.value > 0);
} else if (type == "withdraw") {
  filteredMovements = movements.filter(m => m.value < 0);
}



  let jsxMovements = filteredMovements.map((m) => (
    <p key={m.id} style={{ color: m.value > 0 ? "#98fb98" : "#d65050" }}>
      The concept is {m.concept} and the value is {m.value}
    </p>
  ));



  return (
    <div>
      {/* movements is an array of objects. We transform each object into a <p> tag. Its content it's the transacion concept and value */}
      {/* React need an unique id for each element rendered from a list. */}
      {/* We'll use a ternary operator to evaluate m.value. If m.value is greater than 0, backgroundColor should be set to green. Otherwise, it should be set to red.*/}
      {jsxMovements}
    </div>
  );
}

function App() {
  return (
    <>
      {/* TransactionPanel must accept a new prop. Its value may be "all", "withdraw", "deposit" */}
      <TransactionsPanel movements={transactions} type="deposit" />
      {/* <p>{new Date().toLocaleDateString()}</p>
      <Tarjeta titulo="Gato" descripcion="Miau!" />
      <Tarjeta titulo="Perro" descripcion={descripcionPerro} /> */}
    </>
  );
}

export default App;
