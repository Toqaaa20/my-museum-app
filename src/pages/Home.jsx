import { useState } from "react";
import { artifacts } from "../data";
import ArtifactCard from "../components/ArtifactCard";
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa"; 

export default function Home() {
  const [kingdomFilter, setKingdomFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredId, setHoveredId] = useState(null);

  const kingdoms = ["all", "Old Kingdom", "Middle Kingdom", "New Kingdom", "Greco-Roman Period", "Ptolemaic Period"];

  const filteredArtifacts = artifacts.filter((artifact) => {
    const matchesSearch = artifact.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesKingdom = kingdomFilter === "all" || artifact.kingdom === kingdomFilter;
    return matchesSearch && matchesKingdom;
  });



  const pageStyle = {
    width: "100%",
    minHeight: "100vh",
    padding: "120px 20px 60px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "transparent", 
    boxSizing: "border-box",
  };

  const buttonStyle = (k) => ({
  padding: "8px 20px",  
  margin: "4px",
  cursor: "pointer",
  borderRadius: "20px", 
  

  border: kingdomFilter === k ? "1.5px solid gold" : "1px solid rgba(255,255,255,0.15)",
  backgroundColor: kingdomFilter === k ? "gold" : "rgba(255, 255, 255, 0.05)",
  color: kingdomFilter === k ? "black" : "rgba(255, 255, 255, 0.8)",
  
  
  fontWeight: "700", 
  fontSize: "0.85rem", 
  textTransform: "capitalize",
  
  transition: "all 0.3s ease",
  backdropFilter: "blur(5px)",
  
 
  whiteSpace: "nowrap", 
});

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, 320px)", 
    gap: "50px", 
    padding: "40px 20px",
    width: "100%", 
    maxWidth: "1200px",
    margin: "0 auto",
    justifyContent: "center", 
  };

  return (
    <div style={pageStyle}>
      <div style={{ width: "100%", textAlign: "center", color: "white" }}>
        
        <h1 style={{ 
          fontSize: "3.5rem", 
          fontWeight: "900", 
          color: "gold",
          letterSpacing: "3px",
          textShadow: "0 10px 20px rgba(0,0,0,0.6)",
          margin: "0 0 10px 0"
        }}>
          THE ROYAL EGYPTIAN GALLERY
        </h1>
        
        <p style={{ marginBottom: "40px", fontSize: "1rem", opacity: 0.6, letterSpacing: "3px" }}>
          EXPLORE THE DIGNITY OF ANCIENT EGYPT, WHERE EVERY ARTIFACT TELLS A STORY OF GLORY AND MYSTERY
        </p>

        
        <input
          type="text"
          placeholder="Search for an artifact..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "16px 30px",
            marginBottom: "40px",
            width: "90%",
            maxWidth: "450px",
            borderRadius: "50px",
            border: "1px solid rgba(255,215,0,0.2)",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            outline: "none",
            backdropFilter: "blur(15px)",
            textAlign: "center",
            fontSize: "1rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
          }}
        />

        {/* Filter Buttons */}
        <div style={{ marginBottom: "60px", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
          <FaFilter style={{ color: "gold", marginRight: "10px" }} />
          {kingdoms.map((k) => (
            <button key={k} onClick={() => setKingdomFilter(k)} style={buttonStyle(k)}>
              {k === "all" ? "All Eras" : k}
            </button>
          ))}
        </div>

        {/* Artifacts Grid */}
        <div style={gridContainerStyle}>
          {filteredArtifacts.map((artifact) => (
            <Link key={artifact.id} to={`/artifact/${artifact.id}`} style={{ textDecoration: "none" }}>
              <div
                onMouseEnter={() => setHoveredId(artifact.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  transform: hoveredId === artifact.id ? "translateY(-15px) scale(1.02)" : "translateY(0) scale(1)",
                  transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  filter: hoveredId && hoveredId !== artifact.id ? "brightness(0.4) blur(3px)" : "none",
                  zIndex: hoveredId === artifact.id ? 10 : 1,
                }}
              >
                <ArtifactCard artifact={artifact} />
              </div>
            </Link>
          ))}
        </div>

        {/* No Results Message */}
        {filteredArtifacts.length === 0 && (
          <div style={{ marginTop: "80px", textAlign: "center" }}>
            <p style={{ fontSize: "1.4rem", color: "gold", opacity: 0.7 }}>
              The sands of time haven't revealed this treasure yet...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}