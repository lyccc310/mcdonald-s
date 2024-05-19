import axios from 'axios';
import qb from "./assets/qb.png";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useCallback ,useState} from 'react';

function End() {
    const navigate = useNavigate();
    const location = useLocation();
    const { ch } = location.state;

    const [ansResponse, setAnsResponse] = useState('');
    const qqq =`請告訴我我是哪種客群並推薦餐廳給我，我是一個 ${ch} 的人`;

    const handleSendMessage = useCallback(async () => {
        try {
            const response = await axios.post(
                'https://jis36mlolh.execute-api.us-west-2.amazonaws.com/test2/fuck2',
                { question: qqq },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.data && response.data.answer) {
                setAnsResponse(response.data.answer);
            } else {
                console.error('回應結構不符預期:', response.data);
            }
        } catch (error) {
            console.error('錯誤:', error);
        }
    }, [qqq]);

    useEffect(() => {
        handleSendMessage();
    }, [handleSendMessage]);

    return (
        <div  style={{
            backgroundImage: `url(${qb})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingTop: '10vh'
          }}>
            <div style={{
                width: "30%",
                marginTop:'10%'
            }}>
                <div>
                    <text style={{color:'#FFF',textAlign:'center'}}>{ansResponse}</text>
                </div>
                
                <button style={{
                color: "#DDD",
                fontSize: "20px",
                textAlign: "center",
                margin: 0,
                backgroundColor: "rgba(245, 255, 245, 0.5)",
                padding: "10px",
                borderRadius: "20px",
                marginTop:"8%",
                width:"60%",
                borderWidth:"8px",
                borderColor:"rgba(245, 255, 245, 1)"
                }} onClick={() => navigate('/')}>
                返回 
                </button>
            </div>
          </div>
    )
  
}

export default End;
