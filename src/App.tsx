import './App.css'
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage.tsx";
import Navigation from "./components/Navigation.tsx";
import RickAndMortyCharacters from "./components/RickAndMortyCharacters.tsx";

function App() {

  return (
    <>
        <Navigation/>
        <Routes>
            <Route path={"/"} element={<WelcomePage/>}/>
            <Route path={"/characters"} element={<RickAndMortyCharacters/>}/>
        </Routes>
    </>
  )
}

export default App
