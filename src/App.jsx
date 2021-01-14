// import Counter from "./components/Counter.jsx";
// import Evento from "./components/Evento.jsx";
// import Lists from "./components/Lists.jsx";
// import Parrafo from "./components/Parrafo.jsx";
// import Variables from "./components/Variables.jsx";
// import Forms from "./components/Forms.jsx";
// import CrudSimple from "./components/CrudSimple.jsx";

import Comentario from "./components/Comentario.jsx";
import Saludo from "./components/Saludo.jsx";

function App() {
  return (
    <div className="App">
      <div className="container my-5">

        {/* llamado al componente Parrafo
        Los Nombres de componentes se deben nombrar con mayúscula inicial */}

        {/* <Parrafo/> */}
        {/* <Variables/> */}
        {/* <Evento/> */}
        {/* <Counter/> */}
        {/* <Lists/> */}
        {/* <Forms/> */}
        {/* <CrudSimple/> */}

        <Saludo persona="Farney" edad={38}/>
      </div>
    </div>
  );
}

export default App;
