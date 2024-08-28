import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Team } from "./components/Team/Team";
import { Contact } from "./components/Contact/Contact";
import { Blogs } from "./components/Blogs/Blogs";
import { NoMatch } from "./components/NoMatch/NoMatch";
import { NavBar } from "./components/NavBar/NavBar";
import "./App.css";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />

      <div style={{ marginTop: "150px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
