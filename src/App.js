
import React from "react";
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import './App.css';
import { KonyvekList } from "./Components/KonyvekList";
import { KonyvekSingle } from "./Components/KonyvekSingle";
import { KonyvekCreate } from "./Components/KonyvekCreate";
import { KonyvekMod} from "./Components/KonyvekMod";
import { KonyvekDelete } from "./Components/KonyvekDelete";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
           <NavLink to={`/`} className="nav-link">
              <span className="nav-link">Könyvek</span>
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={`/uj-konyvek`} className="nav-link">
              <span className="nav-link">Új könyv</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
          <Route path="/" element={<KonyvekList />} />
          <Route path="/konyvek/:konyvekId" element={<KonyvekSingle />} />
          <Route path="uj-konyvek" element={<KonyvekCreate />} />
          <Route path="mod-konyvek/:konyvekId" element={<KonyvekMod />} />
          <Route path="del-konyvek/:konyvekId" element={<KonyvekDelete />} />
      </Routes>
    </Router>
  );
}

export default App;