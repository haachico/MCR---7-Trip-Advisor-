import Home from "./Pages/Home";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Countries from "./Pages/Countries";
import Destinations from "./Pages/Destinations";
import DestinationDetails from "./Pages/DestinationDetails";
import Header from "./Components/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="countries/:continent" element={<Countries />} />
        <Route path="destinations/:country" element={<Destinations />} />
        <Route path="details/:destination" element={<DestinationDetails />} />
      </Routes>
    </div>
  );
}
