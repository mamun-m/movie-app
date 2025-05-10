import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import MovieDetails from "./Components/MovieDetails/MovieDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieDetails/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
