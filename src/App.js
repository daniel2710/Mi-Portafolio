import Header from "./components/Header";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Skills from "./pages/Skills";
import Proyectos from "./pages/Proyectos";
import Educacion from "./pages/Educacion";
// styles
import '../src/app.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Header/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/educacion" element={<Educacion/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
