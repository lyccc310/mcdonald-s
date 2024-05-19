import React from 'react';
import sb from "./assets/select.png";
const select = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: `url(${sb})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const rowStyle: React.CSSProperties = {
    display: 'flex',
  };

  const buttonStyle: React.CSSProperties = {
    margin: '10px',
    padding: '10px 20px',
    border: '1px solid #000',
    borderRadius: '5px',
    cursor: 'pointer',
  };


  return (
    <div style={containerStyle}>
        <div style={{ backgroundColor: 'rgba(255,255,255, 0.5)', alignItems: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column',width:"50%",height:"50%",borderRadius:'20px' }}>
            <div>
                <text style={{fontSize:24,color: "#888"}}>選擇最接近自己的選項</text>
            </div>
            <div style={rowStyle}>
                <button style={buttonStyle}>1</button>
                <button style={buttonStyle}>2</button>
                <button style={buttonStyle}>3</button>
            </div>
            <div style={rowStyle}>
                <button style={buttonStyle}>4</button>
                <button style={buttonStyle}>5</button>
                <button style={buttonStyle}>6</button>
            </div>
        </div>

    </div>
  );
};

export default select;
