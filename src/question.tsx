
import qb from "./assets/qb.png";

import { useNavigate } from 'react-router-dom';

function Question() {
  const navigate = useNavigate();
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
            color: "#DDD", // 修改文本颜色以在白色背景上更清晰
            fontSize: "26px",
            textAlign: "center",
            margin: 0 // 去除默认的段落边距
          }}>
            你最近的生活好忙碌，等你回過神來，你才發現今天是你的生日，生日快樂，你會想要邀誰來陪你呢?
          </p>
        </div>
        <div style={{
          width: "60%",
          
        }}>
          <button style={{
            color: "#DDD", // 修改文本颜色以在白色背景上更清晰
            fontSize: "26px",
            textAlign: "center",
            margin: 0 // 去除默认的段落边距          
            ,backgroundColor:"rgba(245, 255, 245, 0.5)",
          padding: "20px", // 添加一些内边距
          borderRadius: "20px",
          marginTop:"15%",
          width:"100%",
          borderWidth:"8px",
          borderColor:"rgba(245, 255, 245, 1)"
          }}   onClick={() => navigate('/question2', { state: { ch: '喜歡熱鬧,' } })}>
            找上一大群人，該大肆慶祝了
          </button>
        </div>
        <div style={{
          width: "60%",
          
        }}>
          <button style={{
            color: "#DDD", // 修改文本颜色以在白色背景上更清晰
            fontSize: "26px",
            textAlign: "center",
            margin: 0 // 去除默认的段落边距          
            ,backgroundColor: "rgba(245, 255, 245, 0.5)",
          padding: "20px", // 添加一些内边距
          borderRadius: "20px",
          marginTop:"8%",
          width:"100%",
          borderWidth:"8px",
          borderColor:"rgba(245, 255, 245, 1)"
          }} onClick={() => navigate('/question2', { state: { ch: '喜歡跟親近的人吃飯,' } })}>
            找一兩個親近的人，聊天放鬆一下
          </button>
        </div>
        <div style={{
          width: "60%",
          
        }}>
          <button style={{
            color: "#DDD", // 修改文本颜色以在白色背景上更清晰
            fontSize: "26px",
            textAlign: "center",
            margin: 0 // 去除默认的段落边距          
            ,backgroundColor: "rgba(245, 255, 245, 0.5)",
          padding: "20px", // 添加一些内边距
          borderRadius: "20px",
          marginTop:"8%",
          width:"100%",
          borderWidth:"8px",
          borderColor:"rgba(245, 255, 245, 1)"
          }} onClick={() => navigate('/question2', { state: { ch: '喜歡自己一個人,' } })}>
            不找任何人，自己獨享大餐
          </button>
        </div>
      </div>
    </div>
  );
  
  
}

export default Question;