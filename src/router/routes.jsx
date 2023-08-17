import { Routes, Route } from "react-router-dom";
// Importar los componentes necesarios de la biblioteca 'react-router-dom
import routeing from "../constant/Routes";
// importamos la colection de rutas

function Router() {
  return (
    <Routes>
      {routeing.map((element, index) => {
        return (
          <Route
            key={index}
            path={element.path}
            element={<element.component />}
          />
        );
      })}
    </Routes>
  );
}

export default Router;
