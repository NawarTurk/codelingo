import Header from "./components/Header";
import Footer from "./components/Footer";
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
  
    <div className="container">
      <Header />
      <ConceptGrid concepts={concepts} />
      <Footer />
    </div>
  );
}

export default App;
