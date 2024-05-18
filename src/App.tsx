import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
// import { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import type { Schema } from "../amplify/data/resource";
// import { generateClient } from "aws-amplify/data";
import './App.css';
import djidjdidje from './assets/djidjdidje.png';

// const client = generateClient<Schema>();

function App() {
  // const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  //
  // useEffect(() => {
  //   client.models.Todo.observeQuery().subscribe({
  //     next: (data) => setTodos([...data.items]),
  //   });
  // }, []);

  // function createTodo() {
  //   client.models.Todo.create({ content: window.prompt("Todo content") });
  // }
  //
  // function deleteTodo(id: string) {
  //     client.models.Todo.delete({ id })
  // }

  return (
      <Authenticator>
          {({ signOut, user }) => (
    <main>
        <h1>{user?.signInDetails?.loginId}今天要吃什麼呢?</h1>
      {/*<h1>My todos</h1>*/}
      {/*<button onClick={createTodo}>+ new</button>*/}
      {/*<ul>*/}
      {/*  {todos.map((todo) => (*/}
      {/*    <li onClick={() => deleteTodo(todo.id)} key={todo.id}>{todo.content}</li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
      {/*<div>*/}
      {/*  🥳 App successfully hosted. Try creating a new todo.*/}
      {/*  <br />*/}
      {/*  <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">*/}
      {/*    Review next step of this tutorial.*/}
      {/*  </a>*/}
      {/*</div>*/}
        <div
            style={{
                display: 'flex',
                backgroundImage: `url(${djidjdidje})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh',
            }}
        >
            <div style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", width: '56%', height: '95%', borderRadius: "10px" }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '70%' }}>
                    <button style={{ width: '200px', height: '100px', fontSize: '20px', padding: '10px', backgroundColor: "#FFF", borderRadius: "10px", borderColor: "#FFF", color: '#888', letterSpacing: '5px', fontWeight: 'bold' }}>
                        開始冒險
                    </button>
                </div>
            </div>

            <div style={{width: '3%'}}>

            </div>
            <div style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", width: '41%', height: '95%', borderRadius: "10px", position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '70%' }}>
                    <button style={{ width: '30%', height: '100px', fontSize: '20px', padding: '10px', backgroundColor: "#FFF", borderRadius: "10px", borderColor: "#FFF", color: '#888', letterSpacing: '5px', fontWeight: 'bold' }}>
                        心靈測驗
                    </button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30%' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20%',backgroundColor:"rgba(197, 125, 160, 0.5)", width:"20%", borderRadius: "10px" }}><p style={{color:"white"}}>適合第一次使用</p></div>

                </div>
            </div>
        </div>
        <button onClick={signOut}>Sign out</button>
    </main>
          )}
      </Authenticator>
  );
}

export default App;
