import qb from "./assets/qb2.png";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const task = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation();
    const { pch} = location.state|| {};
  return (

    <div style={{
        backgroundImage: `url(${qb})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        display: 'flex', // 使用 Flexbox 布局
        flexDirection: 'column', // 垂直方向排列子元素
        justifyContent: 'flex-start', // 垂直方向从上开始对齐
        alignItems: 'center', // 水平居中
        paddingTop: '10vh' // 调整这个值来设置距离顶部的距离
      }}>
        <div>
            <text style={{color:'#FFF'}}>{pch}</text>
        </div>
        <div>
            <text style={{color:'#FFF',fontSize:20}}>歡迎，根據心理測驗的結果，我們推薦你這些餐廳。前往用餐並回報吧。</text>
        </div>
        <button  style={{
        color: "#DDD", // 修改文本颜色以在白色背景上更清晰
        fontSize: "20px",
        textAlign: "center",
        margin: 0 // 去除默认的段落边距          
        ,backgroundColor: "rgba(245, 255, 245, 0.5)",
        padding: "10px", // 添加一些内边距
        borderRadius: "20px",
        marginTop:"8%",
        width:"10%",
        borderWidth:"8px",
        borderColor:"rgba(245, 255, 245, 1)",
  
        }} onClick={() => navigate('/')}>
            完成
        </button></div>
  )
}

export default task

