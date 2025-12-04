import { useState } from "react";
import { artifacts } from "../data";
import ArtifactCard from "../components/ArtifactCard";

export default function Home() {
  const [selected, setSelected] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = (artifact) => {
    setSelected(artifact);
    alert(`You clicked on ${artifact.name}!`);
  };

  const contentStyle = {
    position: "relative",
    zIndex: 1,
    width: "100%",
    color: "white",
    WebkitTextStroke: "1px black",
    textAlign: "center",
  };

 const pageStyle = {
  width: "100%",
   height: "100vh",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  backgroundImage: 'url("/images/wallpaper.jpg")',
 backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};


  const filteredArtifacts = artifacts.filter((artifact) =>
    artifact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h1>Welcome to the Museum Experience</h1>

        <input
          type="text"
          placeholder="Search for an artifact..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            margin: "20px auto",
            width: "80%",
            maxWidth: "300px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            display: "block",
          }}
        />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {filteredArtifacts.map((artifact) => (
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

