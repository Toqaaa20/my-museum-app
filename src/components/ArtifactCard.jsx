export default function ArtifactCard({ artifact }) {
  return (
    <div
      className="artifact-card"
      style={{
        width: "280px",
        height: "420px",
        backgroundColor: "#1a1a1a",
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        // ظل ناعم جداً واحترافي
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        border: "1px solid rgba(255, 215, 0, 0.1)",
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* طبقة الصورة مع تأثير التكبير */}
      <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
        <img
          src={artifact.image}
          alt={artifact.name}
          className="card-image"
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover",
            transition: "transform 0.6s ease" 
          }}
        />
      </div>

      {/* طبقة التظليل السفلي (Gradient Overlay) عشان الكلام يبان */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "50%",
        background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "25px",
        textAlign: "left"
      }}>
        <span style={{ 
          color: "gold", 
          fontSize: "0.8rem", 
          letterSpacing: "2px", 
          textTransform: "uppercase",
          marginBottom: "5px" 
        }}>
          {artifact.kingdom}
        </span>
        <h3 style={{ 
          margin: 0, 
          color: "white", 
          fontSize: "1.5rem", 
          fontWeight: "600",
          fontFamily: "'Playfair Display', serif" // خط فخم للمتاحف
        }}>
          {artifact.name}
        </h3>
        
        {/* خط ذهبي رفيع بيظهر تحت الاسم */}
        <div style={{ 
          width: "40px", 
          height: "2px", 
          backgroundColor: "gold", 
          marginTop: "10px" 
        }}></div>
      </div>

      {/* إضافة Hover Effect في CSS (اختياري لو بتستخدمي ملف CSS) */}
      <style>{`
        .artifact-card:hover {
          transform: translateY(-10px);
          border-color: rgba(255, 215, 0, 0.5);
          box-shadow: 0 20px 40px rgba(0,0,0,0.8);
        }
        .artifact-card:hover .card-image {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}