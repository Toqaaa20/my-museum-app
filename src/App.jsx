import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ArtifactDetails from "./pages/ArtifactDetails";

function App() {
  const layoutStyle = {
    // اللون الأساسي للموقع (أسود ملكي)
    backgroundColor: "#0a0a0a", 
    // صورة النقوش المفرغة اللي هتتكرر في كل الصفحات
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.1)), url("/images/museum-bg.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    width: "100%",
    margin: 0,
    padding: 0,
  };

  return (
    <div style={layoutStyle}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/artifact/:id" element={<ArtifactDetails />} />
      </Routes>
    </div>
  );
}

export default App;
