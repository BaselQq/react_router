import './App.css'
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage.tsx";
import Navigation from "./components/Navigation.tsx";
import RickAndMortyCharacters from "./components/RickAndMortyCharacters.tsx";
import CharacterPage from "./pages/CharacterPage.tsx";

function App() {

  return (
    <>
        <Navigation/>
        <Routes>
            <Route path={"/"} element={<WelcomePage/>}/>
            <Route path={"/characters"} element={<RickAndMortyCharacters/>}/>
            <Route path={"/character/:id"} element={<CharacterPage/>}/>
        </Routes>
    </>
  )
}

export default App
