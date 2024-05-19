import React from 'react';
import qb from "./assets/qb3.png";
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
            在你準備開始動作時，你發現你的床邊有一個禮物盒，你覺得裡面是甚麼呢?
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
          }} onClick={() => navigate('/question4', { state: { ch: (ch || '') + '注重外觀,' } })}>
            精美的小雕塑
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
          }} onClick={() => navigate('/question4', { state: { ch: (ch || '') + '注重自己喜好,' } })}>
            古怪的小玩意
          </button>
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
          }} onClick={() => navigate('/question4', { state: { ch: (ch || '') + '注重食物品質,' } })}>
            非常多的零食
          </button>
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
          }} onClick={() => navigate('/question4', { state: { ch: (ch || '') + '注重cp值,' } })}>
            務實的小工具
          </button>
        </div>

      </div>
    </div>
  );
  
  
}

export default Question;