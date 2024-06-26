import './App.css';
import Mensaje from "./MensajeModulo";

const Description = ({colorLetra}) => {
  return <p style={{color:colorLetra}}>Esta es la descripcion con un componente que devuelve un p </p>
}
const App = () => {
  return (
      <>
          <Mensaje color="green" msg="Estoy probando los props o params de jsx"></Mensaje>
          <Description colorLetra="red"></Description>
      </>
      /*
      JSX
        <div className="App">
            <Mensaje color="green" msg="Estoy probando los props o params de jsx"></Mensaje>
            <Description></Description>
        </div>
       */

      /*JSX CON FRAGMENTS=(<></>)*/
  );
}

export default App;
