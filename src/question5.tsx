import React from 'react';
import qb from "./assets/qb5.png";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Question() {
    const navigate = useNavigate();
    const location = useLocation();
    const { ch } = location.state;
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
      <div style={{
        width: "60%", // 调整宽度以适应文本内容

        display: 'flex', // 使用 Flexbox 布局
        flexDirection: 'column', // 垂直排列
        justifyContent: 'center', // 垂直居中
        alignItems: 'center' // 水平居中
      }}>
        <div style={{
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          padding: "20px", // 添加一些内边距
          borderRadius: "20px",
        }}>
          <p style={{
            color: "#FFF", // 修改文本颜色以在白色背景上更清晰
            fontSize: "26px",
            textAlign: "center",
            margin: 0 // 去除默认的段落边距
          }}>
            你突然感覺有點餓，想吃個小東西，剛好周邊有好幾間店，你會比較想進去哪間店呢?
          </p>
        </div>
        <div style={{
          width: "60%",
          
        }}>
          <button style={{
            color: "#FFF", // 修改文本颜色以在白色背景上更清晰
            fontSize: "26px",
            textAlign: "center",
            margin: 0 // 去除默认的段落边距          
            ,backgroundColor:"rgba(245, 255, 245, 0.3)",
          padding: "20px", // 添加一些内边距
          borderRadius: "20px",
          marginTop:"15%",
          width:"100%",
          borderWidth:"8px",
          borderColor:"rgba(245, 255, 245, 1)"
          }} onClick={() => navigate('/end', { state: { ch: (ch || '') + '對燒肉有興趣,' } })}>
            肉肉套餐
          </button>
        </div>
        <div style={{
          width: "60%",
          
        }}>
          <button style={{
            color: "#FFF", // 修改文本颜色以在白色背景上更清晰
            fontSize: "26px",
            textAlign: "center",
            margin: 0 // 去除默认的段落边距          
            ,backgroundColor: "rgba(245, 255, 245, 0.3)",
          padding: "20px", // 添加一些内边距
          borderRadius: "20px",
          marginTop:"8%",
          width:"100%",
          borderWidth:"8px",
          borderColor:"rgba(245, 255, 245, 1)"
          }} onClick={() => navigate('/end', { state: { ch: (ch || '') + '對中式食物有興趣,' } })}>
            吃些清粥小菜好了
          </button>
        </div>
        <div style={{
          width: "60%",
          
        }}>
          <button style={{
            color: "#FFF", // 修改文本颜色以在白色背景上更清晰
            fontSize: "26px",
            textAlign: "center",
            margin: 0 // 去除默认的段落边距          
            ,backgroundColor: "rgba(245, 255, 245, 0.3)",
          padding: "20px", // 添加一些内边距
          borderRadius: "20px",
          marginTop:"8%",
          width:"100%",
          borderWidth:"8px",
          borderColor:"rgba(245, 255, 245, 1)"
          }} onClick={() => navigate('/end', { state: { ch: (ch || '') + '對火鍋或日韓料理有興趣,' } })}>
            熱熱的湯麵
          </button>
          
        </div>
        <div style={{
          width: "60%",
          
        }}>
          <button style={{
            color: "#FFF", // 修改文本颜色以在白色背景上更清晰
            fontSize: "26px",
            textAlign: "center",
            margin: 0 // 去除默认的段落边距          
            ,backgroundColor: "rgba(245, 255, 245, 0.3)",
          padding: "20px", // 添加一些内边距
          borderRadius: "20px",
          marginTop:"8%",
          width:"100%",
          borderWidth:"8px",
          borderColor:"rgba(245, 255, 245, 1)"
          }} onClick={() => navigate('/end', { state: { ch: (ch || '') + '對麻辣鍋或辣的食物有興趣,' } })}>
            有辣的那個我就吃
          </button>
          
        </div>
      </div>
    </div>
  );
  
  
}

export default Question;