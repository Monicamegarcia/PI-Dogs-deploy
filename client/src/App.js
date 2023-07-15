import './App.css'
import { Landing, Home, Detail, Form, About, Exiting, Error } from "./views"
import { Navbar } from './components';
import { Route, Routes, useLocation } from "react-router-dom";
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3001"

function App() {

  const { pathname } = useLocation();

  return (
    <div className="App">
      {(pathname !== "/" && pathname !== "/exit") && <Navbar />}

      <Routes>
        <Route exact path="/" element={<Landing />} />

        <Route path="/home" element={<Home />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/create" element={<Form />} />

        <Route path="/about" element={<About />} />

        <Route path="/error" element={<Error />} />

        <Route path="/exit" element={<Exiting />} />

      </Routes>
    </div>
  )
}

export default App

/*aca en el video e JV dice que tambien se puede usar
element en vez de component y render trayendo al componente retornado
dentro de una funcion (callback)*/
/* se trae desestructurado o se puede traer de aun componente esto depende
de si en views pongo un archivo index*/
/* se usa el uselocation y el pathname para decidir donde no mostrar en este caso la navbar,
en la consola se ve que pathname es una propiedad del obj location?
JV hace const location = useLocation(); y esto {(pathname !== "/" && pathname !== "/exit") && <Navbar />}
lo pone como {location.pathname !== "/" && <Navbar/>}
*/