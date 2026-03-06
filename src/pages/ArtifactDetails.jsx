import { useParams } from "react-router-dom";
import { artifacts } from "../data";
import { useState, useRef, useEffect } from "react";
import "@google/model-viewer";

export default function ArtifactDetails() {
  const { id } = useParams();
  const artifact = artifacts.find((item) => item.id.toString() === id);
  
 
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);


  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  if (!artifact) return <div style={{ color: "white", textAlign: "center", padding: "100px" }}>Loading...</div>;


  const storyText = artifact.description || "Ancient Egypt was a civilization of ancient North Africa, concentrated along the lower reaches of the Nile River. This artifact represents the dignity and craftsmanship of that era.";
  

  const words = storyText.split(" ");

  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "transparent",
      color: "white",
      padding: "120px 5% 40px",
      display: "flex",
      gap: "50px",
      flexDirection: "row", 
      alignItems: "flex-start"
    }}>
      
     
      <div style={{ 
        flex: "1", 
        height: "80vh", 
        overflowY: "auto", 
        paddingRight: "30px",
        textAlign: "justify",
        scrollbarWidth: "none" 
      }}>
        <h1 style={{ fontSize: "3rem", color: "gold", marginBottom: "30px", fontWeight: "900" }}>
          {artifact.name}
        </h1>
        
      
        <audio 
          ref={audioRef} 
          src={artifact.audioPath || "/audio/sample.mp3"} 
          onTimeUpdate={handleTimeUpdate}
          controls
          style={{ marginBottom: "20px", width: "100%", opacity: 0.5 }}
        />

        <div style={{ fontSize: "1.8rem", lineHeight: "1.8", fontWeight: "700" }}>
          {words.map((word, index) => {
          
            const isActive = currentTime > index * 0.4; 
            
            return (
              <span 
                key={index} 
                style={{
                  color: isActive ? "gold" : "rgba(255, 255, 255, 0.15)",
                  textShadow: isActive ? "0 0 15px gold" : "none",
                  transition: "all 0.4s ease",
                  display: "inline-block",
                  marginRight: "10px"
                }}
              >
                {word}
              </span>
            );
          })}
        </div>
      </div>

   
      <div style={{ 
        flex: "1", 
        position: "sticky", 
        top: "120px",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <div style={{ 
          width: "100%", 
          height: "100%", 
          backgroundColor: "rgba(0, 0, 0, 0.4)", 
          borderRadius: "40px",
          border: "1px solid rgba(255, 215, 0, 0.2)",
          backdropFilter: "blur(10px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 50px rgba(0,0,0,0.5)"
        }}>
          <model-viewer
            src={artifact.modelPath}
            alt={artifact.name}
            auto-rotate
            camera-controls
            shadow-intensity="2"
            exposure="1.2"
            style={{ width: "90%", height: "90%" }} 
          />
        </div>

      
        <div style={{ marginTop: "20px", textAlign: "center", width: "100%" }}>
           <p style={{ color: "gold", fontSize: "1.2rem", letterSpacing: "2px" }}>
             {artifact.kingdom} | {artifact.material}
           </p>
        </div>
      </div>

    </div>
  );
}