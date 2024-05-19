import React from 'react';
import sb from "./assets/select.png";

import { useNavigate } from 'react-router-dom';

const select = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
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
    backgroundColor:'#FFF',
    color:'#555'
  };


  return (
    <div style={containerStyle}>
        <div style={{ backgroundColor: 'rgba(255,255,255, 0.5)', alignItems: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column',width:"50%",height:"50%",borderRadius:'20px' }}>
            <div>
                <text style={{fontSize:24,color: "#888"}}>選擇最接近自己的選項</text>
            </div>
            <div style={rowStyle}>
                <button style={buttonStyle}  onClick={() => navigate('/task', { state: { pch: '家庭客' } })}>家庭客 </button>
                <button style={buttonStyle}  onClick={() => navigate('/task', { state: { pch: '小資族群' } })}>小資族群</button>
                <button style={buttonStyle}  onClick={() => navigate('/task', { state: { pch: '白領上班族' } })}>白領上班族</button>
            </div>
            <div style={rowStyle}>
                <button style={buttonStyle}  onClick={() => navigate('/task', { state: { pch: '雅致饗客' } })}>雅致饗客</button>
                <button style={buttonStyle}  onClick={() => navigate('/task', { state: { pch: '風雅饗宴客' } })}>風雅饗宴客</button>
                <button style={buttonStyle}  onClick={() => navigate('/task', { state: { pch: '鴻福食客' } })}>鴻福食客</button>
            </div>
        </div>

    </div>
  );
};

export default select;
