import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import ConceptGrid from "./components/ConceptGrid";
import { useState, useEffect } from "react";

function App() {
  const [concepts, setConcepts] = useState([]);

  useEffect( ()=> {
    fetch("concepts.json")
    .then((response) => response.json())
    .then((data) => setConcepts(data));},
    []);




  return (
  
    <div>
      <Header />
      <ConceptGrid />
      <Footer />
    </div>
  );
}

export default App;
