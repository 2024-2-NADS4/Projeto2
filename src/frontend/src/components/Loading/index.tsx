import React from "react";

export const Loading = () => {
  return (
    <div style={{textAlign: "center", padding: "20px", display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
      <div className="spinner" style={{
        width: "36px", 
        height: "36px", 
        border: "5px solid #ccc", 
        borderTop: "5px solid #000", 
        borderRadius: "50%", 
        animation: "spin 1s linear infinite"
      }}></div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};
