import { Text, View } from 'react-native'
import React, { Component } from 'react'
import qb from "./assets/qb.png";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function End() {
    const navigate = useNavigate();
    const location = useLocation();
    const { ch } = location.state;
    return (
        <div  style={{
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
                width: "30%",
                
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
                }} onClick={() => navigate('/')}>

                     {/* !!!!!!!!!!!!!!要傳的特徵!!!!! */}
                {ch} 
                   {/* !!!!!!!!!!!!!!要傳的特徵!!!!! */}
                   
                </button>
            </div>
          </div>
    )
  
}

export default End;