import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import UserDash from "./pages/UserDash";
import AdminDash from "./pages/AdminDash";
import UserRoute from "./components/privateRoutes/UserRoute";
import AdminRoute from "./components/privateRoutes/AdminRoute";
import Home from "./pages/Home";
import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";

function App() {
  // const [Annonces, setAnnonces] = useState([
  //   {
  //     id: uuidv4(),
  //     title: "villa s+3",
  //     poster:
  //       "https://www.ateliers-lofts.com/img/i/2/3/0/5/lg_20.jpg?1685183132",
  //     description:
  //       "Située aux Abatilles, cette maison entièrement rénovée avec des matériaux de qualité offre une pièce de vie lumineuse avec cuisine semi-ouverte ouvrant sur une belle terrasse, ainsi que trois suites et leurs salles de bains/salles d'eau.

  //       À l'extérieur, la terrasse prolongée par le jardin invite à la détente.

  //       Capacité d'accueil jusqu'à 6 personnes,

  //       À 5 minutes des plages et commerces.

  //       Disponible juillet/août à la semaine et en location meublée longue durée en hors saison",
  //       raiting: 2,
  //   },
  //   const [stars , setStars]=useState(0)
  // const [titre , setTitre]=useState("")
  // const [filtred , setFiltred]=useState(movies)

  // useEffect(() => {

  //   setFiltred(Annonces.filter((annonce)=>  annonce.title.toLowerCase().includes(titre.toLowerCase()) && movie.raiting >= stars    ))
  // }, [titre,stars,annonces])

  const [currentForm, setCurrentForm] = useState("Login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="App">
      {currentForm === "Login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}

      <header className="App-header">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />

          {/*route privee lel user mte3na */}
          <Route element={<UserRoute />}>
            <Route path="/user" element={<UserDash />} />
          </Route>
          {/* route privee lel admin */}
          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<AdminDash />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
