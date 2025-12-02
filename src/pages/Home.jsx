import { useState } from "react";
import { artifacts } from "../data";
import ArtifactCard from "../components/ArtifactCard";

export default function Home() {
  const [selected, setSelected] = useState(null);

  const handleClick = (artifact) => {
    setSelected(artifact);
    alert(`You clicked on ${artifact.name}!`);
  };

  const contentStyle = {
    position: "relative",
    zIndex: 1,
    width: "100%",
   color: "white", // النص أبيض
  WebkitTextStroke: "1px black", // حواف سوداء
  textAlign: "center", // لو عايزة الكلام في النص
  };


  const pageStyle = {
    padding: "20px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: 'url("/images/wallpaper.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h1>Welcome to the Museum Experience</h1>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {artifacts.map((artifact) => (
            <ArtifactCard 
              key={artifact.id} 
              artifact={artifact} 
              onClick={handleClick} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
