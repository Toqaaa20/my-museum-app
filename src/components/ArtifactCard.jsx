export default function ArtifactCard({ artifact, onClick }) {
  return (
    <div 
      className="artifact-card" 
      onClick={() => onClick(artifact)}
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        width: "200px",
        cursor: "pointer",
        textAlign: "center",
      }}
    >
      <img 
        src={artifact.image} 
        alt={artifact.name} 
        style={{ width: "100%", borderRadius: "5px" }}
      />
      <h3>{artifact.name}</h3>
      <p>{artifact.period}</p>
    </div>
  );
}
