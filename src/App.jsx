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
];

function TransactionsPanel(movements) {
  return <div>
  {/**Movements es un array de objetos, para cada objeto quiero transformarlo en jsx, concretamente en un parrafo que contiene cada concepto y el valor */}
  {/**React necesita siempre una key cuando renderizas una lista */}
    {movements.map(m => <p key={m.id} >{m.concept} - {m.value}</p>)}
  </div>
}

function App() {
  return (
    <div>
      <TransactionsPanel movements={transactions} />
      {/* <h1>React</h1>
    <Tarjeta titulo="Soy un gato" descripcion="miau!!" />
    <Tarjeta titulo="Soy un perro" descripcion="guauuu!!" />
    <Tarjeta titulo="raton" descripcion= "dhsbdhsbd"/>
    <PackingList/> */}
    </div>
  );
}
export default App;
