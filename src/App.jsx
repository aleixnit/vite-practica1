import "./App.css";
import Tarjeta from "./Tarjeta";

/** Componente funcional que representa una tarjeta
 * - Me gustaria poder configurar el titulo y su descripcion
 */

/**Por convencion le llamamos a la variable que contiene todas la spropiedades que nos pasan props. */


function App() {
  return (
  <div>
    <h1>React</h1>
    <Tarjeta titulo="Soy un gato" descripcion="miau!!" />
    <Tarjeta titulo="Soy un perro" descripcion="guauuu!!" />
    <Tarjeta titulo="raton" descripcion= "dhsbdhsbd"/>
  </div>
  )
}
export default App;

