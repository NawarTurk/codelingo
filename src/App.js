import Header from "./components/Header";
import Footer from "./components/Footer";
import ConceptLearningGrid from "./components/ConceptLearningGrid";
import ConceptPracticeGrid from "./components/ConceptPracticeGrid";
import ConceptTestingGrid from "./components/ConceptTestingGrid";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [concepts, setConcepts] = useState([]);

  useEffect(() => {
    fetch("concepts.json")
      .then((response) => response.json())
      .then((data) => setConcepts(data));
  }, []);

  return (
    <div className="container">
      <Header />

      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Learn</Link>
            </li>
            <li>
              <Link to="/practice">Practice</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<ConceptLearningGrid concepts={concepts} />}
          ></Route>
          <Route path="/practice" element={<ConceptPracticeGrid />}></Route>
          <Route path="/test" element={<ConceptTestingGrid />}></Route>
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
